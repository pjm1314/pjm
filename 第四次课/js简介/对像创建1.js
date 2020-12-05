function Pear(name,price,origin,weight){
    this.name=name,
    this.origin=origin,
    this.price=price,
    this.weight=weight;
    this.printName=function(){
        console.log("this is pear"+this.name);
    }

}
Pear.prototype.printName1=function(){
    console.log("this is printName 1");
}
var p1=new Pear("梨",12,"河南",10)
p1.printName()
p1.printName1()
//不可以写成以下：
// Pear.printName()
// Pear.printName1()
console.log(p1.__proto__);
console.log(Pear.prototype);
console.log(p1.__proto__.__proto__)
console.log(Pear.prototype.__proto__);
console.log(p1.__proto__.__proto__.__proto__)
console.log(Pear.prototype.__proto__.__proto__);