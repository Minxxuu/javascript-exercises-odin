const leapYears = function(years) {
    let leapYear = false;

    // if(years%4 === 0 && years%100 === 0 && years%400 === 0)
    // {
    //     return leapYear = false; 
    // }

    // else if (years%4 === 0 && years%100 !== 0 && years % 400 === 0)
    // {
    //     return leapYear = true;
    // }

    if(years % 4 === 0)
    {
        if(years % 100 === 0)
        {
            leapYear = false;
            
            if(years % 400 === 0)
            {
                leapYear = true;
            }

        }
    }
    return leapYear;

};

// Do not edit below this line
module.exports = leapYears;
