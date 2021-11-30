import Image from 'next/image'

export default function PresentationHero(){
    return(
        <>
            <div className="profile">
                <h1>Hola, soy<br/> Vanina Gonzalez</h1>
                <div className="profile_photo" style={{width:100, height:100, borderRadius: '50%', overflow: 'hidden', position:'relative'}}>
                    <Image src="/images/profile_photo.png" layout="fill" objectFit="cover" alt="Vanina Gonzalez"/>
                </div>
            </div>
            <section className="presentation">
                <h2>Sobre mi</h2>
                <p className="bio">
                    Soy una maestra mayor de obra de 19 años, con experiencia en el diseño de viviendas, departamentos y comercios, modelado 3D de obras 
                    y representaciones reales de ellas. Termine mi carrera como maestra mayor de obra a los 19 años, y ahora estoy 
                    estudiando arquitectura en la UNMDP. Cuento con una amplia variedad de proyectos ya hechos por mi cuenta.
                    La pagina dice arquitecta porque mi esposo es un ansioso y mientras programa puso que ya me recibi uwu.
                    Siempre buscare la idoneidad en mis trabajos, fijandome hasta en el ultimo detalle para
                    poder asegurar una buena experiencia y comodidad para mis clientes.
                </p>
                <article className="education">
                    <h4>Educación</h4>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                            <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                            </svg> E.E.S.T N°3 MDP
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-certificate" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
                            <circle cx="6" cy="14" r="3" />
                            <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
                            </svg>Facultad de Arquitectura y Diseño MDP
                        </li>
                    </ul>
                    <h4>Herramientas</h4>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-beizer-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="3" width="4" height="4" rx="1" />
                            <rect x="17" y="17" width="4" height="4" rx="1" />
                            <line x1="7" y1="5" x2="14" y2="5" />
                            <line x1="10" y1="19" x2="17" y2="19" />
                            <circle cx="9" cy="19" r="1" />
                            <circle cx="15" cy="5" r="1" />
                            <path d="M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5" />
                            </svg>Diseño en AutoCAD
                        </li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-3d-cube-sphere" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 17.6l-2 -1.1v-2.5" />
                            <path d="M4 10v-2.5l2 -1.1" />
                            <path d="M10 4.1l2 -1.1l2 1.1" />
                            <path d="M18 6.4l2 1.1v2.5" />
                            <path d="M20 14v2.5l-2 1.12" />
                            <path d="M14 19.9l-2 1.1l-2 -1.1" />
                            <line x1="12" y1="12" x2="14" y2="10.9" />
                            <line x1="18" y1="8.6" x2="20" y2="7.5" />
                            <line x1="12" y1="12" x2="12" y2="14.5" />
                            <line x1="12" y1="18.5" x2="12" y2="21" />
                            <path d="M12 12l-2 -1.12" />
                            <line x1="6" y1="8.6" x2="4" y2="7.5" />
                            </svg>Modelado en SketchUP
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                            </svg>Ilustracion y presentaciones en Illustrator
                        </li>
                    </ul>
                </article>
            </section>

            <style jsx>{`
                .profile {
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    padding:1rem 1rem 0;
                }

                .presentation {
                    padding:0 1rem 1rem;
                }

                .bio {
                    line-height:1.6;
                    color:#333;
                    padding:.2rem;
                }

                h4 {
                    font-size:1.5rem;
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
                }

                svg {
                    margin-right:.5rem;
                }
            `}</style>
        </>
    );
}