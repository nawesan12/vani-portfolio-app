import styles from './main.module.css'

import Link from 'next/link'

export default function PresLink(){
    return(
        <>
        <Link href="/presentacion"><a>
            <section className={styles.link_section}>
                <div>
                    <h3>Presentacion</h3>
                    <p>Conoceme mas! Te contare sobre mi carrera y conocimientos.</p>
                </div>
                <div className={styles.arrow}>
                    &#8667;
                </div>
            </section>
        </a></Link>
        <style jsx>{`
            section{
                background:lightcoral;
            }    
        `}</style>
        </>
    )
}