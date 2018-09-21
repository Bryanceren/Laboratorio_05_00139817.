function fibonacci(num){
    var a = 0, b = 1, temp;
    var arreglo = [];
    while (num > 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
      arreglo.push(b);
    }
  
    return arreglo;
  }

  console.log(fibonacci(10));