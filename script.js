let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function AbreFechaMenu(){
     
    //Se o menu esta fechado
    if(menu.classList.contains("menu-fechado" )){
        //Abrie menu
        menu.classList.remove("menu-fechado")

        //mostraricome X
        iconeX.style.display = "inine"

        //Esconder o icone barras
        iconeBarras.style.display = "none"
    }

    else{
         //Fechar o menu
         menu.classList.add("menu-fechado")
         //esconder icone x
         iconeX.style.display = "none"

         //mostrar icone barra
         iconeBarras.style.display = "inline"
    }
}


onresize = () => {
    menu.classList.remove("menu-fechado")

    //mostrar icone X
    iconeX.style.display = "inline"

    //esconda o icone barras
    iconeBarras.style.display = "none"
}