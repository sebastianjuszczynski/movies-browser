# Movie Browser

[Live demo] https://sebastianjuszczynski.github.io/movies-browser/

## Requirements

- Node.js **v16.x** (recommended, e.g., 16.20.2)
- npm **v6.x** or newer

The project contains an `.nvmrc` file to easily set the proper Node.js version using `nvm`.

If you don't have `nvm` installed, please manually install Node.js in version **16.x** from the [official Node.js releases page](https://nodejs.org/en/download/releases/).

Note for Windows users:
If you are using nvm-windows, you need to manually run:

nvm use 16

because automatic .nvmrc reading is not supported by nvm-windows.

## Local Setup Instructions

### Clone the repository
git clone https://github.com/sebastianjuszczynski/movies-browser.git

Note:

-If you are using nvm, after cloning the project you can run nvm use to automatically switch to Node.js v16.

-If you don't have nvm, make sure you manually install Node.js v16.x.

## Set Node.js version (important for Windows users!)
nvm use 16

## Install dependencies
npm install --legacy-peer-deps


## Start the development server
npm start

Important Notes:
- Some project dependencies are deprecated but they do not affect the application functionality.

- Using Node.js v16.x is strongly recommended for smooth setup.

- If you encounter issues, ensure you have the correct Node.js version.

## Tech Stack

- React
- React Router
- React Redux
- Redux Toolkit
- Redux Saga
- Axios
- Styled Components
- localStorage

## External sources

 - https://api.themoviedb.org/ (database for entire application)

 ## Features

Application allows to browse movies and actors based on external API, which is implemented with use of Axios.
Entire project is styled with use of Styled Components, and it is also adapted to follow Responsive Web Design Principles.
There is a dropdown search window after typing in input for quicker and more convenient searching process.

## Example usage

![Example](https://github.com/sebastianjuszczynski/movies-browser/blob/main/demo/example.gif)

## Change of theme

![Example theme changing gif](https://github.com/sebastianjuszczynski/movies-browser/blob/main/demo/themeChanging.gif)

## Searching

![Example searching](https://github.com/sebastianjuszczynski/movies-browser/blob/main/demo/searching.gif)

## Sorting

![Example sorting](https://github.com/sebastianjuszczynski/movies-browser/blob/main/demo/sorting.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



