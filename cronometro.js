// variaveis \\
let hour = 00;
let minute = 00;
let second =00;
let cron;

//inicia o contador -- se iniciar após pause ,continua a contar de onde parou\\ 
function iniciar(){
        cron = setInterval(() => {
            cronometro();
            document.getElementById('hour').innerText=returnData(hour +':');
            document.getElementById('minute').innerText=returnData(minute + ':');
            document.getElementById('second').innerText=returnData(second);
        },1000);
}

// pausa o contador\\
function pausar(){
    clearInterval(cron);
}

// para o contador subscrevendo as variáveis\\
function parar() {
    clearInterval(cron);
    hour =0;
    minute =0;
    second =0;
 
    document.getElementById('hour').innerText = '00:';
    document.getElementById('minute').innerText = '00:';
    document.getElementById('second').innerText = '00';
}

// contagem do tempo \\
function cronometro() {
     second=second+1 // incrementa +1 na variavel\\

    if (second ==60) { // se a variavel for igual a 60\\
        second= 0; // atendendo a condição de cima, zerar a variavel\\
        minute++; // atendendo os criterios acima, adiciona +1\\
    }

    if (minute==60){ // se a variavel for igual a 60\\
        minute =0; // atendendo a condição acima, zera a variavel\\
        hour++; // atendendo os criterios acima, adiciona +1\\
    }
    document.getElementById('hour').innerText = '00:' 
    document.getElementById('minute').innerText = '00:'
    document.getElementById('second'),innerText ='00:'
   }

   // retorna a passagem do valor de volta\\
function returnData(input){ 
    if (input>=10) {
    return input
    } else {
        return "0" + input
    }
}

