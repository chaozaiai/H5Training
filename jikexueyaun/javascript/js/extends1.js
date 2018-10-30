// 非构造函数继承
var Chinese = {
    nation: '中国',
    birthPlaces: ['北京', '上海', '香港']
};
var Doctor = {
    career: '医生'
};
/**
 * 1)object方法
 * json格式的发明人Douglas Crockford，提出了一个object()函数
 * 把子对象的prototype属性，指向父对象，从而使得子对象与父对象连在一起
 */
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
var Doctor = object(Chinese);
Doctor.career = '医生';
// alert(Doctor.nation)

/**
 * 2）浅拷贝
 * 把父对象的属性，全部拷贝给子对象，也能实现继承
 * extendCopy()只是拷贝基本类型的数据，我们把这种拷贝叫做"浅拷贝"
 */
/* function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}
var Doctor2 = extendCopy(Chinese);
Doctor2.career = '医生';
Doctor2.birthPlaces.push("沙门");
alert(Doctor2.birthPlaces)
alert(Chinese.birthPlaces) */

/**
 * 3）深拷贝
 * 所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用"浅拷贝"就行了
 * jQuery库使用的就是这种继承方法
 */
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            console.log(p[i])
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
            console.log(p[i])
        }
    }
    return c;
}

// var Doctor3 = deepCopy(Chinese);
// Doctor3.birthPlaces.push("晒们");
// alert(Doctor3.birthPlaces);
// alert(Chinese.birthPlaces);

/**
 * 
浅拷贝

就是将一个对象（或数组）的内存地址『编号』复制给另一个对象（或数组）

深拷贝

增加一个指针，并且申请一个新的内存地址，使这个增加的指针指向这个新的内存，然后将原变量对应内存地址里的值逐个复制过去
 */

 var obj = {
     name:"xu",
     age:12,
     sex:1
 }
 for(var i in obj){
     console.log(i);
     console.log(obj[i]);
 }

