function printExp(exp){
    document.getElementById('output').value=exp;
}
var str = "";
function getExp(val){
    str += val;
    printExp(str);
}
document.getElementById('equal').addEventListener("click", ans);
function ans(){
    var exp = document.getElementById('output').value;
    if(exp){
        str = eval(exp);
        printExp(str);
    }
}
document.getElementById('clear').addEventListener("click", function(){
    document.getElementById('output').value="";
    str ="";
})
window.addEventListener("keydown", ({ keyCode }) => {
      
    // Press *
    if (keyCode === 106 || event.key === "*") return getExp("*");
    
    // Press (
    if (event.key === "(") return getExp("(");

    // Press )
    if (event.key === ")") return getExp(")");
    
    // Press %
    if (event.key === "%") return getExp("%");
    
    // Press +
    if (keyCode === 107 || event.key === "+") return getExp("+");

    // Press 1
    if (keyCode === 49 || keyCode === 97) return getExp("1");
  
    // Press 2
    if (keyCode === 50 || keyCode === 98) return getExp("2");
  
    // Press 3
    if (keyCode === 51 || keyCode === 99) return getExp("3");
  
    // Press 4
    if (keyCode === 52 || keyCode === 100) return getExp("4");
  
    // Press 5
    if (keyCode === 53 || keyCode === 101) return getExp("5");

    // Press 6
    if (keyCode === 54 || keyCode === 102) return getExp("6");
  
    // Press 7
    if (keyCode === 55 || keyCode === 103) return getExp("7");
  
    // Press 8
    if (keyCode === 56 || keyCode === 104) return getExp("8");
  
    // Press 9
    if (keyCode === 57 || keyCode === 105) return getExp("9");
  
    // Press 0
    if (keyCode === 48 || keyCode === 96) return getExp("0");

    // Press .
    if (keyCode === 110 || keyCode === 190) return getExp(".");
  
    // Press /
    if (keyCode === 111 || keyCode === 191) return getExp("/");
    
    // Press +
    if (keyCode === 13 || keyCode === 187) return ans();
  
    // Press -
    if (keyCode === 189 || keyCode === 109) return getExp("-");

});