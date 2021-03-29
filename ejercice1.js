"use strict";

//Declaration of modificated array;
let variableArray = [0,2,3,4,0,0,9,8,0,9];
let imaginaryString = "";
let movingZeroDigitRight = () => {
    return new Promise((resolve,reject)=>{
        if(variableArray.length>=0 && variableArray.length<=100){
            let countReal=0;
            for (let index = 0; countReal < variableArray.length; index++) {
                if (variableArray[index]<=9){
                    if(variableArray[index]==0){
                        variableArray.push(variableArray[index]);
                        variableArray.splice(index,1);
                        index--;
                    }
                    countReal++;
                }else{
                    reject({message: "El digito es mayor de 9"});
                }
            }
            resolve(true);
        }else{
            console.log("Error");
            reject({message: "El arreglo contiene mas de 100 elementos"});
        }
    });
}

let creatingImaginaryNumber = () => {
    return new Promise((resolve,reject)=>{
        console.log("Arrange Array ===> ",variableArray);
        imaginaryString = variableArray.join(",");
        imaginaryString = imaginaryString.split(",0");
        imaginaryString = imaginaryString[0];
        imaginaryString = imaginaryString.replace(/,/g, '');
        imaginaryString = parseInt(imaginaryString);
        console.log("Imaginary String ===> ",imaginaryString);
        imaginaryString++;
        imaginaryString = imaginaryString.toString().split('');
        imaginaryString = imaginaryString.map(x => parseInt(x));
        console.log("Imaginary Number + 1 ===> ",imaginaryString);
        resolve(true);
    });
}
  
movingZeroDigitRight()
    .then(creatingImaginaryNumber)
    .then(result=>{
        console.log("Success Finish");
}).catch(e => {
    console.log(e);
});
