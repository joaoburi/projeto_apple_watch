const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: "Verde-cipreste",
    nomePastaImagens: "imagens-verde-cipreste"
};

const azulInverno = {
    nome: "Azul-inverno",
    nomePastaImagens: "imagens-azul-inverno"
};

const meiaNoite = {
    nome: "Meia-noite",
    nomePastaImagens: "imagens-meia-noite"
};

const estelar = {
    nome: "Estelar",
    nomePastaImagens: "imagens-estelar"
};

const rosaClaro = {
    nome: "Rosa-claro",
    nomePastaImagens: "imagens-rosa-claro"
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const opcoesTamanho = ['41 mm', '45 mm']

let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;


function atualizarImagemSelecionada() {
    const opcaoImagemSelecionada = document
      .querySelector('[name="opcao-imagem"]:checked')
      .id.charAt(0);
    imagemSelecionada = opcaoImagemSelecionada;
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
}

function trocarTamanho() {
    // atualizar variavel de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
    tamanhoSelecionado = idOpcaoSelecionada;
    // mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
} 
function trocarCor() {
    // atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
    corSelecionada = idOpcaoSelecionada;
    // trocar titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // trocar titulo da cor
    nomeCorSelecionada.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
    // trocar imagem das miniaturas exibidas
    miniaturaImagem0.src = 'imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens + '/imagem-0.jpeg';
    miniaturaImagem1.src = 'imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens + '/imagem-1.jpeg';
    miniaturaImagem2.src = 'imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens + '/imagem-2.jpeg';
    // trocar imagem de visualização
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
}

