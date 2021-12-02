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

    return (
        <>
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
            <section>
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
            `}
            </style>
        </>
    );
}