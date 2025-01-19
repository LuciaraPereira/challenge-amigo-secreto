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


adicionarAmigo()





