// Variável global para armazenar a quantidade de dependentes
let quantidadeDependentes = 0;

function calcularImposto() {
  const base = parseFloat(document.getElementById("base").value);

  // Obtemos o valor atual do campo "quantDep" ou usamos o valor anterior se não for informado um novo
  const quantDepInput = document.getElementById("quantDep");
  const quantDep = quantDepInput.value !== "" ? parseInt(quantDepInput.value) : quantidadeDependentes;

  // Se o campo "quantDep" for preenchido, atualizamos a variável global
  if (quantDepInput.value !== "") {
    quantidadeDependentes = quantDep;
  }

  const dep = quantDep * 189.59;

  let aliquota, deducao;
  if (base <= 2112.00) {
    aliquota = 0;
    deducao = 0;
  } else if (base <= 2826.65) {
    aliquota = 0.075;
    deducao = 158.40;
  } else if (base <= 3751.05) {
    aliquota = 0.15;
    deducao = 370.40;
  } else if (base <= 4664.68) {
    aliquota = 0.225;
    deducao = 651.73;
  } else {
    aliquota = 0.275;
    deducao = 884.96;
  }

  const ir = (base - dep) * aliquota - deducao;

  document.getElementById("resultado").innerText = `Imposto de Renda: R$ ${ir.toFixed(2)}`;
}
