let palabras = ["HOLA", "ADIOS", "PERRO", "GATO", "CASA", "COMPUTADORA", "TECLADO", "MOUSE", "MONITOR", "CELULAR", "TELEFONO", "CABLE", "INTERNET", "WIFI", "RED" ];

let tablero = document.getElementById("pantalla").getContext("2d"); //obtener el contexto del canvas
let palabraSecreta = ""; //palabra secreta
let letras = []; //arreglo para guardar las letras de la palabra secreta
let errores = 8; //contador de errores


//escoger palabra secreta
function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)]; /*escoger una palabra al azar del arreglo palabras*/
    palabraSecreta = palabra;
    console.log(palabraSecreta);    
}

function comprobarLetra(key){
    let estado = false;
    if (key >= 65 && letras.indexOf(key) || key <=90  && letras.indexOf(key)){
        letras.push(key)
        console.log(key)
        return estado
    }else{
        estado = true;
        console.log(key);
        return estado
    }
}

function letraIncorrecta(){
    errores = errores - 1;
    console.log(errores);
}



//iniciar juego
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";/*ocultar boton iniciar juego*/
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase() //obtener la letra presionada
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] == letra){
                    escribirLetraCorrecta(i);
                }
            }
        }else{
            letraIncorrecta(letra);
            escribirLetraCorrecta(letra, errores);
        }
    }
}



