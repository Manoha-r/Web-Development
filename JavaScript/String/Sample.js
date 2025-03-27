function checkSpam(str){
    str = str.toLowerCase();
    return str.includes('xxx') || str.includes('viagra');
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") )

function extractMoney(str){
    return +str.slice(1);
}

console.log(extractMoney("$120")===120)