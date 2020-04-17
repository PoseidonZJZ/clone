function addSum(a){
    return function(b){
        return a+b;
    }
}


var x=addSum(1)(2);

x=addSum(x)(3);

x=addSum(x)(8);


