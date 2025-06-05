// Lista de meses em português
const meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

// Função para salvar dados e ir para termo.html
function irParaTermo() {
  const marca = document.getElementById("input-marca-nb").value.trim();
  const modelo = document.getElementById("input-modelo-nb").value.trim();
  const patrimonio = document.getElementById("input-patrimonio-nb").value.trim();
  const data = document.getElementById("dataInput").value;

  localStorage.setItem("marca", marca);
  localStorage.setItem("modelo", modelo);
  localStorage.setItem("patrimonio", patrimonio);
  localStorage.setItem("dataTermo", data);

  window.location.href = "termo.html";
}

// --- Código para página do formulário (form_02.html) ---
const dataInput = document.getElementById('dataInput');
const dataFormatada = document.getElementById('dataFormatada');

if (dataInput && dataFormatada) {
  dataInput.addEventListener('change', function () {
    const data = new Date(this.value + 'T00:00:00'); // Corrige fuso horário
    if (!isNaN(data)) {
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = meses[data.getMonth()];
      const ano = data.getFullYear();
      dataFormatada.textContent = `Fortaleza, ${dia} de ${mes} de ${ano}`;
    } else {
      dataFormatada.textContent = "Fortaleza, ___ de __________ de ________";
    }
  });
}

// --- Código para página termo.html ---
window.addEventListener('load', () => {
  // Preenche dados do equipamento
  if (document.getElementById("td-marca")) {
    document.getElementById("td-marca").textContent = localStorage.getItem("marca") || "";
    document.getElementById("td-modelo").textContent = localStorage.getItem("modelo") || "";
    document.getElementById("td-patrimonio").textContent = localStorage.getItem("patrimonio") || "";
  }

  // Preenche data formatada com traços nos spans (se estiver na termo.html)
  const dataBruta = localStorage.getItem("dataTermo");
  const diaSpan = document.getElementById("dia");
  const mesSpan = document.getElementById("mes");
  const anoSpan = document.getElementById("ano");

  if (diaSpan && mesSpan && anoSpan) {
    if (dataBruta) {
      const data = new Date(dataBruta + "T00:00:00");
      if (!isNaN(data)) {
        diaSpan.textContent = String(data.getDate()).padStart(2, '0');
        mesSpan.textContent = meses[data.getMonth()];
        anoSpan.textContent = data.getFullYear();
      } else {
        diaSpan.textContent = "___";
        mesSpan.textContent = "__________";
        anoSpan.textContent = "______";
      }
    } else {
      diaSpan.textContent = "___";
      mesSpan.textContent = "__________";
      anoSpan.textContent = "______";
    }
  }
});
