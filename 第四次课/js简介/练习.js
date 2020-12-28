// (function (x) {
//     console.log("this is chestnut")
//     return ((x) => function () {
//     console.log("this is haw")
//     x.printName= function(){
//     console.log("this is x().printName")
//     return this.name
//     }
//     return 200 + x.printName() + x()
//     }())(() => { this.name=6666;console.log("this is pitaya"); return 3999 })
//     })()



 ;(function(x){
     console.log("this is chestnut");
     return (function(x){
         console.log("this is haw");
         x()
         x.printName=function(){
            console.log("this is x().printName")
            return this.name
         }
         return 200 +x.printName() + x()
     })(()=>{
         this.name=6666
         console.log("this is pitaya");
         return 3999
     })
 })()   






 var lichees = [
    () => {
    return function () {
    console.log("this is number 1")()
    }
    },
    +function(){console.log("this is number 2")}(),
   
    {
    name:"this is lichee 3"
    },
    2000,
    "this is lichee 4",
    null,
    new Object({}),
    Object.create({}),
    Object.prototype,
    new Object({}).__proto__,
    new Date(),
    function licheeNut(){
    return {
    printNut:()=>{
    console.log("thisis printNut")
    }
    }
    },
    Object.prototype.tag = "this is tag",
    Object.tag
    ]
    


    Object.tag1=100
    Object.prototype.tag=200
    console.log(Object.prototype.tag.prototype);



    var obj1=new Object()
    obj1.tag1=100
    Object.prototype=obj2

    var obj2=new Object()
    obj2.tag=200
    Object.prototype.tag=300
    console.log(obj1.tag);





    		// 构造函数
	// 	function Foo(name,age){
    //         this.name=name;
    //         this.age=age;
    //    }
    //    Object.prototype.toString=function(){
    //        //this是什么要看执行的时候谁调用了这个函数。
    //        console.log("I'm "+this.name+" And I'm "+this.age);
    //    }
    //    var fn=new Foo('小明',19);
    //    fn.toString(); //I'm 小明 And I'm 19
    //    console.log(fn.toString===Foo.prototype.__proto__.toString); //true
       
    //    console.log(Foo.prototype)//true
    //    console.log(Foo.prototype.__proto__===Object.prototype)//true
    //    console.log(Object.prototype.__proto__===null)//true



    function pear(){
        var number=0;
        return function(){
            console.log(number++);
        }
    }
    var p1=pear()
    p1()        
    p1()
    p1()
    