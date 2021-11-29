import Image from 'next/image'
import Link from 'next/link'

export default function Project(props){
    
    const url = props.image;
    console.log(url)

    return(
        <>
            
            <article className="project_article">
                <div className="image_cont">
                    <Image src={url.toString()} width={400} height={260} alt={props.title}/>
                </div>
                <Link href="/"><a>
                    <div className="bubble green"/>
                    <h4>{props.title}</h4>
                    <p>{props.description.split("", 120)}...</p>
                </a></Link>
                <span>{props.ubicacion} • {props.fecha}</span>
            </article>
            
            <style jsx>{`
                .project_article {
                    display:block;
                    padding:1rem;
                    margin:2rem 1.5rem;
                    border-radius: .5rem;
                    box-shadow: 1px 1px 10px 2px rgba(0,0,0, .2);
                    height:27rem;
                }

                h4 {
                    font-size:1.2rem;
                }

                span {
                    display:block;
                    font-size:.8rem;
                    text-align:right;
                }

                .bubble {
                    width:1.5rem;
                    height:1.5rem;
                    border-radius:50%;
                    float:right;
                    border: 1px dashed #000;
                    position:relative;
                    bottom:.8rem;
                }

                .green {
                    background:lightgreen;
                }

                .red {
                    background:red;
                }
            `}</style>
        </>
    );
}