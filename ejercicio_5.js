function circunferencia(radio){
    if(radio<=0){
        console.log('ERROR:El radio debe ser mayor que cero')
        return 0;
    }
    var area;
    area=Math.PI*radio**2;
    return area;
}
console.log(circunferencia(10)); 