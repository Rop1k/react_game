const callBack = (a,b, callbackFunction) => {
    callbackFunction(8);
    return a+b;
}
const alertFunct = (c) =>{
    const test = 4;
    //alert(c);
}
console.log(String(alertFunct));
callBack(10,5,alertFunct);