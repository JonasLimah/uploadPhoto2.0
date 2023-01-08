const alterar = document.querySelector("#imagem");
const salvar = document.querySelector("button");
alterar.addEventListener("click", ()=>{
   
    
    if (alterar.getAttribute ("Type")  === "button" ){
        alterar.setAttribute("Type", "file")
        
    }
});


function enviar(){
    const imagem = document.querySelector("#imagem").files[0];//seleciona o arquivo 1
    const img = document.createElement("img")//cria o elemento img no html
    
    img.src = URL.createObjectURL(imagem)//cria uma url no input
    img.width = 200;

    document.querySelector(".area").appendChild(img);//adiciona a imagem na div area
    alterar.setAttribute("Type" , "button")
   
    console.log()
}