# File Generation SVC

- Staging environment: https://file-generations-svc-staging.herokuapp.com/
- Production environment: https://file-generations-svc.herokuapp.com/

**Overview**

This is a microservice for the Mockdat system. This particular service will be used to build a scenario to send to the Data Generation Service, then use the data from that to assemble a .csv file and then other file types.

## Getting started

7. Run `initialize.sh` command from the project root to automatically create staging and production Heroku remotes with MySql databases provisioned and deployed.

8. To setup the CI/CD pipeline, first go to your dashboard on circleci.com. Click "Add Project" and choose the repo for your project. Then select "Build Now" to start building the project. Update the "working_directory" variable at the top of ~/.circleci/config.yml to match your repo name as well

## Deploying to Heroku

- To deploy whatever is on your git master branch again later, use command `git push staging master` or `git push production master` depending on which environment you want to deploy

## Testing

You can easily take advantage of Live Test-Driven Development by running the command `yarn dev`. This will automatically start your application and open the cypress test runner. Simply tell cypress which test files to run and whenever you save your code, it will hot reload and rerun the specified tests.

If you set up the CI/CD pipeline with CircleCI, tests reports will be stored there as artifacts for all three (local, staging, production) environments, but you can run tests and get reports at anytime locally by simply running `yarn test:local:test-and-report`, which will launch the app, run tests, and automatically open your test results and coverage reports in your browser.

### Contributing

If you'd like to help improve File-Generation-Service, please submit a Pull Request with detailed comments!

### Credits

File-Generation-Service is currently being developed and maintained by charlesmbrady.
