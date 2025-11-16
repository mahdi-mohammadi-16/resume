const input = document.querySelector('.input')
const input_value = document.querySelector('.input').value

const gam = document.getElementById('+')
const men = document.getElementById('-')
const zarb = document.getElementById('*')
const back = document.getElementById('back')
const clean = document.getElementById('clean')
const division = document.getElementById('/')
const equal = document.getElementById('equal')
const point = document.getElementById('point')

const container = document.querySelector('.container')

container.addEventListener('click' , () =>{

        console.log('firstNumber ' + firstNumber)
        console.log('operator ' + operator)
        console.log('twoNumber ' + twoNumber)
        console.log(input.value)
                // console.log(input.value.slice(0, -1))

})
let firstNumber = '';
let operator = '';
let twoNumber = '';
let result = '';

function gg(signss){

        if (  operator == "") {
                firstNumber += signss
                input.value += signss
                
        }
        else if(operator !== ""){
                twoNumber += signss
                input.value += signss

        }

        
}
gam.addEventListener('click' , () => {
        if (input.value == ''  || operator !== ''){
                return
        }
        else{
                operator += '+'
                input.value += '+'
        }
});
men.addEventListener('click' , () => {
        if (input.value == ''  || operator !== ''){
                return
        }
        else{
                operator += '-'
                input.value += '-'
        }
});
zarb.addEventListener('click' , () => {
        if (input.value == ''  || operator !== ''){
                return
        }
        else{
                operator += '*'
                input.value += '*'
        }
});
division.addEventListener('click' , () => {
        if (input.value == ''  || operator !== ''){
                return
        }
        else{
                operator += '/'
                input.value += '/'
        }
});
equal.addEventListener('click' , () =>{
        
        let operators = {
                "+": (firstNumber, twoNumber) => firstNumber + twoNumber,
                "-": (firstNumber, twoNumber) => firstNumber - twoNumber,
                "*": (firstNumber, twoNumber) => firstNumber * twoNumber,
                "/": (firstNumber, twoNumber) => firstNumber / twoNumber,
        };

        if (firstNumber !== '' && twoNumber !== '' && operator !== '') {
                input.value = '='
                let result = operators[operator](Number(firstNumber),Number(twoNumber));
                console.log(result); 
                input.value = result
                operator = ''
                firstNumber = result
                twoNumber = '';
        }
        
})

point.addEventListener('click' , () =>{
        if (String(firstNumber).includes('.') == false && twoNumber == ''){
                firstNumber += '.'
                input.value += '.'
        }else if (twoNumber.includes('.') == false && operator !== '') {
                twoNumber += '.'
                input.value += '.'
                
        }
        
})

back.addEventListener('click' , () => {

        if (firstNumber !== '' && operator !== '' && twoNumber !== '') {
                twoNumber = String(twoNumber).slice(0, -1);
        }
        else if (firstNumber !== '' &&  operator !== '' && twoNumber == '' ) {
                operator = operator.slice(0, -1);
        }
        else if (firstNumber !== '' && operator == ''  && twoNumber == '') {
                firstNumber = String(firstNumber).slice(0, -1);
                
        }
                
        

        input.value = input.value.slice(0, -1);

        if(input.value == '' ){
                firstNumber = ''
                twoNumber = ''
                operator = ''
                
        }

})
clean.addEventListener('click' , () =>{
        firstNumber = ''
        twoNumber = ''
        operator = ''
        input.value = ''
        result = ''
})




















        // if(!operator && !isNaN(signss)){
                
        //         fristNumbre += signss
        //         input.value += signss
        // }
        // else if(['='].includes(signss) == true){
        //         input.value += ""

        // }
        // else if(['+','-','*','/'].includes(signss)){

        //         operator += signss
        //         input.value += signss
        // }
        // else if(['='].includes(signss) !== true){
        //         twoNumbre += signss
        //         input.value += signss
        // }
        // if(['='].includes(signss)){
        //         input.value += signss
        //         let operators = {
        //         "+": (fristNumbre, twoNumbre) => fristNumbre + twoNumbre,
        //         "-": (fristNumbre, twoNumbre) => fristNumbre - twoNumbre,
        //         "*": (fristNumbre, twoNumbre) => fristNumbre * twoNumbre,
        //         "/": (fristNumbre, twoNumbre) => fristNumbre / twoNumbre,
        //         };

        //         let op = "+";       // عملگر به صورت رشته

        //         let result = operators[operator](Number(fristNumbre),Number(twoNumbre));
        //         console.log(result); 
        //         input.value += result

        // }
