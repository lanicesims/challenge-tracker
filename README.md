This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It uses [Yarn](https://yarnpkg.com/) to manage our packages so you'll need to install that [here](https://yarnpkg.com/lang/en/docs/install/)
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


##.env File

At the root level of the project you need to create your `.env` file so that you can get the proper config object built to connect to Firebase. 
Copy the following and get the proper config variables from the **Development** Firebase Project Dashboard and apply them appropriately

REACT_APP_DEV_API_KEY=XXXXxxxx
REACT_APP_DEV_AUTH_DOMAIN=xxxxXXXX.firebaseapp.com
REACT_APP_DEV_DATABASE_URL=https://xxxXXXX.firebaseio.com
REACT_APP_DEV_PROJECT_ID=xxxxXXXX
REACT_APP_DEV_STORAGE_BUCKET=xxxxXXXX.appspot.com
REACT_APP_DEV_MESSAGING_SENDER_ID=xxxxXXXX
