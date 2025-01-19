let amigo = []

function adicionarAmigo(){
   let novoAmigo = document.getElementById('amigo').value
   if(novoAmigo.trim() == ''){
    alert('Por favor, insira um nome.')
   }else{
    amigo.push(novoAmigo)
    console.log(amigo)
    listandoAmigos()
   }
   limparCampo()
   limparSorteado()
}

function limparCampo(){
    novoAmigo =  document.getElementById('amigo')
    novoAmigo.value = ''
}

function listandoAmigos(){
    let listaAmigos = document.getElementById('listaAmigos')
    let addNovo = document.createElement("li")
    addNovo.innerHTML=amigo[amigo.length -1]
    listaAmigos.appendChild(addNovo)
}

function sortearAmigo(){
    let sorteio =  Math.floor(Math.random() * amigo.length)
    console.log(amigo[sorteio])
    let exibirAmigo = document.getElementById('resultado')
    exibirAmigo.textContent= "O amigo secreto sorteado é: "+amigo[sorteio]
    listaAmigos.innerHTML =''
    reiniciar()
}

adicionarAmigo()

function reiniciar(){
    amigo.length = 0   
    
}

function limparSorteado(){
    let exibirAmigo = document.getElementById('resultado')
    exibirAmigo.textContent = ''
}





