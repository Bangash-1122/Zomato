import AuthPage from './AuthPage.jsx'

function FoodPartnerRegister() {
  return (
    <AuthPage
      partner
      register
      eyebrow="For restaurants"
      heading="Create your account"
      subheading="Join as a food partner and get started today."
      heroTitle="Your kitchen, our table."
      heroDescription="Meet more hungry customers and grow your restaurant, one great meal at a time."
      topPrompt="Already have an account?"
      topLinkLabel="Sign in"
      bottomPrompt="Looking to order something delicious?"
      bottomLinkLabel="Explore Zomato"
    >
      <form className="field-grid">
        <div className="field">
          <label htmlFor="restaurant-name">Restaurant name</label>
          <input id="restaurant-name" name="restaurantName" autoComplete="organization" placeholder="Your restaurant" />
        </div>
        <div className="field">
          <label htmlFor="full-name">Your name</label>
          <input id="full-name" name="name" autoComplete="name" placeholder="First and last name" />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@restaurant.com" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="new-password" placeholder="At least 8 characters" />
        </div>
        <button className="submit-button" type="button">Create account</button>
      </form>
      <p className="terms-note">
        By creating an account, you agree to our <a className="inline-link" href="#terms">Terms</a> and <a className="inline-link" href="#privacy">Privacy Policy</a>.
      </p>
    </AuthPage>
  )
}

export default FoodPartnerRegister
