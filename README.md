# Getting Started with azure static app with azure b2c

It's a sample react project which uses azure b2c login.
Auth configuration:
    authconfig.js file under src folder has all the details related to azureb2c endpoint information.
    App registration for this project uses authorization grant with PKCE with the help of msal.js.
    In case of azure AD, the authority url will be "https://login.microsoftonline.com/{tenant}/v2.0"
    Discovery document path: /.well-known/openid-configuration.


## Learnings

### sed
    There is difference between single and double quotes while executing sed command. Environment variable should be used in double quotes.
    If the variable is broken we wil get error while execution command

### Git hub actions
    Use run | step to run commands in multiple lime
    Enviroment variable CI will be set to true by default. So if the app has any warning it will be treated as error and build fail.
    If we disable the CI. Then git action wont deploy production build. It will deply dev build.

### Azure pipeline
    It's easy to configure.
    Login into dev.azure. Navigate to your project.
    Click pipeline to create pipeline.
    1. Connect to source version control
    2. Select repo
    3. configure the yaml file. We can use the management token taken from azure static web site to deploy the code in azure.
    4. save
    
### act
    It's a utility used to run git action workflow in local to identify the build issues in local itself.
    <https://github.com/nektos/act>
    We can have my.env and my.secret files to pass environment variables.
    This will use docker to run the build locally. 