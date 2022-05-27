import styles from './navbar.module.css'
import Logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function Navbar () {
    return (
        <nav className={styles.mainNav}>
        <a className={styles.mainNavLogo} href="./index.html">
          <img
            className={styles.mainNavLogoImage}
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.srOnly}>Argent Bank</h1>
        </a>
        <div>
        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          <a className={styles.mainNavItem} href="./sign-in.html">
            Sign In
          </a>
        </div>
      </nav>
    )
}

export default Navbar