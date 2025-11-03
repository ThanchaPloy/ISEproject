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
});

