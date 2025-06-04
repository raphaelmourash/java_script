// comentario de linha => /* bloco */

// alert: mensagem na tela
//alert (" Olá seja bem vindo ")
/* 
no elemento input html: pega o elemento com o id "marca" 
e atribui o valor da variavel "marca" ao mesmo
*/
// FUNÇÃO para pegar dados do formulário, salvar e ir para a página termo.html
function irParaTermo() {
  // Pegando os dados dos campos
  const marca = document.getElementById("input-marca-nb").value.trim();
  const modelo = document.getElementById("input-modelo-nb").value.trim();
  const patrimonio = document.getElementById("input-patrimonio-nb").value.trim();

  // Salvando no localStorage
  localStorage.setItem("marca", marca);
  localStorage.setItem("modelo", modelo);
  localStorage.setItem("patrimonio", patrimonio);

  // Redirecionando para a página do termo
  window.location.href = "termo.html";
}

// FUNÇÃO que roda ao carregar a página termo.html para preencher a tabela
window.onload = function() {
  document.getElementById("td-marca").textContent = localStorage.getItem("marca") || "";
  document.getElementById("td-modelo").textContent = localStorage.getItem("modelo") || "";
  document.getElementById("td-patrimonio").textContent = localStorage.getItem("patrimonio") || "";
};




// document.write('<h1> texto </h1>') //escreve na tela
// console.log(texto) //escreve no console * debug

/* A tabela fica escondida na tela */
 