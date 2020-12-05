// var nut = function(){   
//      console.log("this is nut-1")    
// return "this is nut-2" }
// nut()
// console.log(nut())
// var result=function(){
//     console.log(nut);
// }
// console.log(nut);

//this is nut-1

// var lichee = function (){   
//      console.log("this is lichee-1")  
//      return "this is lichee-2" }()
//this is lichee-1

// var watermelon = function(){   
//     console.log("this is watermelon-1") 
//   return function pear(){      
//      console.log("this is pear-1")   
//     }
//  }
//  watermelon()()

 

// let banana  = function banana(){    console.log("this is banana-1")    
// return ()=> function(){console.log("this is Anonymous function")}() } 
// banana()()
//this is banana-1
//this is Anonymous function

// let grape = function redGrape(){    return {        name:"my name is red grape",        printMyName:()=>{            return ()=>{                return Object.create({                    name:"my name is grape nut",                    printMyGrapeNut:function(){                        console.log("this is MyGrapNut")                    }                })            }        }    } }


var blackOrange = ()=> function(){console.log("this is small orange")
 return function(){    console.log("this is big orange") }()
}()
blackOrange ()()
console.log(blackOrange());

