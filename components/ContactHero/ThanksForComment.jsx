import React from 'react'

function ThanksForComment(props) {
    return (
        <>
        <span>
           <h4>Gracias por tu comentario! ♥</h4>
           <button onClick={() => window.location.reload()}>Aceptar</button>
        </span>
        <style jsx>{`
            span {
                display:${props.display};
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                background:#fff;
                box-shadow:0 2px 10px rgba(0,0,0,.2);
                padding:1.5rem 2rem;
                width:20rem;
                border-radius:1rem;
                border:2px dashed black;
            }

            button {
                margin-top:1rem;
                border:1px solid black;
                border-radius:.4rem;
                padding:.5rem 1rem;
                background:pink;
                font-weight:600;
            }
        `}</style>
        </>
    )
}

export default ThanksForComment;