import styles from './main.module.css'

import Link from 'next/link'

export default function ContLink(){
    return(
        <>
        <Link href="/contacto"><a>
            <section className={styles.link_section}>
                <div>
                    <h3>Contacto</h3>
                    <p>Contactame! Puedo ayudarte.</p>
                </div>
                <div className={styles.arrow}>
                    &#8667;
                </div>
            </section>
        </a></Link>
        <style jsx>{`
            section{
                background:lightgreen;
            }    
        `}</style>
        </>
    )
}