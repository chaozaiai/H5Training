var obj = {
    foo:function(){console.log(this.bar)},
    bar:1
}
var foo = obj.foo;
var bar =2;
obj.foo();
foo();

/**
 * 引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。
 * 由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。
 * 所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
 * 放在内存里面看this指向的环境Context
 */
