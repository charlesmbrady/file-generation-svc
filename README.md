# MERNolithic_sql

**Overview**

MySQL-Express-React-Node application boilerplate with custom webpack config, docker, CI/CD config, Test-Driven Development, and JWT authentication stored as cookie

- Staging environment: https://mernolithic-staging.herokuapp.com/
- Production environment: https://mernolithic.herokuapp.com/

## Getting started

1. Update project name and urls for github in package.json

   - Name
   - repository: url
   - bugs: url
   - homepage: url

2. Update app name/urls in:

   - ~/cypress.staging.json and ~/cypress.production.json
   - App title in ~/frontend/src/index.html

3. Create a `.env` file with the following info in the /backend directory to be accessed by the server.js and config.js. To run against the local database, you may need to change the LOCAL_USER and LOCAL_PASSWORD names, but you will definitely need to add the local database name to match the one you create locally. If you want to run the app with the stage or production database for some reason, be sure to fill in that information as well.

```
AUTH_SECRET="mysecret"
NODE_ENV=test
FORCE_SYNC=false
PORT=8080

LOCAL_USER="root"
LOCAL_PASSWORD="12345678"
LOCAL_DATABASE_NAME="mernolithic_test"

PROD_DATABASE_USER=
PROD_DATABASE_PASSWORD=
PROD_DATABASE_HOST=
PROD_DATABASE_NAME=

STAGE_DATABASE_USER=
STAGE_DATABASE_PASSWORD=
STAGE_DATABASE_HOST=
STAGE_DATABASE_NAME=
```

4. Run `yarn install` from the project root to install project dependencies

5. `cd backend` and run `yarn install` to install backend server dependencies

6. `cd frontend` and run `yarn install` to install frontend React dependencies

7. Run `initialize.sh` command from the project root to automatically create staging and production Heroku remotes with MySql databases provisioned and deployed.

8. You can run the application locally by running command `yarn start-dev` from the project root which will start the client and server in development mode with hot reloading, accessible in your browser at localhost:8080

9. To setup the CI/CD pipeline, first go to your dashboard on circleci.com. Click "Add Project" and choose the repo for your project. Then select "Build Now" to start building the project. Update the "working_directory" variable at the top of ~/.circleci/config.yml to match your repo name as well

10. to rename your Heroku staging and production apps, use command `heroku apps:rename --remote staging newname`. Insert the desired name of the app instead of "newname" and you can select the "production" remote instead of staging to rename produciton as well. copy and paste the new app names in readme.md

## Deploying to Heroku

- After running the `initialize.sh` script, you will have a Staging and a Production environment already deployed to Heroku. Go to each respective environment and create the AUTH_SECRET environment variable in the "Settings" tab of your app and enter the value you created for your auth secret.

- To deploy whatever is on your git master branch again later, use command `git push staging master` or `git push production master` depending on which environment you want to deploy

With a few steps this deployment process can be automated. First, on your local machine, make sure you have the Heroku CLI installed. then run heroku authorizations:create to generate a longterm token. Go to the project settings in circle ci for this project and add environment variables HEROKU_EMAIL and enter your heroku account email, and HEROKU_TOKEN and paste the token you generated.

Make sure your default git branch for this project is called "development" instead of master**\*\***!!!!

## Testing

You can easily take advantage of Live Test-Driven Development by running the command `yarn dev`. This will automatically start your application and open the cypress test runner. Simply tell cypress which test files to run and whenever you save your code, it will hot reload and rerun the specified tests.

If you set up the CI/CD pipeline with CircleCI, tests reports will be stored there as artifacts for all three (local, staging, production) environments, but you can run tests and get reports at anytime locally by simply running `yarn test:local:test-and-report`, which will launch the app, run tests, and automatically open your test results and coverage reports in your browser.

### Contributing

If you'd like to help improve MERNolithic, please submit a Pull Request with detailed comments!

### Credits

MERNolithic is currently being developed and maintained by charlesmbrady.
