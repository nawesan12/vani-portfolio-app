import Image from 'next/image'

import styles from './main.module.css'

export default function MainHeader() {
    return(
        <header className={styles.app_header}>
            <Image className={styles.image} src="/images/logo.png" width={140} height={140} alt="Vanina Gonzalez - Arquitecta" title="Vanina Gonzalez - Arquitecta"/>
            <h1 className={styles.title}>Vanina Gonzalez</h1>
            <h2 className={styles.subtitle}>Maestra Mayor de Obra</h2>
        </header>
    );
}