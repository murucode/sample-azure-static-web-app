# Getting Started with azure static app with azure b2c

It's a sample react project which uses azure b2c login.
Auth configuration:
    authconfig.js file under src folder has all the details related to azureb2c endpoint information.
    App registration for this project uses authorization grant with PKCE with the help of msal.js.
    In case of azure AD, the authority url will be "https://login.microsoftonline.com/{tenant}/v2.0"
    Discovery document path: /.well-known/openid-configuration.

## Git hub workflow

The project use git hub workflow actions to deploy the code in azure static web app.
Note: The configuration CI: '' in the workflow file wont treat warning as error.

act utility is used to run the workflow locally to identify any deployement issue. <https://github.com/nektos/act>
my.secret file is used to mimic git hub secrets while testing the git hub workflow in local machine.
