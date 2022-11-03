const newArrays = [1,2,3,4,5];
const improperCloneOfNewArrays = newArrays;
// const properCloneOfNewArrays = [...newArrays];
const properCloneOfNewArrays = JSON.parse(JSON.stringify(newArrays));
// const numbersArray = [0,1,2,3,4,5,6,7,8,9]
//Effectively use the spread operator to combine elements
const numbersArray = [0,...newArrays,6,7,8,9]
//.concat() -> joins two arrays together, and returns a brand new array
// newArrays.pop()
//[1,2,3,4,5]
console.log(numbersArray)
const newObj = {
    key: "Value"
}
const cloneOfNewObj = {...newObj};
newObj.newKey = "New Value";

console.log(newObj, cloneOfNewObj)




// Note that you can spread arrays and objects. Be careful to only use this strategy when you need to, as it is more expensive (takes more CPU and RAM) than the alternative. Note this is a shallow copy, any nested arrays or objects will still be stored by reference.