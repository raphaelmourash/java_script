// comentario de linha => /* bloco */

// alert: mensagem na tela
//alert (" Olá seja bem vindo ")
/* 
no elemento input html: pega o elemento com o id "marca" 
e atribui o valor da variavel "marca" ao mesmo
*/
//document.getElementById('marca') .value = 'oi'

//variaveis - string, number, boolean
//var texto = "Olá mundo" //string
//var numetoInteiro = -7 //number
//var numeroFracionado = 3.14 //number
//var verdadeiro = true //boolean

//document.write('<h1> texto </h1>') //escreve na tela
//console.log(texto) //escreve no console * debug

// Exibe uma saudação
alert("Olá, seja bem-vindo!");

// Função chamada ao clicar no botão
function preencherTabela() {
  // Captura os valores digitados nos inputs
  const marca = document.getElementById('input-marca').value;
  const modelo = document.getElementById('input-modelo').value;
  const patrimonio = document.getElementById('input-patrimonio').value;

  // Insere os valores na tabela
  document.getElementById('campo-marca').textContent = marca;
  document.getElementById('campo-modelo').textContent = modelo;
  document.getElementById('campo-patrimonio').textContent = patrimonio;

  // Mostra a tabela na tela (opcional — útil para ver antes da impressão)
  document.getElementById('tabela-para-impressao').style.display = 'table';
}
