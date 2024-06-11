function continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você está diante das portas de ébano de Avalora. Elas se abrem com um rangido, revelando ruas estreitas e casas em ruínas. O ar está impregnado de magia antiga. O que você faz? </h3>'; //adicionar texto!
  formation += ' <img src="imagens//portas_de_ébano.jpeg">';  //adicionar imagem!
  formation += '<br>';
  formation += '<button onclick="Escolha1()">1.	Explorar as ruas estreitas</button>';
  formation += '<button onclick="Escolha2()">2.	Investigar as casas em ruínas.</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Alex escolheu explorar as ruas estreitas. Ele caminhou por vielas estreitas, onde as sombras dançavam nas paredes e o vento sussurrava segredos antigos. À sua frente, uma passagem se apresentou: </h3>'; //adicionar texto!
  formation += ' <img src="imagens//ruas_estreitas2.jpeg ">';  //adicionar imagem!
  formation += '<br>';
  formation += '<button onclick="Escolha11()">1.	Seguir a trilha de luz</button>';
  formation += '<button onclick="Escolha12()">2.	Investigar a escuridão</button>';
  $(".principal").append(formation);
}

function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> A Você olha em volta e ver que a uma passagem escura ao seu lado, você investiga essa passagem. Você descobre que é um labirinto. O que irá escolher? </h3>' //adicionar texto!
  formation += ' <img src="imagens//labirinto.jpg ">';  //adicionar imagem!
  formation += '<br>'
  formation += '<button onclick="Escolha121()">1.	Você vai tenta desvendar onde esse labirinto dará.</button>';
  formation += '<button onclick="Escolha1()">2. Você vai volta atrás e escolha a outra opção de caminho.</button>';

  $(".principal").append(formation);
}

function Escolha121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> você entra no labirinto e se perde. Mas um ser não identificado por você surge, informando seu nome Drake. Ele é um ser pequeno com orelhas pontudas. Ele o levar até o fim do labirinto. E você encontra um baú de tesouros. Você esquece completamente a sua missão de descobrir a verdade sobre esse lugar, volta para casa rico e vive sua vida. </h3>' //adicionar texto!
  formation += ' <img src="imagens//ser-desconhecido.jpg ">';  //adicionar imagem!
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Vai na escolha anterior e muda o seu caminho!!</h3>' //adicionar texto!
  formation += ' <img src="imagens// ">';  //adicionar imagem!
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Alex segue a trilha de luz, que o leva a uma pequena praça no coração da cidade. No centro, há uma fonte de mármore com água cristalina. À sua volta, estão três caminhos: </h3>' //adicionar texto!
  formation += ' <img src="imagens//praça1.jpg">';  //adicionar imagem!
  formation += '<br>'
  formation += '<button onclick="Escolha111()">1.	A Ponte Quebrada</button>';
  formation += '<button onclick="Escolha112()">2.	O Beco das Sombras</button>';
  formation += '<button onclick="Escolha113()">3.	A Escadaria da Torre</button>';
  $(".principal").append(formation);
}

function Escolha113() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Uma escadaria íngreme leva a uma torre de marfim que se ergue acima das árvores. Quem sabe o que aguarda no topo?.</h3>' //adicionar texto!
  formation += ' <img src="imagens//torre.jpg ">';  //adicionar imagem!
  formation += '<br>'
  formation += '<button onclick="Escolha1131()"> Continuar subindo a escadaria </button>';
  formation += '<button onclick="Escolha11()">	Voltar atrás </button>';
  $(".principal").append(formation);
}

function Escolha1131() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você chega ao topo da escadaria, você ver uma cabine e adentrar ela, você encontra um baú de tesouros. Você esquece completamente a sua missão de descobrir a verdade sobre esse lugar, volta para casa rico e vive sua vida.</h3>' //adicionar texto!
  formation += ' <img src="imagens// ">';  //adicionar imagem!
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Um beco estreito e a escuridão movia-se entre as casas. Os sussurros dos espíritos parecem mais intensos aqui. Esses espiritos chamavam em disispero, e você seguia os chamados, os espiritos de lavaram a morde. Eles não queriam mais ficar sozinhos você agora faz parte deles. </h3>' //adicionar texto!
  formation += ' <img src="imagens//beco.jpg ">';  //adicionar imagem!
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Alex segue a trilha de luz até a Ponte Quebrada. Os restos de pedra se estendem sobre o rio, e a água corre rápidamente abaixo. Ele sente a presença dos deuses antigos enquanto pisa nas pedras gastas. No meio da ponte, Alex se depara com uma escolha: </h3>' //adicionar texto!
  formation += ' <img src="imagens//templo.jpg ">';  //adicionar imagem!
  formation += '<br>'
  formation += '<button onclick="Escolha1111()"> Continuar pela ponte </button>';
  formation += '<button onclick="Escolha11()">	Voltar atrás </button>';
  $(".principal").append(formation);
}


