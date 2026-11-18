import AuthPage from './AuthPage.jsx'

function UserRegister() {
  return (
    <AuthPage
      partner={false}
      register
      eyebrow="Welcome to Zomato"
      heading="Create your account"
      subheading="Join as a food lover and get started today."
      heroTitle="Good food. Good days."
      heroDescription="Discover local favorites, find your next craving, and make every meal count."
      topPrompt="Already have an account?"
      topLinkLabel="Sign in"
      bottomPrompt="Want to grow your restaurant?"
      bottomLinkLabel="Join as a partner"
    >
      <form className="field-grid">
        <div className="field">
          <label htmlFor="full-name">Full name</label>
          <input id="full-name" name="name" autoComplete="name" placeholder="First and last name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
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

export default UserRegister
