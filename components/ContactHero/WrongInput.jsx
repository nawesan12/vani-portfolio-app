export default function WrongInput(props) {
    return (
        <>
        <span>
           <h4>Todos los campos son obligatorios!</h4>
           <button onClick={props.action}>Aceptar</button>
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
                padding:1.5rem 1.5rem;
                width:20rem;
                border-radius:1rem;
                border:2px solid black;
            }

            button {
                margin-top:1rem;
                border:1px solid black;
                border-radius:.4rem;
                padding:.5rem 1rem;
                background:#ff3333;
                font-weight:600;
            }
        `}</style>
        </>
    )
}