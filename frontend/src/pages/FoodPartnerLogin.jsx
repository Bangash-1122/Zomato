import AuthPage from './AuthPage.jsx'

function FoodPartnerLogin() {
  return (
    <AuthPage
      partner
      register={false}
      eyebrow="For restaurants"
      heading="Welcome back"
      subheading="Sign in to continue as a food partner."
      heroTitle="Your kitchen, our table."
      heroDescription="Meet more hungry customers and grow your restaurant, one great meal at a time."
      topPrompt="New to Zomato?"
      topLinkLabel="Create account"
      bottomPrompt="Looking to order something delicious?"
      bottomLinkLabel="Explore Zomato"
    >
      <form className="field-grid">
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@restaurant.com" />
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

export default FoodPartnerLogin
