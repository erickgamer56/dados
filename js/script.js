document.getElementById("btn2").addEventListener("click",function(){
    var v1 = document.getElementById("nomev").value
    var v2 = document.getElementById("idade").value
    var v3 = document.getElementById("estado").value
    var v4 = document.getElementById("cidade").value
    var jun = "Nome: "+ v1 + " | " +" idade: "+ v2 +" | "+" ESTADO: "+ v3 + " | " + " CIDADE: " + v4
    document.getElementById("janela").style.display="none"
    localStorage.setItem(v1 , jun)
    setTimeout(() => {
        alert("SALVO COM SUCESSO")
    }, 1);
})
document.getElementById("btn3").addEventListener("click",function(){
    document.getElementById("janela").style.display="flex"
})
document.getElementById("btn").addEventListener("click",function(){
    var n1 = ""
    n1 = document.getElementById("nome").value
    if(n1 in localStorage){
        document.getElementById("info").style.display="flex"
        document.getElementById("escreve").innerHTML = localStorage.getItem(n1)
    }
})
document.getElementById("btn4").addEventListener("click",function(){
    document.getElementById("info").style.display="none"
})