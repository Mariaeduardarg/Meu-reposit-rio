// Primeiro exercicio da pratica guiada

const booleano1 = true
const booleano2 = false
if (booleano1===true){
    alert('é true')
}else{
    alert('não é true')
}

const booleano3 = true
if(booleano1==booleano2){
    alert('são iguais')
}else if(booleano2==booleano3){
    alert('são iguais')
}else if (booleano1==booleano3){
    alert('são iguais')
}else{
    alert('não existe valores iguais')
}

//      Segundo exercicio da prática guiada

const idade = 18
if(idade>=18){
    alert('pode tirar o titulo')
}else if(idade < 18){
    console.log('não pode tirar o título')
}else if(idade>=60){
    alert('facultativo')
}else if(idade<=16){
    console.log('facultativo')
}

//    Exercicio 3 da pratica guiada

const media = 10
if(media>=5){
    alert('Você está aprovado(a)')
}else if(media >=3){
    alert('Por pouco, você está de recuperação')
}else if(media < 3){
    alert('Você está reprovado(a)! Se esforce mais.')
}else{
    console.log('Dado inválido')
}