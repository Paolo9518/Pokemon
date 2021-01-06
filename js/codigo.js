let c=0;
let pokemon = new Array(4);

pokemon[0]="../imagenes/pokemon1.jpg";
pokemon[1]="../imagenes/pokemon2.jpg";
pokemon[2]="../imagenes/pokemon3.jpg";
pokemon[3]="../imagenes/pokemon4.jpg";


const rotacion=()=>{
    window.document["nPokemon"].src=pokemon[c];
    document.getElementById("pro").innerText="";
    c++;
    if(c == pokemon.length)
        c=0;
    setTimeout("rotacion()",1000);
}
