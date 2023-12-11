let quantidadeDependentes = 0;

function calcularImposto() {
  const baseInput = document.getElementById("base");
  const quantDepInput = document.getElementById("quantDep");
  const resultadoElement = document.getElementById("resultado");

 
  if (baseInput.value === "") {
    resultadoElement.innerText = "Informe o valor da base para calcular o imposto.";
    return;
  }

  const base = parseFloat(baseInput.value);

  
  if (quantDepInput.value !== "") {
    const quantDep = parseInt(quantDepInput.value);

    if (isNaN(quantDep)) {
      resultadoElement.innerText = "Número de dependentes inválido";
      return;
    }

    quantidadeDependentes = quantDep;
  }

  const dep = quantidadeDependentes * 189.59;

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

  resultadoElement.innerText = `Imposto de Renda: R$ ${ir.toFixed(2)}`;
}
