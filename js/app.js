

document.addEventListener('DOMContentLoaded', function() {

/* MONTA OS DESTAQUES ----------------------------------------------------*/
   $('#destaques').append(
    "<div class='fotoAtiva' id='fotoAtivaDestaques'>"
    +" </div>"
    +" <span id='legendaDestaques' class='legenda'></span>"

    +"  <div class='containerLista'>"
    +"    <div id='barraLateralDestaques'>"

    +"    </div>"
    +"  </div>"
    );

/* PREENCHE OS DESTAQUES -------------------------------------------------*/
  for (var i=0; i<destaques.qntFotos; i++){
    var elemento = destaques.nomePasta.concat(i);
     $("#barraLateralDestaques").append(
        "        <a href='#/' onmouseover='trocaDestaque("+destaques.nomePasta+i+")' id="+elemento+" class='fotosLista' >"
        +"        </a>")

     /*define o background dos links*/
      document.getElementById(destaques.nomePasta+i).style.backgroundImage = "url(imagens/"+destaques.nomePasta+"/"+i+"-min.jpg)"
 }

 /* calcula o tamanho do container das miniaturas (largura das fotos + margens * qntFotos*/
    document.getElementById("barraLateralDestaques").style.width = destaques.qntFotos*170+"px";



/* MONTA AS DIVIS --------------------------------------------------------*/
  for (var i=0; i<divs.length; i++){
   $('#todas').append(
    "<div class='novaDiv' id='"+divs[i].nomePasta+"'>"

    +"<div id='fotoAtiva"+divs[i].nomePasta+"' class='fotoAtiva'>"
    +" </div>"
    +" <span id='legenda"+divs[i].nomePasta+"' class='legenda'></span>"

    +"  <div class='containerLista'>"
    +"   <div id='barraLateral"+divs[i].nomePasta+"'>"

    +"    </div>"
    +"  </div>"
    +"</div>"
    )};



/* PREENCHE AS DIVS ------------------------------------------------- */
 for (var i=0; i<divs.length; i++){
 
   for(var o=0; o<divs[i].qntFotos;o++){
    var elemento = divs[i].nomePasta.concat(o);
     $("#barraLateral".concat(divs[i].nomePasta)).append(
        "        <a href='#/' onmouseover='trocaFoto("+divs[i].nomePasta+","+elemento+")' id="+elemento+" class='fotosLista' >"
        +"        </a>")

     /*define o background dos links*/
      document.getElementById(divs[i].nomePasta+o).style.backgroundImage = "url(imagens/"+divs[i].nomePasta+"/"+o+"-min.jpg)"
   };

 }

 /* calcula o tamanho do container das miniaturas (largura das fotos + margens * qntFotos*/
  for(let o in divs){
    document.getElementById("barraLateral"+divs[o].nomePasta).style.width = divs[o].qntFotos*140+"px";
  }
});

/* TROCA DESTAQUE -------------------------------------------------- */
function trocaDestaque(elemento){

    document.getElementById('fotoAtivaDestaques').style.backgroundImage=elemento.style.backgroundImage;

  /*Insere a legenda correspondente */
  document.getElementById('legendaDestaques').innerHTML=destaques.legenda;
}
/* TROCA FOTO -------------------------------------------------- */
function trocaFoto(qualDiv,elemento){
  var el=document.getElementById('fotoAtiva'+qualDiv.id);
  el.style.backgroundImage = elemento.style.backgroundImage;

  /*Insere a legenda correspondente */
  var el2=document.getElementById('legenda'+qualDiv.id);
  var i=0;
  do{
    if (divs[i].nomePasta==qualDiv.id) {
        el2.innerHTML=divs[i].legenda;

        /*teste do laço console.log("Parou o do no passo "+i); */
        break;
    }
    i++;
  }while (i < divs.length);
}

/* TROCA ORIENTAÇÃO -------------------------------------------------- */


function mudarOrientacao(qualOrient){

  var els = document.querySelectorAll(".fotoAtiva");
 
  for (var i = 0, j = els.length; i < j; i++) {
  
  switch (qualOrient){
    case 0:
      els[i].style.width='35vw';
      els[i].style.height='75vh';
      break;
    case 1:
      els[i].style.width='50vw';
      els[i].style.height='75vh';
      break;
    case 2:
      els[i].style.width='75vw';
      els[i].style.height='75vh';
      break;
    case 3:
      els[i].style.width='90vw';
      els[i].style.height='75vh';
      break;
    case 4:
      els[i].style.width='90vw';
      els[i].style.height='65vh';
      break;
    case 5:
      els[i].style.width='90vw';
      els[i].style.height='55vh';
      break;
    case 6:
      els[i].style.width='90vw';
      els[i].style.height='45vh';
      break;
    default: console.log('Erro ao identificar orientação.');
    }
  }

 

}