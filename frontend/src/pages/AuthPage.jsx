import { Link } from 'react-router-dom'

function Brand() {
  return (
    <Link className="brand" to="/user/login" aria-label="Zomato home">
      <span className="brand-mark" aria-hidden="true">z</span>
      <span>zomato</span>
    </Link>
  )
}

function AuthPage({
  partner,
  register,
  eyebrow,
  heading,
  subheading,
  heroTitle,
  heroDescription,
  topPrompt,
  topLinkLabel,
  bottomPrompt,
  bottomLinkLabel,
  children,
}) {
  const signInPath = partner ? '/food-partner/login' : '/user/login'
  const signUpPath = partner ? '/food-partner/register' : '/user/register'
  const userPath = register ? '/user/register' : '/user/login'
  const partnerPath = register ? '/food-partner/register' : '/food-partner/login'
  const otherAudiencePath = partner ? '/user/login' : '/food-partner/login'

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <aside className="auth-aside">
          <Brand />
          <div className="aside-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> Made for good food</span>
            <h1>{heroTitle}</h1>
            <p>{heroDescription}</p>
            <div className="food-art" aria-hidden="true">
              <span className="food-orbit" />
              <span className="food-chip food-chip-top">✦ <span>Fresh picks<br />for you</span></span>
              <span className="food-plate">🥗</span>
              <span className="food-chip food-chip-bottom">♥ <span>Made with<br />a little love</span></span>
            </div>
          </div>
          <span className="aside-footnote">A little more joy in every bite.</span>
        </aside>

        <section className="auth-content" aria-labelledby="form-title">
          <div className="auth-topbar">
            <span>{topPrompt}</span>
            <Link to={register ? signInPath : signUpPath}>{topLinkLabel}</Link>
          </div>

          <div className="auth-form-wrap">
            <span className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</span>
            <h2 className="form-heading" id="form-title">{heading}</h2>
            <p className="form-subheading">{subheading}</p>

            <nav className="account-type" aria-label="Choose account type">
              <Link to={userPath} aria-current={!partner ? 'page' : undefined}>
                For myself
              </Link>
              <Link to={partnerPath} aria-current={partner ? 'page' : undefined}>
                Food partner
              </Link>
            </nav>

            {children}
          </div>

          <div className="auth-bottom">
            {bottomPrompt}
            <Link to={otherAudiencePath}>{bottomLinkLabel}</Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AuthPage
