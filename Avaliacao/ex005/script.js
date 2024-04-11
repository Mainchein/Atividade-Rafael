let num, maior, indiceMaior
num = [1, 2, 3 , 4, 0]
maior = 0

for(let i = 0; i < num.length; i++){
    if(num[i] > maior){
        maior = num[i]
        indiceMaior = i
    }
}
console.log(num[indiceMaior])