#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let Todo_List : string [] = [];
let Conditions = true;

console.log(chalk.yellow("\n\tWellcome to 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓕𝓪𝓱𝓪𝓭 𝓬𝓸𝓭𝓮𝓻 - Todo_List Application \t\n"));


// while (Conditions) {
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: chalk.magenta("Enter Your New Task\n")
//         }
//     ]);
//     Todo_List.push(addTask.task);
//     console.log(chalk.green.bold(`\n${addTask} Task Added in Todo_List Successfully\n`));
   
//    let addMoreTask = await inquirer.prompt([
//     {
//         name: "addmore",
//         type: "confirm",
//         message: chalk.yellow("Do You want to add more task ?"),
//         default: "False"
//     }
//    ]);
//    Conditions = addMoreTask.addmore

// }
// console.log(chalk.magenta.bold("Your Updated Todo-List :", Todo_List));

let main = async () => {
    while (Conditions) {
        let option = await inquirer.prompt ([
            {
                name: "Choice",
                type: "list",
                message: chalk.magenta("\nSelect an Option You Want Todo\n"),
                choices: ["Add Task","Delete Task","Update Task","View-todo-list","Exit"]
            }
        ]);
        if (option.Choice === "Add Task") {
            await addTask()
        }
        else if (option.Choice === "Delete Task") {
            await deleteTask()
        }
        else if (option.Choice === "Update Task" ) {
            await update_Task();

        }
        else if (option.Choice === "View-todo-list") {
            await viewtask()
        }
        else if (option.Choice === "Exit") {
            Conditions = (false);
        }
            
        
    }
}

//Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt ([
        {
            name: "Task",
            type: "input",
            message: chalk.blue("Enter Your New Task")
        }
    ]);
    Todo_List.push(newTask.Task)
    console.log(chalk.green(`\n${newTask.Task} Task Added Successfully in Todo-List`))
}

// Function to view all Todo-List Task
let viewtask = () => {
    console.log("\n Your Todo-List: \n");
    Todo_List.forEach ((task , index) => {
        console.log(chalk.yellow(`${index}: ${task}`));
    })
}

//Function to delete a task from the list
let deleteTask = async () => {
    await viewtask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.blue("\nEnter the 'index no.' of the task you want to delete:"),
        }
    ]);
    let deleted_task = Todo_List.splice(taskIndex.index , 1);
    console.log(chalk.green(`\n ${deleted_task} this task has been deleted Successfully from your Todo_List\n`))
}

    // Function to update a task
    let update_Task = async () => {
    await viewtask 
    let update_Task_index = await inquirer.prompt ([
        {
            name:"index",
            type: "number",
            message: "Enter the 'index no' of the task you want update:"
        },
    {
        name: "new_task",
        type: "input",
        message: "Now Enter New task name"
    }
    ]);
    Todo_List [update_Task_index.index] = update_Task_index.new_task
    console.log(`\n Task at 'index no' ${update_Task_index.index} Updated Successfully [For Updated list Check option "View Todo-list"]`)
}

main();
















