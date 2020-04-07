/**
 * HW 1 focuses on variables and control structures
 *
 * @category    HW 1
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Lester Lipinsky
 * @date        2020.01.30
 * @link
 * @grade       10 / 10
 */

let myName = "Larry Pytleski";
let myMajor = "Web Development";
let funFact = "I play guitar";
var email = "lawrencepytleski2@yahoo.com";

console.log("My Name:", myName);
console.log("My Major:", myMajor);
console.log("Fun Fact About Me:", funFact);
console.log("Email:", email);

const myClass = 'CIS-172';

console.log("I am using JS in", myClass ,".");

let p;
for(p = 1; p <= 15; p++ )
{
    console.log("For_Loop:", p);
}

let count = 15;
while (count > 1)
{
    count--;
    console.log("While_Loop:", count);
}

if (myName == "Mr. Banks")
{
    console.log("Welcome back Professor!");
}
else
{
    console.log("Welcome to", myClass, ",", myName, ".", myClass, "should be very beneficial towards your degree in", myMajor, ".");
}