document.getElementById('submit-question').addEventListener('click', function() {
    var question = document.getElementById('question').value;
    var answerElement = document.getElementById('answer-text');
    var popup = document.getElementById('popup');

    // Simulando uma chamada de API assíncrona (substitua por sua chamada real)
    setTimeout(function() {
        // Exemplo de resposta da API
        var answer = 'A resposta para a sua pergunta é...';

        // Exibindo a resposta na popup
        answerElement.textContent = answer;
        popup.classList.remove('hidden');
    }, 1000);
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
