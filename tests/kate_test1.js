//test1
const newArray = [11,2,34];
let result = 0;
for (let i=0; i < newArray.length; i++){
    result= result + newArray[i];
}

    console.log(result);

//test 2
let newArray1 = [];
for (element of newArray){
    newArray1.push(element + 1);
}

console.log(newArray1);

//test3
let newArray2 = newArray1.filter(function(element){
    return element > 10
})
console.log(newArray2);

let newArray3 = newArray1.filter((element) => element > 10);
console.log(newArray3);