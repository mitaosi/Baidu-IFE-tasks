
// 'Anoymous' 是默认参数，如果调用构造器时没参数则使用默认参数
class Person {
    constructor(name = 'Anoymous',age = 26){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. My name is ${this.name},I am ${this.age} old`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomelocation(){
        return !!this.homeLocation;
    }
    getGretting(){
        let gretting = super.getGretting();
    // if(this.homelocaltion) is a boolean    
        if(this.homeLocation){
            gretting += `I'm visiting from ${this.homeLocation}`;
        }
        return gretting;
    }
}


const me = new Student('Jim Lin',33);
console.log(me.getGretting());
console.log(me.hasMajor());

const other = new Student();
console.log(other.getGretting());
console.log(me.hasMajor());    