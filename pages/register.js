export default function Register() {
  return (
    <div className="register-container">
      <h2>Create Your Account</h2>
      <form method="POST" action="/api/auth/register">
        <label>Username</label>
        <input type="text" name="username" required />
        <label>Password</label>
        <input type="password" name="password" required />
        <label>Repeat Password</label>
        <input type="password" name="repeatPassword" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
