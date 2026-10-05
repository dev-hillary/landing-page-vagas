const formulario = document.getElementById("vagaForm");
const tabela = document.getElementById("tabelaVagas");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const empresa = document.getElementById("empresa").value;
  const vaga = document.getElementById("vaga").value;
  const area = document.getElementById("area").value;
  const modalidade = document.getElementById("modalidade").value;
  const localizacao = document.getElementById("localizacao").value;
  const bolsa = document.getElementById("bolsa").value;
  const descricao = document.getElementById("descricao").value;

  const linhaVazia = document.getElementById("semVagas");

  if (linhaVazia) {
    linhaVazia.remove();
  }

  const novaLinha = document.createElement("tr");

  novaLinha.innerHTML = `
    <td><strong>${vaga}</strong></td>
    <td>${empresa}</td>
    <td>${area}</td>
    <td>${modalidade}</td>
    <td>${localizacao}</td>
    <td>${bolsa}</td>
  `;

  novaLinha.title = "Descrição: " + descricao;

  tabela.appendChild(novaLinha);

  mensagem.textContent = "✓ Vaga cadastrada com sucesso!";
  formulario.reset();

  setTimeout(function() {
    mensagem.textContent = "";
  }, 3000);
});
