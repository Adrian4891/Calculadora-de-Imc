let botonCalcular=document.getElementById('calcular')

 let  calculadoraImc= ()=> {

  
let peso=document.getElementById('peso').value
let altura=document.getElementById('altura').value/100

let resultado=document.getElementById('resultado')

let imc = (peso/(altura*altura))

resultado.textContent=`Llene los campos requeridos.`
if((imc<=24.5)&&(imc>=18.5)){
  resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra dentro, del rango de peso normal o saludable`
}

  else if(imc<18.5){
    resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra dentro, del rango de peso insuficiente.`}
    
    else if((imc>25.0)&&(imc<29.9)){
      resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra dentro , del rango de sobre peso.`
    }
    else if(imc>30.0){
      resultado.textContent=`Su IMC es de: ${imc.toFixed(number=1)} y se encuentra, dentro del rango de obesidad. `
    }
  
}

  
  botonCalcular.addEventListener("click", calculadoraImc)
  
  
  
  
