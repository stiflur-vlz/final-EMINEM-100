import "./Integrantes.css"
import 'animate.css'
import WOW from 'wowjs';

import { useEffect } from "react";
import "./Integrantes.css"






export function Integrantes() {

useEffect(()=>{
    new WOW.WOW({
        live: false
    }).init();
},[])

  return (
    <>

    <div>
    <div className="fondoIntegrantes" >

<div className="row my-5 justify-content-center">
  <div className="col-12 col-md-4 zoom">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20Lose.webp?alt=media&token=e612fa76-5921-4875-8261-fe072628d286"
      alt="foto1"
      className="img-fluid my-5 w-100 rounded-circle animate__animated animate__bounce wow"
      data-bs-toggle="collapse"
      data-bs-target="#collapseWidthExample"
    ></img>
  </div>

  <div className="col-12 col-md-4 align-self-center border-start">
    <h2>Artista: 🤘🏼 Eminem 🤘🏼</h2>
    <h3>Cancion: ♫ Lose Yourself ♬</h3>
  </div>
</div>

<div className="row mt-2">
  <div className="col-12">
    <div class="collapse collapse-vertical" id="collapseWidthExample">
      <div className="card card-body">
        Yo His palms are sweaty, knees weak, arms are heavy There's vomit
        on his sweater already, mom's spaghetti He's nervous, but on the
        surface he looks calm and ready To drop bombs, but he keeps on
        forgettin' What he wrote down, the whole crowd goes so loud He
        opens his mouth, but the words won't come out He's chokin', how,
        everybody's jokin' now The clocks run out, times up, over, blaow
        Snap back to reality, ope there goes gravity Ope, there goes
        Rabbit, he choked He's so mad, but he won't give up that easy? No
        He won't have it, he knows his whole back's to these ropes It
        don't matter, he's dope, he knows that, but he's broke He's so
        stagnant, he knows, when he goes back to this mobile home, that's
        when it's Back to the lab again, yo, this whole rhapsody Better go
        capture this moment and hope it don't pass him
      </div>
    </div>
  </div>
</div>

<div className="row my-5 justify-content-center">
  <div className="text-end col-12 col-md-4 align-self-center border-end">
    <h2>Artista: 🤘🏼 Eminem 🤘🏼</h2>
    <h3>En sus Inicios</h3>
  </div>
  <div className="col-12 col-md-4 zoom">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20antes.jpeg?alt=media&token=d831d9f0-6636-4994-8246-799f225ce610"
      alt="foto1"
      className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow"
      data-bs-toggle="collapse"
      data-bs-target="#collapseWidthExample2"
    ></img>
  </div>
</div>

<div className="row mt-2">
  <div className="col-12">
    <div class="collapse collapse-vertical" id="collapseWidthExample2">
      <div className="card card-body">
        Marshall comenzó a violar durante sus años escolares, animado por
        su inseparable Ronnie. A los catorce años abandonó la escuela y
        dio sus primeros pasos con bandas locales como Basement
        Productions, The New Jacks o D12. Lanzó su nombre de guerra,
        Eminem, en el álbum Infinite, lanzado en 1996 por un sello
        independiente.
      </div>
    </div>
  </div>
</div>

<div className="row my-5 justify-content-center">
  <div className="col-12 col-md-4 zoom">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20hoy.webp?alt=media&token=4378cbac-27f4-4746-b934-08023a6578ce"
      alt="foto1"
      className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow"
      data-bs-toggle="collapse"
      data-bs-target="#collapseWidthExample3"
    ></img>
  </div>

  <div className="col-12 col-md-4 align-self-center border-start">
    <h2>Artista: 🤘🏼 Eminem 🤘🏼</h2>
    <h3>En la Actualidad</h3>
  </div>
</div>

<div className="row mt-2">
  <div className="col-12">
    <div class="collapse collapse-vertical" id="collapseWidthExample3">
      <div className="card card-body">
        ¿Quién es Eminem? Eminem es un rapero estadounidense originario de
        Missouri, y es uno de los artistas más vendidos de todos los
        tiempos con al menos 220 millones de discos. Asimismo, es aclamado
        como uno de los mejores raperos y compositores de su género,
        realizando gran parte de su trabajo transgresor entre los 90 y los
        2000, generando tanto respeto como polémica. el verdadero nombre
        de eminem El verdadero nombre de Eminem es Marshall Bruce Mathers
        III. De hecho, su nombre da título a sus discos The Marshall
        Mathers LP y LP 2. ¿Qué edad tiene Eminem? Eminem tiene 49 años.
        Su fecha de nacimiento es el 17 de octubre de 1972. ¿Qué significa
        Eminem y por qué se llama así? Cuando tenía 14 años, Eminem
        comenzó a rapear con un amigo de la escuela secundaria llamado
        Mike Ruby, y adoptaron los nombres "Manix" y "M&M", que era una
        referencia a su nombre, Marshall Mathers, y los dulces que llevan
        su nombre. Con el tiempo, el nombre evolucionó a Eminem. ¿Cuánto
        dinero tiene Eminem? Eminem se encuentra entre los artistas más
        vendidos de todos los tiempos y algunos estiman que tiene un valor
        de alrededor de $ 230 millones.
      </div>
    </div>
  </div>
</div>

</div>
    </div>
    </>
  );
}
