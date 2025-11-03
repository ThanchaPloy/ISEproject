document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="signup">
      <img class="vector-1" src="vector-10.svg" />
      <img class="vector-2" src="vector-20.svg" />
      <div class="rectangle-2"></div>
      <div class="signup2">Sign Up</div>

      <div class="form">
        <label class="name">Name</label>
        <input type="text" class="input-name" placeholder="Enter your name" />

        <label class="email">Email</label>
        <input type="email" class="input-email" placeholder="Enter your email" />

        <label class="password">Password</label>
        <input type="password" class="input-password" placeholder="Enter your password" />

        <div class="role">
          <label><input type="radio" name="role" value="teacher" /> Teacher</label>
          <label><input type="radio" name="role" value="student" /> Student</label>
        </div>

        <button class="button">Sign Up</button>
      </div>

      <div class="bottom-text">
        <span>Already have an account?</span>
        <a href="login.html" class="login-link">Login</a>
      </div>
    </div>
  `;

  // attach behavior: submit signup to backend
  const nameInput = document.querySelector('.input-name');
  const emailInput = document.querySelector('.input-email');
  const passwordInput = document.querySelector('.input-password');
  const roleInputs = document.querySelectorAll('input[name="role"]');
  const btn = document.querySelector('.button');

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const firstName = (nameInput.value || '').split(' ')[0] || '';
    const lastName = (nameInput.value || '').split(' ').slice(1).join(' ') || '';
    const payload = {
      email: emailInput.value,
      password: passwordInput.value,
      firstName,
      lastName
    };

    // find selected role (not used by backend currently but sent)
    const role = Array.from(roleInputs).find(r => r.checked)?.value || 'student';
    payload.role = role;

    try {
      // NOTE: backend is running on port 3002 in this workspace — update if you run backend on a different port
      const res = await fetch('http://localhost:3002/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('Register failed', data);
        // prefer detailed PocketBase error when available
        const pbErr = data.pbError?.email?.message || data.pbError?.message || data.message;
        alert('Register failed: ' + (pbErr || JSON.stringify(data)));
        return;
      }
      console.log('Registered:', data);
      alert('สมัครเรียบร้อย');
      // store token for further calls
      if (data.token) localStorage.setItem('pb_token', data.token);
      // redirect to login or dashboard
      window.location.href = 'login.html';
    } catch (err) {
      console.error('Network error', err);
      alert('Network error: ' + err.message);
    }
  });
});

