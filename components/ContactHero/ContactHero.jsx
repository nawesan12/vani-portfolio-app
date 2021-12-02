import Image from 'next/image'
import ContactForm from './ContactForm';

export default function ContactHero() {
    return(
        <>
            <h1>Contacto</h1>
            <section className="contact_hero">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        </svg>Email: <a href="mailto:vaninagonzalez.arq@gmail.com Subject=Aquí%20el%20asunto%20del%20mail" target="blank">vaninagonzalez.arq@hotmail.com</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>Telefono: <a href="tel:+542235789456">+54 223 5789456</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>Instagram: <a href="https://www.instagram.com/vaninagonzalez.arq/" target="blank">@vaninagonzalez.arq</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>Ubicacion: <a href="https://www.google.com.ar/maps/place/Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.0174106,-57.6705735,12z/data=!3m1!4b1!4m5!3m4!1s0x9584d94d19d34209:0xdd9670804bfed126!8m2!3d-38.0054771!4d-57.5426106" target="blank">Mar del Plata</a>
                    </li>
                </ul>
            </section>
            <ContactForm />
            
            <style jsx>{`
                h1 {
                    text-align:center;
                }

                .contact_hero {
                    height:20vh;
                }

                ul {
                    margin:0;
                    padding:0 1rem;
                }

                li {
                    list-style-type:none;
                    margin-bottom:.6rem;
                    display:flex;
                    align-items:center;
                    text-align: justify;
                    font-weight:500;
                    position:relative;
                    z-index:3;
                }

                svg {
                    margin-right:.5rem;
                }

                a {
                    margin-left:.5rem
                }
            `}</style>
        </>
    )
}