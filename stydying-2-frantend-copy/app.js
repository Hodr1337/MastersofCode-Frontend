let Welcome = confirm('Do you want to see the homework? You can also decline it to see the whole work done');

let pandemicStartMap;


// Some interactive entertainment
let WelcomeAgain;
if (Welcome === true) {
    pandemicStartMap = "XX0X10010X000X010X0";
} else if (Welcome === false){
    WelcomeAgain = confirm("So maybe you want to see the result from your example? If you want to save the humanity just decline this form" )
    if (WelcomeAgain === true) {
        pandemicStartMap = prompt("Enter your example (A 19 digits string that contains three types of characters : X , 1 , 0)" , "01000000X000X011X0X");
        if (pandemicStartMap.length < 19 || pandemicStartMap.length > 19){
            alert("Opps. Looks like you have entered the string that contains more or less thant 19 digits. Please reload the page and try again");
        } ; 
    } else if (WelcomeAgain === false){
        pandemicStartMap = "0000000000000000000";
        document.getElementById("SaverOfTheWorld").textContent = "You just have saved the humanity"
    } else{ pandemicStartMap == pandemicStartMap}
} else{ pandemicStartMap = "0000000000000000000";
document.getElementById("SaverOfTheWorld").textContent = "You just have saved the humanity"
}

// Creation the array for BeginMap values

let re = /\s*\s*/;
let arrayForBeginMap = pandemicStartMap.split(re);


// Calculation for EndOfMap

let arrayofEndMap = pandemicStartMap
  .split('X')
  .map((val) => (+val === 0 ? val : '1'.repeat(val.length)))
  .join('X');
arrayofEndMap = arrayofEndMap.split(re);




// Const value for HTML
document.getElementById("pandemicStartMap").innerHTML = "const pandemicStartMap = " + pandemicStartMap;





// Begin Map Color

let arrayForBeginColor = arrayForBeginMap.map(function callbackFn(element) { 
    if (element == "1") {
        return "RED";
    } else if (element == "X"){
        return "BLUE";
    } else {
        return "GREEN";
    }
 });


 let BeginMapIndexes  = ['val1', 'val2', 'val3' , 'val4', 'val5', 'val6' ,
 'val7', 'val8', 'val9' , 'val10', 'val11', 'val12' ,
 'val13', 'val14', 'val15' , 'val16', 'val17', 'val18' ,
 'val19' ];


 for(let i=0; i<BeginMapIndexes.length; i++)
 document.getElementById(BeginMapIndexes[i]).style.backgroundColor = arrayForBeginColor[i];


// END MAP Color

let arrayForEndMapColor = arrayofEndMap.map(function callbackFn(element) { 
    if (element == "1") {
        return "RED";
    } else if (element == "X"){
        return "BLUE";
    } else {
        return "GREEN";
    }
 });

 let EndMapIndexes  = ['sval1', 'sval2', 'sval3' , 'sval4', 'sval5', 'sval6' ,
 'sval7', 'sval8', 'sval9' , 'sval10', 'sval11', 'sval12' ,
 'sval13', 'sval14', 'sval15' , 'sval16', 'sval17', 'sval18' ,
 'sval19' ];


 for(let i=0; i<EndMapIndexes.length; i++)
 document.getElementById(EndMapIndexes[i]).style.backgroundColor = arrayForEndMapColor[i];



// Total


let totalof0 = arrayForBeginMap.filter(function(number) {
    return number == ("0");
  });
  

let totalof1 = arrayForBeginMap.filter(function(number) {
    return number == ("1");
  });
  

let Total = +totalof1.length + (+totalof0.length)

document.getElementById("Total").innerHTML = Total;

// Infected

let totalofinfected = arrayofEndMap.filter(function(number) {
    return number == ("1");
  });

let Infected = +totalofinfected.length

document.getElementById("Infected").innerHTML = Infected;


// Percentage
let Percentage = Infected / Total * 100 
document.getElementById("Percentage").innerHTML = Percentage + "%";

