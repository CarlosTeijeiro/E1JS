const ingredientesPizza = ["harina","levadura","agua","sal","azucar","aceite","mozzarella","tomate","aceitunas","oregano"];
const pares = [];
const impares = [];
for(let i= 0;i<ingredientesPizza.length;i++){
    if(ingredientesPizza[i].length % 2 ==0){
        pares.push(ingredientesPizza[i]);
    }
    else{
        impares.push(ingredientesPizza[i]);
    }
}
console.log(`Los ingredientes pares son: ${pares}.`);
console.log(`Los ingredientes impares son: ${impares}.`);

