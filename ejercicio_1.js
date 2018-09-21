function palindrome2(str){
    const str1 = [...str].reverse().join('');
    return str === str1;
  }
  
  console.log(palindrome2('anona'));

 