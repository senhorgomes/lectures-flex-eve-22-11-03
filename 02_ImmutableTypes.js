//What other structures do we have in Javascript?

//Objects
//Arrays
//Methods(Functions)

const newArrays = [1,2,3,4,5];
const cloneOfNewArrays = newArrays;
newArrays.pop()
// console.log(newArrays, cloneOfNewArrays)
const newObj = {
    key: "Value"
}
const cloneOfNewObj = newObj;
newObj.newKey = "New Value";

console.log(newObj, cloneOfNewObj)