function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML =
    <div class="cartao_conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta"> <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta"> <p>${resposta}</p>
    </div>
    </div>
    let respostaEstaVisivel = false
    function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao)
    }
criaCartao(
    'programacao'
    'o que é Python?'
    'O Python é uma linguagm de programacao'
)

criaCartao(
    'Geografia'
    'Qual a capital da França?'
    'A capital da França é Paris'
)

criaCartao(
    'Programacao'
    'O que é uma funcao?'
    'Uma funcao é uma tarefa é um bloco de codigo que executa alguma tarefa'
)

criaCartao(
    'Lingua inhglesa'
    'como se diz oi em ingles?'
    'Oi em ingles é HI (RAI)'
)