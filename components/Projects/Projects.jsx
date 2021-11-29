import {useState, useEffect} from 'react'
import db from '../../database/firebase'
import { getDocs, collection } from 'firebase/firestore'

import Project from './Project'

export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjects = async () => {
            const project = await getDocs(collection(db, 'projects'))
            const projects = []
    
            project.forEach((doc) => {
                const { id, title, description, fecha, ubicacion, image} = doc.data()
    
                projects.push({
                    id: doc.id,
                    title,
                    description,
                    fecha,
                    ubicacion,
                    image
                })
            })
            setProjects(projects)
        }
        getProjects()
    }, [])

    console.log(projects)

    return (
        <>
            <h1>Proyectos</h1>
            <section>
                {projects.map((project) => (
                    <Project 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        fecha={project.fecha}
                        ubicacion={project.ubicacion}
                        image={project.image}
                    />
                ))}
            </section>

            <style jsx>{`
              h1 {
                  text-align:center;
              }  
            `}
            </style>
        </>
    );
}