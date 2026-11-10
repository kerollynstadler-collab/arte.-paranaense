const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(funtion(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);

    function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtiu === false){ 
    contador.rexrContent++;
    curtiu = true;}
    else{
        contador.textContent--;
        curtiu = false;
    }
}
});
const btnTema = document.querySelector(".bnt-tema");
bntTema.addEventListener("click", mudarTema);
function mudarTema(){
    document.body.classList
}