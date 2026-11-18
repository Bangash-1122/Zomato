import AuthPage from './AuthPage.jsx'

function UserLogin() {
  return (
    <AuthPage
      partner={false}
      register={false}
      eyebrow="Welcome to Zomato"
      heading="Welcome back"
      subheading="Sign in to continue as a food lover."
      heroTitle="Good food. Good days."
      heroDescription="Discover local favorites, find your next craving, and make every meal count."
      topPrompt="New to Zomato?"
      topLinkLabel="Create account"
      bottomPrompt="Want to grow your restaurant?"
      bottomLinkLabel="Join as a partner"
    >
      <form className="field-grid">
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" placeholder="At least 8 characters" />
        </div>
        <div className="form-options">
          <label className="remember-option">
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a className="inline-link" href="#forgot-password">Forgot password?</a>
        </div>
        <button className="submit-button" type="button">Sign in</button>
      </form>
    </AuthPage>
  )
}

export default UserLogin
