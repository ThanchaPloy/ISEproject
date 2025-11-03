document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="login">
      <img class="vector-1" src="vector-10.svg" />
      <img class="vector-2" src="vector-20.svg" />
      <div class="rectangle-2"></div>
      <div class="login2">Login</div>

      <div class="form">
        <label class="email">Email</label>
        <input type="email" class="input-email" placeholder="Enter your email" />

        <label class="password">Password</label>
        <input type="password" class="input-password" placeholder="Enter your password" />

        <button class="button">Login</button>
      </div>

      <div class="bottom-text">
        <span>Do not have an account?</span>
        <a href="signup.html" class="sign-up-link">Sign Up</a>
      </div>
    </div>
  `;
});
