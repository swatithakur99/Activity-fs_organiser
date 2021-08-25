let helpObj = require("./activity/help");
let treeObj = require("./activity/tree");
let organizeObj = require("./activity/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "tree":
       
        treeObj.treeFn(inputArr[1]);
        break;
        
    case "organize":
        organizeObj.organizefxn(inputArr[1])
        break;
    case "help":
        helpObj.helpfxn();
        break;
    default:
        console.log(" kindly enter the correct commad");
        break;
}

            