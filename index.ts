import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns" 


const response = await inquirer.prompt({
    name: "userInput",
    type  : "number",
    message : "Enter the amount in seconds:",
    validate : function(input){
        if(isNaN(input)){
            return "Please enter the correct input"
        } else if(input > 60){
            return "Enter second up to 60"
        }else{
            return true;
        }

    }
})

let input = response.userInput;

function startTimer(value : number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    const IntervalTime = new Date(intTime);
     setInterval((()=>{
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(IntervalTime,currentTime);
        if(timeDiff <= 0){
            console.log("Timer is expired");
            process.exit();
        }
        const min = Math.floor(( timeDiff % (3600*24))/3600);
        const sec = Math.floor(( timeDiff % 60));
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
        
     }),1000)
}

startTimer(input);