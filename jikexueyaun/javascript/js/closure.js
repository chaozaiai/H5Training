　/*function f1() {

    var n = 999;

    function f2() {
        alert(n);
    }

    return f2;

}

var result = f1();

result(); // 999
*/
　/*var name = "The Window";

　　var object = {
    name: "My Object",

    getNameFunc: function () {
        return function () {
            return this.name;
        };

    }

　　};

　　alert(object.getNameFunc()());
*/

/* 　var name = "The Window";

　　var object = {
    name: "My Object",

    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        };

    }

　　};

　　alert(object.getNameFunc()()); */
/* var makeCounter =function(){
    var privateCounter =0;
    function changeBy(val){
        privateCounter+=val;
    }
    return{
        increment:function(){
            changeBy(1);
        },
        decrement:function(){
            changeBy(-1);
        },
        value:function(){
            return privateCounter;
        }
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.decrement();
console.log(counter1.value());
console.log(counter2.value()); */

function showHelp(show) {
    document.getElementById("help").innerHTML = show;
}
function setupHelp() {

    var cat1 = new Cat("111","111");
    var cat2 = new Cat("222","222");
    console.log(cat1.getName());
    console.log(cat2.getColor());
    console.log(cat1.sum(1,2));
    console.log(cat2.sum(2,2));
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];
    for (var i = 0; i < helpText.length; i++) {

        //error
        /* 
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
        } */

        /*success 01
         let item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
        showHelp(item.help); */

        //success    02     
      /*   (function () {
            let item = helpText[i];
            document.getElementById(item.id).onfocus = function () {
                showHelp(item.help);
            }
        })(); */

    }

    //SUCCESS 03
    helpText.forEach(function(item){
        document.getElementById(item.id).onfocus = function () {
            showHelp(item.help);
        }
    });

}
setupHelp();