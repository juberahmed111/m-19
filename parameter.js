function bringSingara(taka) {
    console.log('singara ar jonno dise', taka);
    console.log('mama singara den');
    var singerPrice = 10;
    var singarQuantity = taka / singerPrice;
    return singarQuantity;

}
var money = 250;
var singara = bringSingara(money);
console.log('ai nen singara ', singara);
