import { useState } from 'react';

import Image from 'next/image'
import ProjectDetails from './ProjectDetails'

export default function Project(props){
    
    const [openProject, setOpenProject] = useState(false);
    const [scrollCoords, setScrollCoords] = useState(0);

    const abrirDetalles = () => {
        setScrollCoords(window.scrollY);
        setOpenProject(true);
    }

    const cerrarDetalles = () => {
        setOpenProject(false);
        window.scrollTo(0, scrollCoords, {behavior: 'smooth'});
    }

    return(
        <>
            {
                openProject == false ?
                <article className="project_article" onClick={() => abrirDetalles()}>
                    <div className="image_cont">
                        <Image src={props.thumbnail} width={400} height={260} alt={props.title}/>
                    </div>
                    <div>
                        <div className="bubble green"/>
                        <h4>{props.title}</h4>
                        <p>{props.description.split("", 120)}...</p>
                    </div>
                    <span>{props.ubicacion} • {props.fecha}</span>
                </article> : 
                <ProjectDetails 
                    key={props.id}
                    title={props.title}
                    description={props.description}
                    ubicacion={props.ubicacion}
                    fecha={props.fecha}
                    thumbnail={props.thumbnail}
                    gallery={props.gallery}
                    detalles={props.detalles}
                    volver={() => cerrarDetalles()}
                />
            }
            
            
            <style jsx>{`
                .project_article {
                    display: inline-block;
                    padding:1rem;
                    margin:2rem 1.5rem;
                    border-radius: .5rem;
                    box-shadow: 1px 1px 10px 2px rgba(0,0,0, .2);
                    height:27rem;                    
                }

                h4 {
                    font-size:1.2rem;
                }

                span {
                    display:block;
                    font-size:.8rem;
                    text-align:right;
                }

                .bubble {
                    width:1.5rem;
                    height:1.5rem;
                    border-radius:50%;
                    float:right;
                    border: 1px double #000;
                    position:relative;
                    bottom:.8rem;
                }

                .green {
                    background:lightgreen;
                }

                .red {
                    background:red;
                }

                

                @media screen and (min-width: 1360px) {
                    .project_article {
                        display: inline-block;
                        width:27rem;
                        height:29rem;
                    }
                }

                @media screen and (min-width:520px) {
                    .project_article {
                        height:29rem;
                        width:27rem;
                    }
                }
            `}</style>
        </>
    );
}