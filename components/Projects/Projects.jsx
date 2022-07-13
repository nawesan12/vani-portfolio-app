import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import Project from './Project'

import projects from './proyectos.json'

export default function Projects() {

    console.log("Holuu, soy la primer linea de codigo escrita en tu nueva laptop uwu que que se siente?? pues... RIQUI TIQUI TABI BIIIITCH. Espero que me encuentres, y que esto no rompa la app AJAJJAJAJ. Cambio y fuera 🦔")

    return (
        <section className="projects">
        <h1>Proyectos</h1>
            <section className="project_container">
                {
                    projects.map((project) => (
                        <Project 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            date={project.date}
                            location={project.location}
                            thumbnail={project.thumbnail}
                            gallery={project.gallery}
                            download={project.download}
                            details={project.details}
                        />
                    ))
                }
            </section>

            <style jsx>{`
              h1 {
                  text-align:center;
              }  

              .loader_section {
                  width: 100vw;
                  height:76vh;
                  display:flex;
                  justify-content: center;
                  align-items: center;
              }

              @media screen and (min-width:1360px) {
                    .projects {
                        display:flex;
                        width:60vw;
                        margin:0 auto;
                        flex-wrap:wrap;
                        flex-direction: column;
                        align-items: center;
                    }

                    .project_container {
                        display:flex;
                        margin:0 auto;
                        flex-wrap:wrap;
                        justify-content: center
                    }

                }

                @media screen and (min-width:520px) and (max-width:1360px) {
                    .projects {
                        display:flex;
                        width:85vw;
                        margin:0 auto;
                        flex-wrap:wrap;
                        flex-direction: column;
                        align-items: center;
                    }

                    .project_container {
                        display:flex;
                        margin:0 auto;
                        flex-wrap:wrap;
                        justify-content: center
                    }
                }
            `}
            </style>
        </section>
    );
}