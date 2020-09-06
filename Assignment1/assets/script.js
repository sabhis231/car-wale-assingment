 
 //Counter variable to trace the number of button click
 var clickEventCount = 0;
 //Color Array 
 var colorArray=['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


 //get Random Color
 var getRandomColor = function() {
     
  var color = '#';
  for (var i = 0; i < 6; i++) {
     color += colorArray[Math.floor(Math.random() * 15)];
  }
  if(hexColor==color) {
     // to aviod same consecutive color
     getRandomColor();
  }
  return color;
}
 
 var hexColor=getRandomColor();

 //Initial Background Color setup
 document.getElementsByTagName("body")[0].style.background = hexColor;

//Disable, enable and print the counter value
 var checkCounterStatus = function () {

   if (clickEventCount < 1) {
     document.getElementsByClassName("pointer")[0].style.display = "none";
   } else {
     document.getElementsByClassName("pointer")[0].innerHTML = clickEventCount;
     document.getElementsByClassName("pointer")[0].style.display = "block";
   }

 };

 checkCounterStatus();

 //Change background and increase counter
 var changeColor = function () {
   clickEventCount++;
   checkCounterStatus();

   hexColor = getRandomColor();
   document.getElementsByTagName("body")[0].style.background = hexColor;
 };
