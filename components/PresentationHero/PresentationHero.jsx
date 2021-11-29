import Image from 'next/image'

export default function PresentationHero(){
    return(
        <>
            <div className="profile">
                <h1>Hola, soy<br/> Vanina Gonzalez</h1>
                <div className="profile_photo">
                    <Image src="/favicon.ico" width={100} height={100} alt="Vanina Gonzalez"/>
                </div>
            </div>
            <section className="presentation">
                <h2>Sobre mi</h2>
                <p className="bio">Lorem ipsum dolor srrehenderit. Lorem ipsum dolor srrehenderitLorem ipsum dolor srrehenderitLorem ipsum dolor sLorem ipsum dolor srrehenderitLorem ipsum dolor srrehenderitLorem ipsum dolor srrehenderitrrehenderitNam laudantium alias esse sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero nulla, ullam dicta corrupti, neque reprehenderit animi quidem magnam doloribus cupiditate reiciendis asperiores excepturi quam numquam aliquam! Perferendis ad animi quia incidunt veritatis minima error adipisci nulla cum ut beatae odio nam ex sed, sapiente consequatur, ea dolorum libero sit reiciendis, consequuntur eligendi ab omnis velit. Amet doloremque impedit sapiente, eius dolorem voluptatem architecto nisi fugit nam vel sit blanditiis eveniet harum aliquam voluptate obcaecati, vero ipsa ea! Facere illo optio iure, eius ratione at ipsa incidunt adipisci rem nam minus eveniet id dignissimos quidem impedit ea eaque. Dolor, enim.</p>
                <article className="education">
                    <ul>
                        <li>Tecnica 3</li>
                        <li>Universidad MDP</li>
                        <li>Bla bla bla</li>
                    </ul>
                </article>
            </section>

            <style jsx>{`
                .profile {
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    padding:1rem 1rem 0;
                }

                .profile_photo {
                    border-radius:50%;
                }

                .presentation {
                    padding:0 1rem 1rem;
                }

                .bio {
                    line-height:1.5;
                }
            `}</style>
        </>
    );
}