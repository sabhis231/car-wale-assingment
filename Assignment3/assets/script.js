var data=[];
var block=1;
var largestValue=0;
var previousValue=0;
var resultData=[];
var printResult= function(result) {
    console.log(result);
    document.getElementById('result').innerHTML="Result is :"+result +"<br> Please open console for exact data";
}


var showResult = function() {
    resultData=[];
    var x = document.getElementById("arrayInput").value;
    var y=document.getElementById("blockInput").value;
    if(x=="") {
        printResult("Please enter Valid value for array data");
        return;
    }
    if(y=="") {
        printResult("Please enter Valid value of n");
        return;
    }
   
    block=+y;
    data=x.split(" ");
    if(data.length<block) {
        printResult("Array should have element greater or equal to the value n");
        return;
    }


    largestValue=0;
    previousValue=0;
    if(data.length==0) {
        printResult("Null");
        return;
    }
    for(var i=0;i<data.length;i=i+block) {
        if(data[i]==NaN) {
            printResult("Please enter only number seprated by space in as array");
            return;
        }   
        let newData=[];
        for(var j=i;j<data.length;j++) {
            newData.push(data[j]);
            if((j+1)%block==0) {
                break;
            }
        }
        resultData.push(newData)
        
    }
    printResult(resultData);
}

