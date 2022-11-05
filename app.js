var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;
var getButton = document.querySelector("btn");


input.addEventListener("keyup",getConversion);
inputType.addEventListener("change",getConversion);
resultType.addEventListener("change",getConversion);

getButton.addEventListener("click",
    getConversion);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;






function getConversion(){
    
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        //meter to kilometer formula
        result.value = Number(input.value) * 0.001;
       
    }else if (inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        //meter to centimter
        result.value = Number(input.value) * 100;
    }else if (inputTypeValue === "meter" && resultTypeValue === "feet"){
        //meter to feet
        result.value = Number(input.value) * 3.2808;
    }else if (inputTypeValue === "meter" && resultTypeValue === "inches"){
        //meter to inches
        result.value = Number(input.value) *39.370;
    }else if (inputTypeValue === "meter" && resultTypeValue === "yards"){
        //meter to yards
        result.value = Number(input.value) *1.0936;
    }else if (inputTypeValue === "meter" && resultTypeValue === "miles"){
        //meter to miles
        result.value = Number(input.value) *0.00062137;
    }else if (inputTypeValue === "meter" && resultTypeValue === "meter"){
       result.value = input.value;  
        
      
       
}
   
if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
    // kilometer to meter formula
    result.value = Number(input.value) * 1000;
}else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
    //kilometer to centimter
    result.value = Number(input.value) * 100000;
    
}
else if (inputTypeValue === "kilometer" && resultTypeValue === "feet"){
    //kilometer to feet
    result.value = Number(input.value) * 3280.8;

}else if (inputTypeValue === "kilometer" && resultTypeValue === "inches"){
    //kilometer to inches
    result.value = Number(input.value) * 39370;

}else if (inputTypeValue === "kilometer" && resultTypeValue === "yards"){
    //kilometer to yards
    result.value = Number(input.value) * 1093.6;

}else if (inputTypeValue === "kilometer" && resultTypeValue === "miles"){
    //kilometer to Miles
    result.value = Number(input.value) * 0.62137;
}
else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
     //kilometer to kilomter
    result.value = input.value;
}

