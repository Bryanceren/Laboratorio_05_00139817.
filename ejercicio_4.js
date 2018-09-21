function binario(x){
    var residuo;
    var arreglo=[];
    while(x>=1){
        residuo=x%2;
        x=Math.trunc(x/2);
        arreglo.push(residuo);
    }
    return arreglo.reverse();
}
console.log(binario(10));