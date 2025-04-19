 var i =  Number(prompt('enter-first-number'))
 var t = prompt('enter operation')
 var x = Number(prompt('enter-second-number'))
  var result

switch(t){

 case'+': 
result= i+x
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
console.log(result)