const txtOp1 = document.getElementById('op1');
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById('op2');
const btnCalcular = document.getElementById('Calcular');
const pResultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', calcular);

function calcular(){
    const operador = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if(operador == '+' || operador == '-' || operador == '*' || 
    operador == '/'){
let resultado;
switch(operador){
    case "+":
        resultado = op1 + op2
        break;
        case "-":
            resultado = op1 - op2
            break;
            case "*":
            resultado = op1 * op2
            break;
            case "/":
            resultado = op1 / op2
            break
        }
        pResultado.style="color:black"
    pResultado.innerText= "= " + resultado
    }else{
        pResultado.style="color:red"
     pResultado.innerText='Cálculo Imposible'
    }
}