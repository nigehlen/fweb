function validaBusca(){
    if(document.querySelector('#inputlupa').value==''){
        alert('Não podia ter deixado em branco a busca!');
        return false;
    }
}

// fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit = validaBusca;

