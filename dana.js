 var i = prompt('enter-first-number')
 var t = prompt('enter operation')
 var x = prompt('enter-second-number')
 var result =Number
switch(t){
    case'+': 
    result=i+x
    break

case'-': 
result=i-x
break

case'*': 
result=i*x
break

case'%': 
result=i%x
break

case'/': 
result=i/x
break
default: result="invalid operator"
}
console.log( result)