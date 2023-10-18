function formataAltura(altura){
    return altura.replace(",", ".")
  }
  
  function formataIMC(imc){
    return imc.replace(".", ",")
  }
  
  function calcular(){
    peso = inputPeso.value
    altura = inputAltura.value
    
    if (peso == "" || altura == ""){
      resultado.innerHTML = "<p>Por favor, preencha os dados corretamente.</p>"
    } else {
   
    imc = (peso / (formataAltura(altura) ** 2)).toFixed(2)
  
        if (imc < 17){
          msg = "magricelo";
        } else if (imc >= 17 && imc <= 18.49){
          msg = "magro";
        } else if (imc >= 18.5 && imc <= 24.99){
            msg = "peso ideal";
        } else if (imc >= 25 && imc <= 29.99){
          msg = "gordinho";
        } else if (imc >= 30 && imc <= 34.99){
            msg = "gordo";
        } else { 
            msg = "jubarte";
    }
        
    resultado.innerHTML = `<p>
      Seu IMC é ${formataIMC(imc)} e você está ${msg}.</p>`
    
    }
  }
  