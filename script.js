function Add(){
    var a = Number(document.getElementById("input1").value);
    var b = Number(document.getElementById("input2").value);
    var res= "Addition:  " + (a+b);
    document.getElementById("result").value=res;
}
function sub(){
    var a = Number(document.getElementById("input1").value);
    var b = Number(document.getElementById("input2").value);
    var res= "Substraction:  " + (a-b);
    document.getElementById("result").value=res;
    }
function mul(){
    var a = Number(document.getElementById("input1").value);
    var b = Number(document.getElementById("input2").value);
    var res= "Muliplication:  " + a*b;
    document.getElementById("result").value=res;
    }
function div(){
    var a = Number(document.getElementById("input1").value);
    var b = Number(document.getElementById("input2").value);
    var res= "Division:  " + a/b;
    document.getElementById("result").value=res;
    }  
    
function clearAll() {
    document.getElementById("input1").value=' ';
    document.getElementById("input2").value=' ';
    document.getElementById("result").value=' ';
    }