import "./Home.css"

import {SubMenu}from '../SubMenu/SubMenu'
import { Footer } from "../Footer/Footer.js";

export function Home() {

let descripcionBanda="Marshall Bruce Mathers III (St. Joseph, Misuri, 17 de octubre de 1972), más conocido como Eminem (estilizado EMINƎM) es un rapero, productor y actor estadounidense. Se le atribuye la popularización del hip hop en el centro de Estados Unidos y es aclamado por la crítica como uno de los mejores raperos de todos los tiempos.2​ Se considera que el éxito mundial y las obras aclamadas de Eminem rompieron las barreras raciales para la aceptación de los raperos blancos en la música popular. Si bien gran parte de su trabajo transgresor a fines de la década de 1990 y principios de la de 2000 lo hizo muy controvertido, llegó a ser una «representación» de la angustia popular de la clase baja estadounidense y ha sido citado como una influencia para muchos artistas de varios génerosDespués del lanzamiento de su álbum debut Infinite (1996) y la obra extendida Slim Shady EP (1997), Eminem firmó con Aftermath Entertainment y posteriormente alcanzó popularidad en 1999 con The Slim Shady LP. Sus siguientes dos lanzamientos, The Marshall Mathers LP (2000) y The Eminem Show (2002), fueron éxitos mundiales y ambos fueron nominados al Premio Grammy por Álbum del Año. Después del lanzamiento de su próximo álbum, Encore (2004), Eminem hizo una pausa en 2005, en gran parte debido a una adicción a las drogas recetadas.3​ Regresó a la industria de la música cuatro años después con el lanzamiento de Relapse (2009) y Recovery se lanzó al año siguiente. Recovery fue el álbum más vendido en todo el mundo en 2010, lo que lo convierte en el segundo álbum de Eminem, después de The Eminem Show en 2002, en ser el álbum más vendido del año en todo el mundo. En los años siguientes, lanzó los álbumes número uno en Estados Unidos The Marshall Mathers LP 2 (2013), Revival (2017), Kamikaze (2018) y Music to Be Murdered By (2020).Eminem hizo su debut en la industria del cine con la película de drama musical 8 Mile (2002), interpretando una versión ficticia de sí mismo, y su canción «Lose Yourself» de su banda sonora ganó el Premio de la Academia a la Mejor Canción Original, convirtiéndolo en el primer artista del lúpulo en ganar el premio. Eminem ha hecho cameos en las películas The Wash (2001), Funny People (2009) y The Interview (2014) y en la serie de televisión Entourage (2010). También ha desarrollado otras empresas, incluida Shady Records, una empresa conjunta con el gerente Paul Rosenberg, que ayudó a lanzar las carreras de artistas como 50 Cent, D12, Obie Trice, entre otros. También ha establecido su propio canal, Shade 45, en Sirius XM Radio. Además de su carrera en solitario, Eminem fue miembro del grupo de hip hop D12. También es conocido por sus colaboraciones con el rapero de Detroit Royce da 5'9"

    return (
        <>
            <div className="banner">

            </div>

            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">EMINEM</h1>
                            <p className="text-center">{descripcionBanda}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SubMenu/>
            </div>

            <div>
                <Footer/>
            </div>





        </>
    );
}
