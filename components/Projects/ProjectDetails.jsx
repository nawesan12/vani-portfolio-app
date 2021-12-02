import Head from 'next/head'
import Image from 'next/image'

export default function ProjectDetails(props) {

    const gallery = [];
    const details = [];

    return(
        <>
        <Head>
            <title>{"Vanina Gonzalez - " + props.title}</title>
        </Head>
        <section>
            <header className="section_header">
                <span className="arrow" onClick={props.volver}>&#8666;</span>
                <span className="header_title">{props.title}</span>
            </header>
            
            <div className="principal_image">
                <Image src={props.image} layout="fill" objectFit="cover" alt={props.title}/>
            </div>

            <article className="description_article">
                <h2>Resumen</h2>
                <p>{props.description}</p>
            </article>
            <article className="gallery_article">
                <h2>Galería</h2>
                <p>Aun no hay nada aqui :P</p>
                {gallery.map((image, index) => (
                    <>
                    <div style={{position:'relative', height:'45vw', width:'45vw'}}>
                        <Image src={image} layout="fill" objectFit="cover" key={index} alt={props.title}/>
                    </div>
                    </>
                ))}
            </article>
            <article>
                <h2>Detalles</h2>
                {details.map((detail, index) => (
                    <>
                        <p className="detail">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right" width="21" height="21" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="#000000" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
                        </svg>{detail}</p>
                    </>
                ))}
                <p className="detail"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right" width="21" height="21" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="#000000" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
                        </svg>Por ahora no implemente los detalles</p>
            </article>
            {/*
            {props.image}
            {props.title}
            {props.description}
            {props.ubicacion}
            {props.fecha}*/}
        </section>

        <style jsx>{`
            section {
                position:fixed;
                z-index:15;
                top:0;
                left:0;
                width:100%;
                height:100vh;
                background:#fff;
                overflow:scroll;
            }

            .section_header {
                height:8vh;
                width:100vw;
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding:1rem 2rem;
                font-weight: bold;
                font-size: 1.3rem;
                box-shadow: 2px 1px 6px 1px rgba(0, 0, 0, 0.2);
                position:sticky;
                top:0;
                z-index:20;
                background:#fff;
            }

            .arrow {
                font-size: 1.5rem;
            }

            .principal_image {
                width:85vw;
                height:30vh;
                position:relative;
                display:block;
                margin:auto;
                margin-top:5vh;
            }

            article {
                padding:1rem 1.5rem;
            }

            p {
                font-size:1.1rem;
                line-height:1.5rem;
                padding:.3rem;
            }

            .detail {
                display:flex;
                align-items: center;
            }
        `}</style>
        </>
    )
}