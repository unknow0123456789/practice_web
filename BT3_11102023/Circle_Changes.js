var ColorBTN=document.getElementById("Changecolorbtn"), 
        SizeBTN=document.getElementById("Changesizebtn"),
        Circle=document.getElementById("circle");


        ColorBTN.addEventListener("click",ChangeColor);
        
        function ChangeColor()
        {
            var r=randomIntFromInterval(0,255),b=randomIntFromInterval(0,255),g=randomIntFromInterval(0,255);
            Circle.style.backgroundColor="rgb("+r+", "+g+", "+b+")";
        }
        SizeBTN.addEventListener("click",ChangeSize);
        function ChangeSize()
        {
            var size=randomIntFromInterval(100,500);
            Circle.style.width = size+"px";
            Circle.style.height = size+"px";
        }
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
          }