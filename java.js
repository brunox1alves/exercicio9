
  // Função recursiva para calcular o fatorial de um número
  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }

  // Função para solicitar um número e calcular o fatorial
  function obterNumeroEExibirFatorial() {
    var input = prompt("Digite um número para calcular o fatorial:");

    // Verificar se o input não é nulo e é um número válido
    if (input !== null && input.trim() !== "") {
      var numero = parseFloat(input);

      // Verificar se o número é um valor válido
      if (!isNaN(numero)) {
        var fatorial = calcularFatorial(numero);
        alert("O fatorial de " + numero + " é: " + fatorial);
      } else {
        alert("Erro: Digite um número válido.");
      }
    } else {
      alert("Erro: Nenhum número foi inserido.");
    }
  }

  // Chama a função para obter número e calcular fatorial quando a página estiver carregada
  window.onload = obterNumeroEExibirFatorial;

