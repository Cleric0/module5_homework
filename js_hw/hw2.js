//задание 2

let x;

if (typeof x === "number"){
    console.log('x - число')
}else if(typeof x === "boolean"){
    console.log('x - boolean')
}else if(typeof x === "string"){
    console.log('x - string')
} else {
    console.log('type x - undefined')
}