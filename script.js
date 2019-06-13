const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("#roleta");



function abrirMenu(){   
    // if(lista.classList.contains("ativo")){
    //     lista.classList.remove("ativo")
    // }else{
    //     lista.classList.add("ativo");
    // }   
    lista.classList.toggle("ativo");

}
function rodaAroda(){
    roleta.classList.toggle("roda-jequiti");
}

maisa.onclick = abrirMenu;
roleta.onclick = rodaAroda;
