var a = document.getElementById("firstRange").value;
var b = document.getElementById("secondRange").value;
var submit = document.getElementById("getEven");

function Even() {
    for (var i = a; a <= b; a++) {
        if (a % 2 == 0) {
            console.log(a);
        
        }
        
    }
    
}
 submit.onclick = function(){
    Even();
 }

 