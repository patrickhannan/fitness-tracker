# fitness-tracker

## Description 

This project is a web app that will allow the user to keep track of their workouts while they are in progress. The user can create workouts on the app which will be saved, and then they can tell the app when the complete the workout, with the decision to continue or stop their workout following each workout.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
The user does not need to install anything to use this application if they choose to use the deployed Heruko application. This can be accessed [here](https://immense-bastion-96583.herokuapp.com/).

However, if the user wants to locally host the app, they must download the files from this repository. Those can be accessed [here](https://github.com/patrickhannan/fitness-tracker).

Once the user downloads these files, they must open the files in VS Code. In VS Code, the user will run a new terminal. In the terminal, the user will change their working directory to the current directory. 

Run "npm install" to install the app.


## Usage 
*If the user uses the app locally, run the command npm start in the terminal, then open localhost:3000 in a web browser.* 

Once in the app, the user will be placed on the home page, with the option to create a new workout. When creating a new workout, the user is ask if it is cardio or resistance. Then, a form will appear asking the user to fill out a few details about the workout. Once filled out, the user will choose to add the workout, or complete it right then and there. When the user adds the workout, they can fill out another workout form. When the user completes the workout, they see a page displaying their last workout, with the options to continue workout or add a new workout.

Below is a image of how the add workout form will look.
![Example workout](./public/img/workout.png)


## Credits

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Mongoose](https://www.npmjs.com/package/mongoose) 


## License

MIT License

Copyright (c) 2020 Patrick Hannan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.