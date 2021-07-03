window.onload = function(){

    function myfunction(){ 


        let = document.getElementById('nome').value;


        let paragrafo =document.createElement('p');
        let conteudoParagrafo = document.createTextNode(nome);
        paragrafo.appendChild(conteudoparagrafo);

        document.body.appendChild(paragrafo);
    }

    let botaoEnviar = document.querySelector('#enviar');

    botaoEnviar.addEventListener('click,myfunction')
}