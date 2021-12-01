import { useState } from 'react';
import db from '../../database/firebase';
import { addDoc, collection } from 'firebase/firestore';

import ThanksForComment from './ThanksForComment';

export default function ContactForm() {

    const [display, setDisplay] = useState(false);

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        comment: '',
        date: new Date().toLocaleString('es-AR', { timeZone: 'UTC' })
    });

    const handleChangeText = (name, event) => {
        setDatos({ ...datos, [name]: event.target.value });
    }

    const createNewComment = async () => {
        if (datos.name == "" || datos.email == "" || datos.comment == "") {
            alert("Todos los campos son obligatorios");
        } else {
            try {
                const comment = await addDoc(collection(db, 'feedback'), datos);
                alert("Gracias por tu comentario! ♥");
                setDatos({});
                setDisplay(true);
            } catch(e) {
                console.error("Error uploading comment: ", e);
            }
        }
    }

    // const moment = new Date(); console.log(moment.toLocaleString('es-AR', { timeZone: 'UTC' }));

    return (
        <>
            <ThanksForComment display={display === false ? "none" : "flex"}/>
            <section className="contact_form">
                <h3>Que te parece mi trabajo?</h3>
                <input onChange={(value) => handleChangeText('name', value)} type="text" placeholder="Nombre completo" required/>
                <input onChange={(value) => handleChangeText('email', value)} type="email" placeholder="Email" required/>
                <textarea onChange={(value) => handleChangeText('comment', value)} placeholder="Escribeme algo..." className="textarea" required/>
                <button onClick={() => createNewComment()}>Enviar</button>
            </section>

            <style jsx>{`
                .contact_form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height:55.6vh;
                }    

                h3 {
                    font-size: 1.5rem;
                }

                input, textarea {
                    border:none;
                    outline:none;
                    border-bottom: 1px solid #000;
                    width: 80%;
                    padding:.8rem 1rem;
                    margin:1rem auto;
                    font-family:inherit;
                    font-size:inherit;
                }

                .textarea {
                    height: 6rem;
                }

                button {
                    background-color: #000;
                    color: #fff;
                    border:none;
                    outline:none;
                    padding:.8rem 1rem;
                    margin:.8rem auto;
                    font-weight:600;
                    font-size:1rem;
                }

            `}</style>
        </>
    )
}