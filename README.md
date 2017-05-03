# Create-Redux-App

This project is a boilerplate for a React/Redux, and has been bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Usage / Deployment

- Clone the repository

  `git clone https://github.com/kevinkiklee/create-redux-app.git`

- Install dependencies

  `npm install`

- Run the server on localhost

  `npm start`

- Deploy to Heroku (Replace `$APP_NAME` with your app name)

  ```
  git init
  heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
  git add .
  git commit -m "Initial Commit"
  git push heroku master
  heroku open
  ```
  For more information about the Heroku create-react-app buildpack, please visit [Here](https://github.com/mars/create-react-app-buildpack).

## Implementation

- react
- react-dom
- react-redux
- redux
- redux-logger
- redux-thunk
- styled-components

## Structure
Many sample files have been included for easy modification.

- `/src`
  - contains `index.js` entry file

- `/src/actions`
  - for Redux actions files
  - a sample `dataActions` has been included

- `/src/assets`
  - contains assets, such as images
  - a sample SVG logo has been included

- `/src/components`
  - contains React `App` and `Root`components
  - sample `Data`, `DataContainer` and `Header` components have been included

- `/src/reducers`
  - contains React `RootReducer`
  - a sample `DataReducer` has been included

- `/src/store`
  - contains Redux `store`

- `/src/styles`
  - contains `reset.css`

- `/src/utils`
  - contains a sample `fetchUtil` for fetching a JSON
  - contains a sample `selectors`

## Notes

- `styled-components` is used for CSS management.  More information can be found [Here](https://github.com/styled-components/styled-components)
