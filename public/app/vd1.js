
ReactDOM.render(
    <h1>CHUNG</h1>,
    document.getElementById('root')
);

// function Person(name, age){
//     this.age = age;
//     this.name = name;
// }

// var p1 = new Person('ChungN', 3);

class Person {
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
    sayHello(){
        return 'Xin chao toi la ' + this.name + ', nam nay tui ' + this.name + ' tuoi';
    }
}

class Child extends Person{
    constructor(name, age,hobby){
        super(name, age);
        this.hobby = hobby;
    }

    sayHello(){
        return 'Xin chao en la ' + this.name + ', nam nay em ' + this.name + ' tuoi . So thich cua em la ' + this.hobby;
    }
};
// var p1 = new Person('ChungN', 3);
// console.log(p1.sayHello());
var p2 = new Person('HanhD', 2, "Choi boi");
console.log(p2.sayHello());