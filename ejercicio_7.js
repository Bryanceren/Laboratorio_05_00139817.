function bisiesto(year){
if (year%4==0 && year%100!=0 || year%400==0) {
    console.log('Es bisiesto');
    return 0;
}
console.log('no es bisiesto');
return;
}
bisiesto(2020);