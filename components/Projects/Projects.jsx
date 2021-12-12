import {useState, useEffect} from 'react'
import { db } from '../../database/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Loader from 'react-loader-spinner'

import Project from './Project'

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProjects = async () => {
            const project = await getDocs(collection(db, 'projects'))
            const projects = []
    
            project.forEach((doc) => {
                const { id, title, description, fecha, ubicacion, thumbnail, gallery, detalles} = doc.data()
    
                projects.push({
                    id: doc.id,
                    title,
                    description,
                    fecha,
                    ubicacion,
                    thumbnail,
                    gallery,
                    detalles
                })
            })
            setProjects(projects)
            console.log(projects)
            setLoading(false)
        }
        getProjects()
    }, [])

    console.log("Holuu, soy la primer linea de codigo escrita en tu nueva laptop uwu que que se siente?? pues... RIQUI TIQUI TABI BIIIITCH. Espero que me encuentres, y que esto no rompa la app AJAJJAJAJ. Cambio y fuera 🦔")

    return (
        <section className="projects">
        <h1>Proyectos</h1>
            {loading === true ? 
                <section className="loader_section">  
                <Loader
                    type="ThreeDots"
                    color="#000000"
                    height={80}
                    width={80}
                    timeout={4000}
                />
            </section> :  
            <section className="project_container">
                {projects.map((project) => (
                    <Project 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        fecha={project.fecha}
                        ubicacion={project.ubicacion}
                        thumbnail={project.thumbnail}
                        gallery={project.gallery}
                        detalles={project.detalles}
                    />
                ))}
            </section>

            }
            
            

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