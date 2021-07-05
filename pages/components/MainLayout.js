import React from 'react'
import Header from './Header'
import styles from '../../styles/Layout.module.css'


export default function MainLayout({ children }) {
    return (
        <div className={styles.container}>
        <nav className={styles.nav}>
            <Header />
        </nav>

        <main className={styles.main}>
            {children}
        </main>
        </div>
    )
}


