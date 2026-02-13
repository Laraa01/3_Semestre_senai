const idade = 1;

if ( idade >=18 ){
    console.log("Você é um adulto")
} else if (idade >=12 && idade <=17){
    console.log("Você é adolescente")
} else {
    console.log("Você é criança")
}
//else if (idade <12) {
  //  console.log("Você é criança") }

  //Operador ternário
  let tema = 'dark';
  let cordeFundo ;
  if(tema == 'dark') {
    cordeFundo = 'black'
  } else {
    cordeFundo = 'white'
  }

  //condição         se Verdadeira    senão
  tema == 'dark' ? cordeFundo = 'black' : cordeFundo = 'white';
