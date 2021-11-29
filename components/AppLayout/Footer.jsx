import styles from './layout.module.css'

export default function Footer(){
    return(
        <footer className={styles.section_footer}>
            <p className={styles.copy}>Vanina Gonzalez - Arquitecta</p>
            <span className={styles.subparagraph}>Web made by Nahuel Santillan</span>
        </footer>
    )
}