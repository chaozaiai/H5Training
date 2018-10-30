/*
 function Animal(){
    this.species = "动物";
} 
*/

/* function Dog(name,color){
    this.name = name;
    this.color = color;
} */

/**
 * 1) 构造行数绑定
 * 使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：
 *
 */

/*  function Dog(name,color){
    Animal.apply(this,arguments);
    this.name = name;
    this.color = color;
 } */
 
/*  2)使用prototype属性
    如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了 
    任何一个prototype对象都有一个constructor属性，指向它的构造函数
     因此我们必须手动纠正，将Dog.prototype对象的constructor值改Dog
 */

/* function Dog(name,color){
    this.name = name;
    this.color = color;
}

Dog.prototype = new Animal();
Dog.prototype.constructor=Dog;
var dog1 = new Dog("大黄","金色");
alert(dog1.species); */

  
/*  3)直接继承prototype
    第三种方法是对第二种方法的改进。
    由于Animal对象中，不变的属性都可以直接写入Animal.prototype。
    所以，我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype。

    与前一种方法相比，这样做的优点是效率比较高（不用执行和建立Animal的实例了），
    比较省内存。
    缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，
    那么任何对Cat.prototype的修改，都会反映到Animal.prototype
 */
function Animal(){
    
} 
Animal.prototype.species = "动物";

function Dog(name,color){
    this.name = name;
    this.color = color;
}
/* Dog.prototype = Animal.prototype;
Dog.prototype.constructor = Dog;
var dog2=new Dog("二黄","金色");
alert(dog2.species);
alert(Animal.prototype.constructor) *///Animal的构造函数变成dog了

/**
 * 4）利用空对象作为中介
 * 由于"直接继承prototype"存在上述的缺点，所以就有第四种方法，利用一个空对象作为中介。
 * F是空对象，所以几乎不占内存。这时，修改Cat的prototype对象，就不会影响到Animal的prototype对象。
 * 
 */

/* var F = function(){};
F.prototype = Animal.prototype;
Dog.prototype = new F();
Dog.prototype.constructor = Dog;
alert(Animal.prototype.constructor) */

// 上面方法封装成一个函数使用 extend

function extend(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;//为了可以使用父级的方法和属性
}

/**
 * extend函数，就是YUI库如何实现继承的方法
 * 　　Child.uber = Parent.prototype;
    意思是为子对象设一个uber属性，
    这个属性直接指向父对象的prototype属性。（uber是一个德语词，意思是"向上"、"上一层"。）
    这等于在子对象上打开一条通道，可以直接调用父对象的方法。
    这一行放在这里，只是为了实现继承的完备性，纯属备用性质
 */
/* extend(Dog,Animal);
var dog3 = new Dog("三皇","绿色");
alert(dog3.species);
alert(Animal.prototype.constructor);
alert(Animal.prototype.color);//undefined */

/**
 * 拷贝集成：把父对象的所有属性和方法，拷贝进子对象
 * extend2实现属性拷贝的目的
 */

 function extend2(Child,Parent){
     var p = Parent.prototype;
     var c = Child.prototype;
     for(var i in p){
         c[i]=p[i];
     }
     c.uber = p;
 }

extend2(Dog,Animal);
var dog4 = new Dog("四皇","棕色");
alert(dog4.species)
alert(Animal.prototype.constructor);





