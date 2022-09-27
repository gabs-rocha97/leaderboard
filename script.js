//Declarando objetos no JavaScript
// Objetos  chave: valor
var rafa = {
  foto: "https://cdn-icons-png.flaticon.com/512/1373/1373254.png",
  nome: "Rafa",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
};

var paulo = {
  foto: "https://cdn-icons-png.flaticon.com/512/1373/1373255.png",
  nome: "Paulo",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

var gui = {
  foto: "https://cdn-icons-png.flaticon.com/512/3884/3884851.png",
  nome: "Gui",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

//alterando a chave "pontos" de cada objeto pelo retorno da função calculaPontos();
//obj.chave   = Função      (objeto)
rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

//add novo jogador
function adicionarJogador() {
  var foto = document.getElementById("foto").value;

  if (foto == "") {
    foto =
      "https://contabilidadepapyrus.com.br/wp-content/uploads/2018/12/icone-pessoa-fisica.png";
  }

  var nome = document.getElementById("nome").value;
  var vitorias = 0;
  var empates = 0;
  var derrotas = 0;

  var verifica = verificaCampos(nome);

  if (verifica == 0) {
    var novoJogador = {
      foto: foto,
      nome: nome,
      vitorias: vitorias,
      empates: empates,
      derrotas: derrotas,
      pontos: 0
    };

    novoJogador.pontos = calculaPontos(novoJogador);

    jogadores.push(novoJogador);

    exibeJogadoresNaTela(jogadores);
    limpar();
  } else {
    alert("Jogador não adicionado");
  }
}

function limpar() {
  document.getElementById("nome").value = "";
  document.getElementById("vitorias").value = "";
  document.getElementById("empates").value = "";
  document.getElementById("derrotas").value = "";
  document.getElementById("foto").value = "";
}

//fazendo calculo dos pontos atraves da função recebendo o objeto para identificar qual está sendo alterado.
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos; //retornando o valor calculado
}

// criando lista de jogadores, com indices referente a cada objeto criado acima
var jogadores = [rafa, paulo, gui];

//função para criar a tabela na tela em HTML e juntar com os dados do objeto usando a lista para alternar entre eles
function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  // FOR para rodar a lista e criar o elemento HTML para exibir na tela
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento +=
      "<td><img src=" + jogadores[i].foto + " height='50' width='50'></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  //referenciando a TAG HTML que vai receber os dados do elemento
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  //jogando dados do elemento na TAG atraves da variavel.
  tabelaJogadores.innerHTML = elemento;
}

// chamando a função para exibir na tela
exibeJogadoresNaTela(jogadores);

// criando função para calcular pontos ao clicar no botão vitoria
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

// criando função para calcular pontos ao clicar no botão empate
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

// criando função para calcular pontos ao clicar no botão derrota
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerarPontos() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

function verificaCampos(nome) {
  if (nome == "") {
    alert("Preencha o nome do participante");
    return 1;
  } else {
    return 0;
  }
}