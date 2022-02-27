const inquirer = require('inquirer');

const overwrite = {
    type: 'list',
    message:
        '🚨 The Readme to Rule them All is about to rule (overwrite) your currente README.md. Do you wish to proceed? ',
    name: 'takeOverReadme',
    choices: [
        {
            name: 'No',
            value: false
        },
        {
            name: 'Yes',
            value: true
        }
    ]
}
module.exports = async () =>{
    const {takeOverReadme} = await inquirer.prompt([question])
    return takeOverReadme
}