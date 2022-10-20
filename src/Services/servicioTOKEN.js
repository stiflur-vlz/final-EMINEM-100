import { wait } from "@testing-library/user-event/dist/utils"

export async function servicioTOKEN(){

//URI
const URI = "https://accounts.spotify.com/api/token"

//DATOS
const DATO1 = "grant_type=client_credentials"
const DATO2 = "client_secret=132804852a7f4686be39b836b9c6a022"
const DATO3 = "client_id=1d845ef96c56409c9d284d0a496b811f"

//PETICIÓN
const PETICION={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATO1+"&"+DATO2+"&"+DATO3
}

//FETCH
let respuesta=await fetch(URI,PETICION)
let datos=await respuesta.json()
datos=datos.token_type+' '+datos.access_token;

return datos

}