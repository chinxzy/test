var a = document.getElementById("firstRange").value;
var b = document.getElementById("secondRange").value;
var submit = document.getElementById("getPrime");
var num = [];

    for (var i = a; a < b; a++) {
        num.push (a);        
        }

function prime() {
    num = num.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      
      console.log(num);
    
}

submit.onclick = function(){
    prime();
 }

 