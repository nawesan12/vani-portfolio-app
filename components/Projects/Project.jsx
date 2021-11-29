import Image from 'next/image'
import Link from 'next/link'

export default function Project(props){
    return(
        <>
            
            <article className="project_article">
                <div>
                    <Image src="/favicon.ico" width={380} height={214} alt={props.title}/>
                </div>
                <Link href="/"><a>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <span>{props.ubicacion} • {props.fecha}</span>
                </a></Link>
            </article>
            
            <style jsx>{`
                .project_article {
                    padding:1rem;
                    margin:2rem 1.5rem;
                    border-radius: .5rem;
                    box-shadow: 1px 1px 10px 2px rgba(0,0,0, .2);
                }

                h4 {
                    font-size:1.2rem;
                }

                span {
                    display:block;
                    font-size:.8rem;
                    text-align:right;
                }
            `}</style>
        </>
    );
}