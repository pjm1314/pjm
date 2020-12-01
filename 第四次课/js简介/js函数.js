// var  f=function apple(){
//     console.log("apple");
// }
// f()
// function apple2(){
//     let name="apple2";
//     function apple2son(){
//         console.log("apple2son");
//     }
//     apple2son()
//     return{
//         apple2son : apple2son
//     }
// }
// apple2().apple2son()


//语法糖
// var a1=123
// var a2={}
// console.log(typeof a1);
// console.log(typeof a2);
// var a3=Object.create(null);



//es6
//箭头函数
// var a5=(x,y)=>{
//     console.log(x+y);
// }
// a5(5,4)
// console.log(typeof a5);



var a5=function apple5(){
    console.log('apple5');
    return 100;
}()
// apple5()
console.log(a5);


//闭包
// (function(x,y){
//     console.log("江西软件");
//     console.log(x+y);
// })(3,6)




//原型
// function Furit(){
//     this.name="Furit"
//     console.log("this is furit");
// }
// Furit.prototype.apple=function apple(){
//     console.log("this is apple");
// }
// var a8=new Furit();
// console.log(a8.apple());

