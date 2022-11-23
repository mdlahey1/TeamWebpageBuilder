<h1 align="center">Team Webpage Builder Using Node.js</h1>
   
## Description

A node.js application that uses user input from inquirer to populate a index.html file displaying members of a development team. The index.html file is created in the dist directory. 
  
## User Story
  
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
  
## Acceptance Criteria
  
``` 
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee id, email address, and office number
WHEN I enter the team manager’s name, employee id, email address, and office number
THEN I am presented with a menu with the option to add an engineer, an intern, or finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, id, email, and GitHub username and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, id, email, and school and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application and the HTML is generated
```
  
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Walkthrough Video](#walkthrough-video)
- [GitHub Repository](#github-repository)

## Installation
  
`npm init`
  
`npm install inquirer`

`npm install jest --save-dev`
  
## Usage
  
Run the following command at the root of your project and answer the prompted questions:
  
`node index.js`

## Testing

`npm install jest --save-dev`

Testing is done with jest and contains testing for all four Classes: `Employee`, `Manager`, `Engineer` and `Intern`.

## Walkthrough Video
https://drive.google.com/file/d/1UCRmJLC_AzFRa6_53nzIPWogDGtJNDe2/view

## GitHub Repository
https://github.com/mdlahey1/README_Generator
