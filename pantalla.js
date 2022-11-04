function dibujarCanvas(){
    tablero.lineWidth = 8; //grosor de la linea
    tablero.lineCap = "round"; //forma de la linea
    tablero.lineJoin = "round"; //forma de la linea
    tablero.fillStyle = "#f3f5f6";  //color de relleno
    tablero.strokeStyle = "#8a1871";    //color de linea   

    tablero.fillRect(0, 0, 1200, 800);      //rellenar el canvas
    tablero.beginPath();               //iniciar el dibujo  
    tablero.moveTo(500, 400);       //mover el lapiz a la posicion x=500, y=400
    tablero.lineTo(700, 400);    //dibujar una linea desde la posicion actual hasta x=700, y=400
    tablero.stroke();           //dibujar la linea
    tablero.closePath();    //terminar el dibujo
}

function dibujarLinea(){
    tablero.lineWidth = 6; //grosor de la linea
    tablero.lineCap = "round"; //forma de la linea
    tablero.lineJoin = "round"; //forma de la linea
    tablero.fillStyle = "#f3f5f6";  //color de relleno
    tablero.strokeStyle = "#8a1871";    //color de linea  
    
    let anchura = 500/palabraSecreta.length;    //anchura de cada cuadro
    for(let i = 0; i< palabraSecreta.length; i++){
        tablero.moveTo(380 + (anchura*i), 550);      //mover el lapiz a la posicion x=500, y=400
        tablero.lineTo(430 +(anchura*i), 550);  //dibujar una linea desde la posicion actual hasta x=700, y=400 
    }

    tablero.stroke();           //dibujar la linea
    tablero.closePath();    //terminar el dibujo

}

function escribirLetraCorrecta(index){
    tablero.font = " Bold 50px Arial"; //estilo de la fuente
    tablero.lineWidth = 6; //grosor de la linea
    tablero.lineCap = "round"; //forma de la linea
    tablero.lineJoin = "round"; //forma de la linea 
    tablero.fillStyle = "#f3f5f6";  //color de relleno

    let anchura = 500/palabraSecreta.length;    //anchura de cada cuadro
    tablero.fillText(palabraSecreta[index], 383 + (anchura*index), 530); //escribir la letra en el canvas
    tablero.stroke();           //dibujar la linea
}

function escribirLetraIncorrecta(letra, intentos){
    tablero.font = " Bold 50px Arial"; //estilo de la fuente
    tablero.lineWidth = 6; //grosor de la linea
    tablero.lineCap = "round"; //forma de la linea
    tablero.lineJoin = "round"; //forma de la linea 
    tablero.fillStyle = "#f3f5f6";  //color de relleno

    tablero.fillText(letra, 383 + (40*(10- intentos)), 600, 40);     //escribir la letra en el canvas
}










