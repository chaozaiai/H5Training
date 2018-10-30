function Cat(name,color){
    this.name = name,
    this.color = color
}
Cat.prototype.type="貓科动物";
Cat.prototype.getName =function(){
    return this.name;
}
Cat.prototype.getColor =function(){
    return this.color;
}
Cat.prototype.eat = function(food){
    console.log(food);
};
Cat.prototype.sum = function(a,b){
    return a+b;
}
