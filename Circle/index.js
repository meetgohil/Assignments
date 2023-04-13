function main() {
    var clickCount=0;
    var height1="0px", width1="0px";
    var n=prompt("Enter number");
    if(n === "0") {
        alert("Invalid input!");
    }
    else if(n !== null) {
        document.getElementById('circle-id').addEventListener("click", divide);
        function updateOnClick(element) {
            clickCount++;
            if(clickCount === 1) {  
                height1=element.style.height, width1=element.style.width, element.style.visibility="hidden";
            }
            else if(clickCount === 2) {
                let height2 = element.style.height;
                let width2 = element.style.width;
                element.style.height = String(+height1.substring(0,height1.length-2) + +height2.substring(0,height2.length-2)) + "px";
                element.style.width = String(+width1.substring(0,width1.length-2) + +width2.substring(0,width2.length-2)) + "px";
                clickCount=0;
            }
        }

        function divide() {
            var circle1=document.getElementById('circle-id');
            var newdiv = document.getElementById("newcircle-id");
            const height1 = circle1.clientHeight;

            circle1.style.display="none";
            radius1=height1/n;

            for(let i=0 ; i<n ; i++) {
                let myspan = document.createElement("div");
                myspan.className="divided-circles";
                myspan.id="i"+String(i);
                myspan.style.height = String(radius1)+"px";
                myspan.style.width = String(radius1)+"px";
                newdiv.appendChild(myspan);
                myspan.onclick = ()=> {
                    updateOnClick(myspan);
                }
            }
        }
    }
    
}