//Logical AND (&&)
// console.log(true && true);
// console.log(false && true);
let highIncome=false;
let goodCreditScore=false;
// let eligibleForLoan= highIncome && goodCreditScore;
let eligibleForLoan= highIncome || goodCreditScore;
console.log('Eligible',eligibleForLoan);

let applicationRefused=!eligibleForLoan;
console.log('Application Refused', applicationRefused);






