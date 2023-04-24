import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Nav from './Nav'
import { EB_Garamond } from 'next/font/google'

const ebGramond = EB_Garamond({
    subsets: ['latin'],
    display: 'swap'
  })

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/" >
                <span className={styles.navbar_brand_logo}>
                    <Image src="/logo.png" alt="my_logo_image" width={40} height={40} />
                    <h2 className={ebGramond.className}>NextFlix</h2>
                </span>
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header