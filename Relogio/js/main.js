
//DOM

const hora = document.querySelector('#horas') 
const minutos = document.querySelector('#minutos') 
const segundos = document.querySelector('#segundos')


// EVENT

setInterval(relogio,1000)



//FUNÇÃO

function relogio(){
    //CRIEI UMA VARIAVEL PARA ARMAZENAR A DATA DE HOJE, CRIANDO O NEW DATE. ESSA VARIAVEL "HOJE" ESTÁ ARMAZENANDO TODAS AS DATAS 
    let hoje = new Date()

    //PARA PUXAR A HORA DE HOJE USEI O GETHOURS
    let hr = hoje.getHours() 

    // PARA PUXAR O MINUTO USEI O GETMINUTES
    let min = hoje.getMinutes()

    // PARA PUXAR SEGUNDOS GETSECONDS   
    let seg = hoje.getSeconds()


    
    if(min<10){
        a = "0"
        min = a+min
    }

    if(seg<10){
     i = "0"
     seg = i+seg
    }


    hora.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
}