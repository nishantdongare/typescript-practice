let a = 'Hello World'


let z;
z = 42
z = "Hi"

//Array
let b = []
b.push(23)


//Tuples

let bb:[number,string,string,number];

bb = [3,3,3,3]

//Object
let obj:{a:string;b:number}
obj = {a:'asdfasf',b:2,c:'3w3'}

obj = {a:'asdfasf',b:2,c:'3w3'}
// Interfaces
interface Address {
    name:string,
    phonenumber?: number
}

let myAddress:Address= {name:'asdf',phonenumber:33}

//Intersection and union
interface AddressWithPhone {
    name: string,
    phonenumber: number
}

interface AddressWithPincode {
    name: string,
    pincode: number
}

let newOrAddress: AddressWithPhone | AddressWithPincode
newOrAddress = {name:'Hi',pincode:3333}

let newAndAddress: AddressWithPhone & AddressWithPincode
newAndAddress= {name:'Hi',pincode:3332,phonenumber:33232}
