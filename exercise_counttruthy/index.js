// const isActive=true; 
// const name="Mosh"; //Truthy (true)
// const name=""; //Falsy (false)

// if(name)
    // console.log("Hello");
const array=['',null,2,3];
console.log(countTruthy(array));

   
function countTruthy(array){
    let count=0;
    for(let value of array)
        if(value)
        count++;
        return count;

}