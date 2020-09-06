// var data=[1,2,5,2,8,1,5];
var data=[];
var block=1;
var largestValue=0;
var previousValue=0;

var printResult= function(result) {
    document.getElementById('result').innerHTML="Result is :"+result;
}


var showResult = function() {
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
    console.log(block);
    data=x.split(" ");
    largestValue=0;
    previousValue=0;
    if(data.length==0) {
        printResult("Null");
        return;
    }
    if(block==1) {
        largestValue=Math.max(...data);
        printResult(largestValue);
        return;
    }
    for(var i=0;i<data.length;i++) {
        if(data[i]==NaN) {
            printResult("Please enter only number seprated by space in as array");
            return;
        }   

        if(i==0) {
            var sum=0;
            for(var j=0;j<block;j++) {
                if(data[j]==NaN) {
                    printResult("Please enter only number seprated by space in as array");
                    return;
                }
                largestValue+=+data[j];
            }
            previousValue=largestValue;
        }
        else {
            largestValue = previousValue - +data[i-1] + +data[block-1+i];
            largestValue= largestValue > previousValue ? largestValue: previousValue;
            previousValue=largestValue;
        }
    }
    printResult(largestValue);
}

