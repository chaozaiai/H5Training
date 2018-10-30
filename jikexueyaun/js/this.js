/*function f2(){
	return eval('this');
	// return this;
}
var o3 = {
	name:'stone',
	f:function(){
		return eval(this.name);
		// return this.name;
	}
}
console.log(f2());
console.log(o3.f());*/


/*function f9(){
	console.log(this.a);
}

var f10 = f9.bind({a:0});
// f10();
var o5 = {
	a:2,
	b:f9,
	c:f10
}
o5.b();
o5.c();*/

/*(function() {

  this.scope = "local";

})();

console.log(window.scope);*/

/*var scope = "global";　　

var obj = {　　　　

  scope: "local",

  getScope: function() {　　　　　　

    return function() {　　　　　　　　

      return this.scope;　　　　　　

    };　　　　

  }　　

};　　

console.log(obj.getScope()());*/

/*var scope = "global";　　

var obj = {　　　　

  scope: "local",

  getScope: function() {　　　　　　

    return function() {　　　　　　　　

      return this.scope;　　　　　　

    };　　　　

  }　　

};　　

console.log(obj.getScope()());*/
/*
function a(x) {

debugger;
  this.x = x;

  return this;

};

var x = a(5);

var y = a(6);

console.log(x.x); // ???

console.log(y.x); // ???*/

/*function obj() {

  this.scope = "local";

  return "global";

}

var obj = new obj();

console.log(obj); */

scope = "global";

var obj1 = {

  scope: "local1",

  getScope: function() {

    console.log(this.scope)

  }

};

var obj2 = {

  scope: "local2"

};

(obj2.getScope = obj1.getScope)();