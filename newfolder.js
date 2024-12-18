
// 1.
let concat = () => {
    let names = "hello";
    let names1 = "world";

    let result = names.concat(names1)
    return (result);

}

console.log(concat());


let java = () => {
    let script = "javascript to java"
    let java_result = script.length;
    return (java_result);

}
console.log(java());


let substr = () => {
    let fun = "hello world";
    let result = fun.substring(2, 6);
    return (result);

}
console.log(substr());


let uppercase = () => {
    let flow = "java";
    let result = flow.toUpperCase();
    return (result);
}
console.log(uppercase());


let includes = () => {
    let hows = "i love coding";
    let result = hows.includes("coding");
    return (result);
}
console.log(includes());


let num = () => {
    let house = "hello world!";
    let result = house.replace("world", "javascript");
    return (result);

}
console.log(num());













let trims = "  hello,  world ";
let result = trims.trim();
console.log(result);


let splits = () => {
    let house = "mango,tree,pine";
    let result = house.split();
    return (result);
}
console.log(splits());

let repeats = () => {
    let road = "hello dude";
    let result = road.repeat(4);
    return (result);
}
console.log(repeats());

(() => {
    let check = "hypertext";
    let result = check.startsWith("h");
    console.log(result);
})();