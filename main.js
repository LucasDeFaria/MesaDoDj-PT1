function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

cons ListadeTeclas = document.querySelectorAll(`.tecla`);

//para
for(let contador = 0; contador <ListadeTeclas.length; contador++) {

    const tecla = ListadeTeclas[contador];
    const instrumento = tecla.ClassList[1]
    const idAudio = `#som_${instrumento}`; //template string`

tecla.onclick = function () {
    tocaSom(idAudio);
}

}