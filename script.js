// ====== Validação do formulário ======
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return false;
  }

  const emailValido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailValido.test(email)) {
    alert("Digite um e-mail válido!");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  document.getElementById("formContato").reset();
  return true;
}

// ====== Alternância de tema claro/escuro ======
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnTema.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
