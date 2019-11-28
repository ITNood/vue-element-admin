let firstName: string = "jhon"
function greeter(person:string) {
    return "Hello, "+ person
}
let user = "john"
greeter(user)

class Greeter{
    greeting: string;
    constructor(message: string) {
        this.greeting=message
    }
    greet() {
        return "Hello, "+this.greeting
    }
}
let greeter2 = new Greeter("world")


//继承
class Animal{
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`)
    }
}
class Dog extends Animal{
    bark() {
        console.log('Woof!')
    }
}
const dog = new Dog
dog.bark()//Woof
dog.move(10)//Woof! Animal moved 10m.
dog.bark()//Woof

class Animal2{
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved %{distanceInMeters}m.`)
    }
}
class Snake extends Animal2{
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slitthering...");
        super.move(distanceInMeters)
    }
}
class Horse extends Animal2{
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...")
        super.move(distanceInMeters)
    }
}
let sam = new Snake("Sammy the Python")
let tom: Animal = new Horse("Tommy the Palomino")

sam.move()//Sammy the Python moved 5m.
tom.move(34)//Tommy the Palomino moved 34m.

//public
class Animal3{
    public name: string;
    public constructor(theName: string) {
        this.name=theName
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}
