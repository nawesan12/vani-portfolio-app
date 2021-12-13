import { useState } from 'react';
import { db }  from '../../database/firebase';
import { addDoc, collection } from 'firebase/firestore';

import ThanksForComment from './ThanksForComment';
import WrongInput from './WrongInput';

export default function ContactForm() {

    const [display, setDisplay] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        comment: '',
        date: new Date().toLocaleString('es-AR', { timeZone: 'GMT' })
    });

    const handleChangeText = (name, event) => {
        setDatos({ ...datos, [name]: event.target.value });
    }

    const createNewComment = async () => {
        if (datos.name == "" || datos.email == "" || datos.comment == "") {
            setDisplayError(true)
        } else {
            try {
                const comment = await addDoc(collection(db, 'feedback'), datos);
                setDatos({});
                setDisplay(true);
            } catch(e) {
                console.error("Error uploading comment: ", e);
            }
        }
    }
    
    return (
        <>
            <ThanksForComment display={display === false ? "none" : "flex"}/>
            <WrongInput display={displayError == false ? "none" : "flex"} action={() => setDisplayError(false)} />
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
                    margin-bottom:1.2rem;
                    background-color: #fff;
                }    

                h3 {
                    font-size: 1.5rem;
                    margin-top: 2.5rem;
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