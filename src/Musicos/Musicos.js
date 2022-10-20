export function Musicos(){

    //un arreglo de objetos es formato comun al consumir un api
   let musicos=[
        {
            nombre:"Eminem hizo su debut en la industria del cine con la película de drama musical 8 Mile (2002), interpretando una versión ficticia de sí mismo, y su canción «Lose Yourself» de su banda sonora ganó el Premio de la Academia a la Mejor Canción Original, convirtiéndolo en el primer artista del lúpulo en ganar el premio.",
           
            rol:"Cantante-Compositor",
            
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminemLEtra.png?alt=media&token=1971899e-edef-467d-8e63-acd9380bf720"
        },
        {
            nombre: "Not Afraid... Con más de 1 billón 576 mil reproducciones en el videoclip de YouTube, es uno de los más grandes éxitos del rapero estadounidense.​",
            
            rol:"Lanzamiento en 2010",
            
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20Not.jpg?alt=media&token=1fee39f3-c822-4c1e-9195-f06066d5fb1e"
        },
        {
            nombre:"'Lose Yourself' es una canción del rapero superestrella estadounidense Eminem . La canción contiene letras sobre la vida del personaje Jimmy 'B-Rabbit' Smith Jr. de la película de 2002 '8 Mile' protagonizada por Eminem (quien interpretó el papel de B-Rabbit).",
            
            rol:"Lanzamiento en 2002",
            
            url:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminemLOSE.webp?alt=media&token=4c99ebf6-a857-49d1-91bd-50d537ffb0a4"
        },
        {
            nombre:"«Stan» es una canción del rapero estadounidense Eminem en colaboración de la cantante británica Dido. Fue el tercer sencillo del álbum de Eminem The Marshall Mathers LP. El sencillo alcanzó la primera posición en las listas de popularidad del Reino Unido y Australia. La versión original y una versión en vivo de Eminem junto a Elton John fueron incluidas en el álbum recopilatorio de 2005 Curtain Call: The Hits. La canción, producida por DJ Mark the 45 King y Eminem, realiza un sample de las primeras líneas de la canción de Dido Thank You Stan es una de las canciones más exitosas críticamente de Eminem.​ La revista Rolling Stone clasificó a la canción en la posición #290 de su lista de Las 500 mejores canciones de todos los tiempos.​ El crítico Robert Christgau la nombró la segunda mejor canción de la década de los 2000",

            rol:"Lanzamiento en 2000",

            url:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20stan.webp?alt=media&token=607cb4e4-e183-4f68-a118-046b94bfeb4e"
        }

        
    ]

    let conciertosMemorables=[
      
        {
            //fecha:"",
            
            //pais:"",
           
            descripcion:"N/A",
            
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20concierto1.jpg?alt=media&token=c099cb6f-80cc-478a-83bf-65698c4c6e83",
        },
       

        {
            fecha:"Lanzamiento 2000",
            
            pais:"EEUU",
           
            descripcion:"The Way I Am!! (en español: Mi manera de ser) es una canción interpretada por el rapero Eminem. En 2000 fue lanzada como el segundo sencillo de su álbum The Marshall Mathers LP. La canción alcanzó la posición 8 en la UK Singles Chart. Sin embargo, en los Estados Unidos no alcanzó las primeras 50 posiciones en las listas de popularidad. La canción fue incluida en el álbum recopilatorio de 2005 Curtain Call: The Hits Marilyn Manson, con quien Eminem tiene una buena relación,​ creó una versión rap metal incorporando guitarra eléctrica y batería más rápida. Ambos grabaron un video musical en vivo de la canción, el cual tuvo buena rotación en MTV.​ Aparte de eso, en el vídeo musícal de la canción oficial hay cameos de Marilyn Manson",
            
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/gif%20eminem.gif?alt=media&token=8f9b6678-d380-40e8-95ff-043d22ac620f",
        },


        {
            //fecha:"",
            
            //pais:"",
           
            descripcion:"N/A",
            
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20concierto2.png?alt=media&token=e807aa7f-36b6-4aed-973c-a4e32ad6c1eb",
        },


        {
            fecha:"LANZAMIENTO EN 2002",
            
            pais:"ciudad de Detroit",
           
            descripcion:"8 MILE!!  titulada: 8 Mile: Calle de las ilusiones en Hispanoamérica) es una película dramática dirigida por Curtis Hanson y protagonizada, entre otros, por Eminem, Kim Basinger y Brittany Murphy . El argumento está basado en los primeros pasos en el mundo del rap del propio Eminem y como este quiere ganarse el respeto entre los raperos negros. La película fue todo un éxito y, además de ser bien recibida por la crítica, ganó un Óscar a la mejor canción original por Lose Yourself, siendo la primera película que gana una estatuilla por una canción de hip-hop​",
            
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/eminem%20gif2.gif?alt=media&token=e77f9c43-df92-45f9-973e-f83a50a54918",
        },

    ]

    //mapeando un arreglo para hacer render
    return(
        <>
           <div className="row row-cols-1 row-cols-md-4 g-3 arriba">
            {
               musicos.map(function(musico){
                   return(
                        <>
                         <div className="col mt-3">
                            <div className="card h-100">
                                <img src={musico.url}
                                 className=""
                                 height="300" 
                                 alt="foto"/>
                                 <h3 className="text-center mt-5">{musico.rol}</h3>
                                 <p className="text-center mt-5">{musico.nombre}</p>  
                            </div>
                         </div>
                        </>
                   )
               })
            }
        </div>
        <div className="musicos text-center">
            <h1>Conciertos Memorables</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-3 abajo">
            {
               conciertosMemorables.map(function(conciertomemorable){
                   return(
                        <>
                         <div className="col mt-3">
                            <div className="card h-100">
                                <img src={conciertomemorable.foto} className="" height="300" alt="foto"/>
                                <h2 className="text-center mt-5">{conciertomemorable.pais}</h2>
                                <h5 className="text-center">{conciertomemorable.fecha}</h5> 
                                <p className="text-center">{conciertomemorable.descripcion}</p>
                            </div>
                         </div>
                        </>
                   )
               })
            }
        </div>
        </>
    )
   

}