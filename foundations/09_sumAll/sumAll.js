const sumAll = function(a, b) {
    let x = 0;
    let error = "ERROR"
    if(a <= -1 || b <= -1)
    {
        return error;
    }
    else if(isNaN(a) || isNaN(b))
    {
        return error;
    }
    else{

    
    for (let i = a; i <= b; i++) {
        x += i;
    }
}
    return x;
};

// Do not edit below this line
module.exports = sumAll;
