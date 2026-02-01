function adicionarTarefa() {
    const input = document.getElementById('tarefaInput');
    const lista = document.getElementById('listaTarefas');

    if (input.value.trim() !== "") {
        const novoBotao = document.createElement('button');
        novoBotao.innerText = input.value;
        novoBotao.className = "botao-novo"; 

        novoBotao.onclick = function() {
            this.remove();
        };

        lista.appendChild(novoBotao);

        input.value = "";
        input.focus();
    }
}

// ESTE CÓDIGO TEM QUE FICAR FORA DA FUNÇÃO ACIMA
const campoInput = document.getElementById('tarefaInput');

campoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});