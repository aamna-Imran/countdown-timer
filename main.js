import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let user = await inquirer.prompt({
    type: "number",
    name: "input",
    message: "please Enter the no# of seconds : ",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "seconds must be in 60";
        }
        else {
            return true;
        }
    },
});
function startTime(val) {
    const time = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(time);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(user.input);