if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
    // centimter to kilomter
    result.value = Number(input.value) * 0.00001;
}else if (inputTypeValue === "centimeter" && resultTypeValue === "meter"){
    //centimeter to meter
    result.value = Number(input.value) * 0.01;
}else if (inputTypeValue === "centimeter" && resultTypeValue === "feet"){
    //centimter to feet
    result.value = Number(input.value) * 0.032808;
}else if (inputTypeValue === "centimeter" && resultTypeValue === "inches"){
    //centimter to inches
    result.value = Number(input.value) * 0.39370;
}else if (inputTypeValue === "centimeter" && resultTypeValue === "yards"){
    //centimter to Yards
    result.value = Number(input.value) *0.010936;
}else if (inputTypeValue === "centimeter" && resultTypeValue === "miles"){
    //centimter to Miles
    result.value = Number(input.value) *0.0000062137;
}
else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
     //centimter to centimter
    result.value = input.value;
}
if(inputTypeValue === "feet" && resultTypeValue === "kilometer"){
    // feet to kilomter
    result.value = Number(input.value) /3280.8;
}else if (inputTypeValue === "feet" && resultTypeValue === "meter"){
    //feet to meter
    result.value = Number(input.value)/3.2808;
}else if (inputTypeValue === "feet" && resultTypeValue === "centimeter"){
    //feet to centimter
    result.value = Number(input.value) / 0.032808;
}else if (inputTypeValue === "feet" && resultTypeValue === "inches"){
    //feet to inches
    result.value = Number(input.value)*12;
}else if (inputTypeValue === "feet" && resultTypeValue === "yards"){
    //yards to Yards
    result.value = Number(input.value) *0.33333;
}else if (inputTypeValue === "feet" && resultTypeValue === "miles"){
    //feet to Miles
    result.value = Number(input.value)*0.00018939;
}
else if (inputTypeValue === "feet" && resultTypeValue === "feet"){
     //feet to feet
    result.value = input.value;

}
if(inputTypeValue === "inches" && resultTypeValue === "kilometer"){
   // inches to kilomter
   result.value = Number(input.value) /39370;
}else if (inputTypeValue === "inches" && resultTypeValue === "meter"){
   //inches to meter
   result.value = Number(input.value)/39.370;
}else if (inputTypeValue === "inches" && resultTypeValue === "centimeter"){
   //inches to centimter
   result.value = Number(input.value) /0.39370;
}else if (inputTypeValue === "inches" && resultTypeValue === "feet"){
   //inches to feet
   result.value = Number(input.value)*0.083333;
}else if (inputTypeValue === "inches" && resultTypeValue === "yards"){
   //inches to Yards
   result.value = Number(input.value)*0.027778;
}else if (inputTypeValue === "inches" && resultTypeValue === "miles"){
   //inchesto Miles
   result.value = Number(input.value)*0.000015783;
}
else if (inputTypeValue === "inches" && resultTypeValue === "inches"){
    //centimter to centimter
   result.value = input.value;
}
if(inputTypeValue === "yards" && resultTypeValue === "kilometer"){
    // yards to kilomter
    result.value = Number(input.value)/1093.6;
 }else if (inputTypeValue === "yards" && resultTypeValue === "meter"){
    //yrads to meter
    result.value = Number(input.value)/1.0936;
 }else if (inputTypeValue === "yards" && resultTypeValue === "centimeter"){
    //yards to centimter
    result.value = Number(input.value)/0.010936;
 }else if (inputTypeValue === "yards" && resultTypeValue === "feet"){
    //yards to feet
    result.value = Number(input.value)*3;
 }else if (inputTypeValue === "yards" && resultTypeValue === "inches"){
    //yards to inches
    result.value = Number(input.value)*36;
 }else if (inputTypeValue === "yards" && resultTypeValue === "miles"){
    //yards to Miles
    result.value = Number(input.value)*0.00056818;
 }
 else if (inputTypeValue === "yards" && resultTypeValue === "yards"){
     //yards to yards
    result.value = input.value;
 }
 if(inputTypeValue === "yards" && resultTypeValue === "kilometer"){
    // yards to kilomter
    result.value = Number(input.value)/1093.6;
 }else if (inputTypeValue === "yards" && resultTypeValue === "meter"){
    //yrads to meter
    result.value = Number(input.value)/1.0936;
 }else if (inputTypeValue === "yards" && resultTypeValue === "centimeter"){
    //yards to centimter
    result.value = Number(input.value)/0.010936;
 }else if (inputTypeValue === "yards" && resultTypeValue === "feet"){
    //yards to feet
    result.value = Number(input.value)*3;
 }else if (inputTypeValue === "yards" && resultTypeValue === "inches"){
    //yards to inches
    result.value = Number(input.value)*36;
 }else if (inputTypeValue === "yards" && resultTypeValue === "miles"){
    //yards to Miles
    result.value = Number(input.value)*0.00056818;
 }
 else if (inputTypeValue === "yards" && resultTypeValue === "yards"){
     //yards to yards
    result.value = input.value;
 }
 if(inputTypeValue === "miles" && resultTypeValue === "kilometer"){
    // miles to kilomter
    result.value = Number(input.value)/0.62137;
 }else if (inputTypeValue === "miles" && resultTypeValue === "meter"){
    //miles to meter
    result.value = Number(input.value)/0.00062137;
 }else if (inputTypeValue === "miles" && resultTypeValue === "centimeter"){
    //miles to centimter
    result.value = Number(input.value)/0.0000062137;
 }else if (inputTypeValue === "miles" && resultTypeValue === "feet"){
    //miles to feet
    result.value = Number(input.value)*5280;
 }else if (inputTypeValue === "miles" && resultTypeValue === "inches"){
    //miles to inches
    result.value = Number(input.value)*63360;
 }else if (inputTypeValue === "miles" && resultTypeValue === "yards"){
    //miles to yards
    result.value = Number(input.value)*1760;
 }
 else if (inputTypeValue === "miles" && resultTypeValue === "miles"){
     //yards to yards
    result.value = input.value;
 }
}






   