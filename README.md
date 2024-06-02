# Lendbuzz test

## Instructions for installing the project
1. Download the project to your computer.

2. Open the project and install all needed packages by typing in the terminal:
    `npm install`
(it should install cypress and typescript)

## Running the project
### Now you have two ways in order to run the tests:

#### First option (with ui of the browser)
1. After you open the project, type in the terminal: `npm start`
2. The browser should be open, pick the left option, and than pick running on chrome.
3. Pick the file "test_for_todos_cy.ts", it will run all the tests exist in this file.

#### Second option (without ui)
After you open the project, type in the terminal: `npx cypress open`
The tests inside `test_for_todos_cy.ts` file will be run and you should get table result after it finish