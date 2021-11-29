import AppLayout from '../../components/AppLayout/AppLayout'

export default function Proyecto(props){
    return(
        <>
        <AppLayout>
            <h1>props.title</h1>
            {props.image}
            {props.description}
            {props.ubicacion}
            {props.fecha}
        </AppLayout>
        </>
    )
}