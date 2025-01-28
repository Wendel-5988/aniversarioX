const dataDaFesta = new Date("2025-05-11").getTime()
const contagemHtml = document.getElementById("contagem");
const content = document.querySelector('.main__content');

const contatempo = setInterval(function(){
    const hoje = new Date().getTime();
    const tempoRestante = dataDaFesta - hoje;
    
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    

    if (tempoRestante <= 0) {
        clearInterval();
        content.classList.add('none');
        contagemHtml.innerHTML = 'Essa festa já aconteceu, e saiba que foi incrível!'
    }else {
        contagemHtml.innerHTML = `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s para a maior festa de todos os tempos!!!!`
    }
},1000)

btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    alert('Você está confirmado para o Aniversário X no dia 11/05/2025')
    btn.classList.add('none')
    content.innerHTML = '<h3>Presença confirmada!</h3> <p>O mundo não está preparado par o que vai contecer dia 11/05/2025.</p>'
})