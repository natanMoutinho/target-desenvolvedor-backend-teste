function pertenceFibonacci(numero) {
  if (numero < 0) return `${numero} não pertence à sequência de Fibonacci.`;

  let a = 0, b = 1;
  
  while (a <= numero) {
    if (a === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
    [a, b] = [b, a + b]; 
  }
  return `${numero} não pertence à sequência de Fibonacci.`;
}

console.log(pertenceFibonacci(21));