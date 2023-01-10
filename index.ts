#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    });
}
async function welcome(){
    let title=chalkAnimation.rainbow(`
     _____________________
    |  _________________  |
    | |CAL            0.| |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    
    `);
    await sleep();
    title.stop();
}
await welcome();

async function Question(){
const ans=await inquirer.prompt([
    {
        type:"list",
        name:'operator',
        message:"Which Operation do you want to perform?\n",
        choices:['Addition','Substraction','Multiplication','Division']
    },
    {
        type:"number",
        name:"num1",
        message:"Enter 1st Number: "
    },
    {
        type:"number",
        name:"num2",
        message:"Enter 2nd Number: "
    }
]);
    if(ans.operator=='Addition'){
        console.log(chalk.greenBright(`Answer: ${ans.num1+ans.num2}`))
    }
    else if(ans.operator=='Substraction'){
        console.log(chalk.greenBright(`Answer: ${ans.num1-ans.num2}`))
    }
    else if(ans.operator=='Multiplication'){
        console.log(chalk.greenBright(`Answer: ${ans.num1*ans.num2}`))
    }
    else if(ans.operator=='Division'){
        console.log(chalk.greenBright(`Answer: ${ans.num1/ans.num2}`))
    }
   
}


async function repeat(){
    do{
        await Question();
       var reset= await inquirer.prompt({
            type:'input',
            name:'restart',
            message:"Do you want to Calculate again? Press y for yes."
        })
    }
    while(reset.restart=='y' || reset.restart=='Y')
}

repeat();