/*var name = "name";
var num= 30;
var fala = true;
var data = null;
var undeff;

var name = new String("name");
var num = new Number(30);
var fala = new Boolean(true);

var onj = new Object();
var obj2 = {a:1,b:3}
var obj3 = Object.create();

var myObj = new MyObj();
p'
var arr1 = new Array();
var arr2 = [1,2,3,4,5];*/


var scope = 'global';

function checkScope(flag) {

  if (flag) {

    var scope = 'local';

  }

  return scope;

}

// console.log(checkScope(true));  // ???

console.log(checkScope(false));

var add = function(x) {

  var sum = 0;

  var fn = function(x) {

    if (x) {

      sum = sum + x;
      console.log(sum);
      return fn;

    } else {
    console.log(sum);
      return sum;

    }

  }

  return fn;

}

console.log(add(1);