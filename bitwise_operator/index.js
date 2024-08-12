// console.log(1 | 2); //Bitwise OR
// console.log(1 & 2); //Bitwise AND

// Read, Write, Execute
// 000000100
// 000000010
// 000000001

const readPermission=4;
const writePermission=2;
const executePermission=1;

let myPermission=0;
// myPermission= myPermission | readPermission | writePermission //yes
myPermission= myPermission | writePermission //No
console.log(myPermission);

let message=(myPermission & readPermission)? 'Yes' :"No";
console.log(message);



