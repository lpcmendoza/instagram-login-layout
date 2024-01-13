import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Login.module.css'

export default function Login() {
    return (
        <>
        <div className={styles.container}>
      <Head>
        <title>Instagram Login</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <img src="/ig-wordmark.png" alt="Instagram" className={styles.logo} />

          <form className={styles.loginForm}>
            <input type="text" placeholder="Phone number, username, or email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log In</button>
          </form>

          <div className={styles.divider}><hr /><span>OR</span><hr /></div>

          <a href="#" className={styles.forgotPassword}>Forgot password?</a>
        </div>
        &nbsp;
        <div className={styles.signUp}>
          <p>Don't have an account? <a href='https://www.instagram.com/accounts/emailsignup/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1' target='_blank'>Sign up.</a></p>
        </div>
        <div className={styles.getApp}>
          <p>Get the app.</p>
          <a href='https://apps.apple.com/us/app/instagram/id389801252?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1&vt=lo' target='_blank'>
            <img src="/app-store-badge.png" alt="Download on the App Store" className={styles.appStore} />
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DCBB79D3A-2027-4DFC-B04B-02E0CA6F36F7%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.google.com%252F&next=https://www.instagram.com/accounts/onetap/?next%3D%252F%26__coig_login%3D1&pli=1' target='_blank'>
          <img src="/google-play-badge.png" alt="Get it on Google Play" className={styles.googlePlay} />
          </a>        
        </div>
      </main>
    </div>
    <div className={styles.footer}>
      <span><a>Meta</a></span>
      <span><a>About</a></span>
      <span><a>Blog</a></span>
      <span><a>Jobs</a></span>
      <span><a>Help</a></span>
      <span><a>API</a></span>
      <span><a>Privacy</a></span>
      <span><a>Terms</a></span>
      <span><a>Locations</a></span>
      <span><a>Instagram Lite</a></span>
      <span><a>Threads</a></span>
      <span><a>Contact Uploading & Non-Users</a></span>
      <span><a>Meta Verified</a></span>
    </div>
    <div className={styles.copyright}>
      <span>English</span>
      <span>© 2024 Instagram from Meta</span>
    </div>

        </>

    )
}