
console.log("Welcome to Javascript");


// First Task

function convertFahrToCelsius(degree) {

	let celsius = parseFloat(degree);
	let fahrenheit =  5 / 9 * (celsius - 32);
	let answer = fahrenheit.toFixed(4);

	if (Array.isArray(degree)) {
		 result = `${JSON.stringify(degree)} is not a valid number but a/an array.`
	}else if( typeof degree === 'object' && degree !== null ){
         result = `${JSON.stringify(degree)} is not a valid number but a/an object.`
    } else if( typeof degree === 'boolean' ) {
         result = `${degree} is not a valid number but a boolean.`
    } else {
         var result = answer;
    }

	console.log(result);
    return result;
}


convertFahrToCelsius("0");
convertFahrToCelsius(0);
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});
convertFahrToCelsius(true);


// Second Task

const stringify = (factor)=>{
    if(factor===2){
        return 'yu';
    }
    else if(factor===3){
        return 'gi';
    }
    else{
        return 'oh';
    }
}


function factored(number){
	const factors = [2,3,5];
    let factorOf2or3or5 = false;
    let convertedString = "";
    factors.forEach((factor)=>{
         if(number%factor === 0 && convertedString ===""){
            factorOf2or3or5 = true;
            convertedString = convertedString.concat(stringify(factor));
         }
         else if(number%factor === 0){
            factorOf2or3or5 = true;
            convertedString = convertedString.concat('-',stringify(factor));
         }
    })
    return factorOf2or3or5 ? convertedString:number;
}

function checkYuGiOh(n){
    let yuGiOh = [];
    const count = Number(n); 

    if(!isNaN(count) && typeof n !=="boolean"){
        for(let i=1;i<=count;i++){
            yuGiOh.push(factored(i));
        }
    }
    else{
        yuGiOh = `invalid parameter: ${JSON.stringify(n)}`;
    }
    console.log(yuGiOh);
    return yuGiOh;
}


checkYuGiOh(10);
checkYuGiOh(5);
checkYuGiOh("fizzbuzz is meh");
