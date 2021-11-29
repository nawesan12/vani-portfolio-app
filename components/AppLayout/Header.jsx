import Link from 'next/link';

import styles from './layout.module.css'

export default function Header() {
    return(
        <header className={styles.section_header}>
            <Link href="/"><a><span>&#8666;</span></a></Link>
            <span>V</span>
        </header>
    )
}