function Escolha1111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Alex continua pela Ponte Quebrada, saltando com cuidado sobre as pedras soltas. O vento sussurra segredos em seus ouvidos enquanto ele avança. Quando alcança a ilha, depara-se com os restos de um antigo templo. As paredes estão cobertas de inscrições e símbolos misteriosos.Agora, Alex enfrenta outra escolha: </h3>'; //adicionar texto!
  formation += ' <img src="imagens//ponte.jpg ">';  //adicionar imagem!
  formation += '<br>';
  formation += '<button onclick="Escolha11111()">	Decifrar as inscrições </button>';
  formation += '<button onclick="Escolha11112()">	Explorar as ruínas</button>';
  $(".principal").append(formation);
}

function Escolha11111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você estuda as palavras antigas podendo revelar mais sobre o segredo de Avalora. Você lembra que seu avô de ensino alguns símbolos e escritas estranha, mas você não sabia para que aquilo servia. Mas agora você entende e consegue decifrar as escritas na parede. Não há nada demais nas escritas, só leis e como era o dia a dia dos povos antigos. porém você fica se perguntado como seu avó sabia dessas coisas? Ele ja veio em Avalora?</h3>' //adicionar texto!
  formation += ' <img src="imagens//escritas.jpg ">';  //adicionar imagem!
  formation += '<br>'
  formation += '<button onclick="Escolha1111()"> voltar e ir por outro caminho! </button>'; //adicionar opção!
  $(".principal").append(formation);
}

function Escolha11112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Alex escolheu explorar as ruínas. Ele vasculha os escombros, movendo pedras e afastando teias de aranha. Entre os destroços, ele encontra três objetos intrigantes: 1-Um Medalhão de Prata: O medalhão é gravado com símbolos antigos e emite um brilho suave. 2-Um Pergaminho Enrolado: O pergaminho está selado com cera vermelha. Seu conteúdo é um mistério. 3-Uma Estátua Quebrada: A estátua representa um deus desconhecido, com a cabeça partida ao meio. Alex pode escolher examinar um desses itens com mais detalhes:</h3>' //adicionar texto!
  formation += ' <img src="imagens//ruinas.jpg ">';  //adicionar imagem!
  formation += '<br>'
  formation += '<button onclick="Escolha111121()"> Investigar o Medalhão de Prata </button>';
  formation += '<button onclick="Escolha111122()"> Ler o Pergaminho Enrolado </button>';
  formation += '<button onclick="Escolha111123()"> Examinar a Estátua Quebrada </button>';
  $(".principal").append(formation);
}

function Escolha111121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>você olhar o medalhão e ver desenhos estranhos, você verá que parece um mapa da cidade.  </h3>' // adicionar texto!
  formation += '<img src="imagens//medalhao.jpg">'; //adicionar imagem!
  formation += '<br>';
  formation += '<button onclick="Escolha21()">1.	</button>';
  formation += '<button onclick="Escolha22()">2.	</button>';
  $(".principal").append(formation);
}

function Escolha111122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Após resolverem os enigmas encontrados nos pergaminhos com os conhecimentos adquiridos do seu avô, vocês descobrem a verdade sobre Avalora: ela foi criada como um experimento pelos deuses. Eles queriam testar se os mortais poderiam superar suas fraquezas e ganhar a imortalidade. Você descobre que seu avô era um morador dessa cidade, e que ele estava ali para estudar e anotar os acontecimentos, ele foi  movido pela ambição, tentou usar o poder da cidade para si mesmo, desencadeando sua queda e também você descobre que seu avô foi a chave para a destruição do lugar. </h3>' // adicionar texto!
  formation += '<img src="imagens//pegaminho.jpg">'; //adicionar imagem!
  formation += '<br>';
  formation += '<button onclick="Escolha21()">1.	</button>';
  formation += '<button onclick="Escolha22()">2.	</button>';
  $(".principal").append(formation);
}

function Escolha111123() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> você repara que essa estátua é muito parecida com seu avô, então enfim você olha os pergaminhos para saber mais sobre o local.   </h3>' // adicionar texto!
  formation += '<img src="imagens//estatua.jpg">'; //adicionar imagem!
  formation += '<br>';
  formation += '<button onclick="Escolha21()">1.	</button>';
  formation += '<button onclick="Escolha22()">2.	</button>';
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você entra em uma das casas em ruinas. No momento em que coloca os seus pés na casa, você é acertado com uma das armadilhas deixadas a décadas. Caindo em uma vala e ficando preso. Oque você faz agora? </h3>' // adicionar texto!
  formation += '<img src="imagens//casas_ruinas.jpeg">'; //adicionar imagem!
  formation += '<br>';
  formation += '<button onclick="Escolha21()">1.	Tenta achar uma saída pela esquerda</button>';
  formation += '<button onclick="Escolha22()">2.	Tenta achar uma saída pela direita</button>';
  $(".principal").append(formation);
}

function Escolha21() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você encontra vários insetos gigantes, assustado tenta correr de lá. Porém os insetos o devoram em segundo. </h3>' //adicionar texto!
  formation += '<img src="imagens//insetos_big.jpeg">'; //adicionar imagem!
  formation += '<br>';
  $(".principal").append(formation);
}


function Escolha22() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você não encontra nada, só uma parede enorme. Tenta seguir o outro caminho, mais morre. Não tem escapatória, sinto muito. </h3>' //adicionar texto!
  formation += '<img src="imagens//parede.jpeg">'; //adicionar imagem!
  formation += '<br>';
  $(".principal").append(formation);
}