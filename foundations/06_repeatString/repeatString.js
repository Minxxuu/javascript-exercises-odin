const repeatString = function(string, num) {

    let result = ""
    if(num <= -1)
    {
        let error = "ERROR"
        return error;
    }
    else{
        for(i = 0; i < num; i++)
        {
         
            result += string;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
