### Setup

# How to Docs for REST_RANT DEPLOY LESSON

[How to prepare your Code To Deploy as a Mono App](https://docs.google.com/document/d/1TTCSyoo8-dBIQBmyw2ioXaqK6EArBoSf/edit?usp=sharing&ouid=102831465938890335297&rtpof=true&sd=true)

[How to create yourDatabase Local for Rest Rant ](https://docs.google.com/document/d/1C0ZF4c62G-0fiP3lw0ZBhFY4YDpQlDYD/edit?usp=sharing&ouid=102831465938890335297&rtpof=true&sd=true)

[How to deploy a AWS Beanstalk APP](https://docs.google.com/document/d/18XGg5USjCjbw0YMyOHSIXzQXsj1Z9xOr_WpxTn-ZD0o/edit?usp=sharing)

#####################################################

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

**\*\*** "CreateDB for Rest_Rant Deploy" **\*\*\***
Next you will need a Postgres database to connect to.
Follow instructions in the document inked above

Next create a `.env` file inside of `backend`.
It will need to contain the following environment variables
(change the values to match the DB and user/passowrd you created on your local PGADMIN server)

```
NODE_ENV=development

# dev settings
PORT=5000
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=Rest_Rant
DB_PORT=5432


# These Varibles must me entered on the deployed side once you have a production database
# To test the app local as a monot app set these to the same settings as dev and run you rlocal testing command
#NODE_ENV=production PORT=8000 node index.js
RDS_USERNAME= DB user name
RDS_PASSWORD= DB password
RDS_DB_NAME= DB name
RDS_HOSTNAME= DB Host Address
RDS_PORT= DB PORT
```

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

### API (http://localhost:5000)

| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /places                              | Places index page                         |
| POST   | /places                              | Create new place                          |
| GET    | /places/:placeId                     | Details about a particular place          |
| PUT    | /places/:placeId                     | Update a particular place                 |
| DELETE | /places/:placeId                     | Delete a particular place                 |
| POST   | /places/:placeId/comments            | Create a comment about a particular place |
| DELETE | /places/:placeId/comments/:commentId | Delete a comment about a particular place |

### App (http://localhost:3000)

| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /places               | `places/PlaceIndex.js`    | List of places                                                                  |
| /places/new           | `places/NewPlaceForm.js`  | Form for creating a new place                                                   |
| /places/:placeId      | `places/PlaceDetails.js`  | Details of a place, including it's comments, and a form to create a new comment |
| /places/:placeId/edit | `places/EditPlaceForm.js` | Form for editing a place                                                        |

seeders for DB
Create DB, tables and Columns
npm i
"dependencies": {
"dotenv": "^16.0.3",
"mysql2": "^3.1.0",
"pg": "^8.9.0",
"sequelize": "^6.28.0"
}
}
command: npx sequelize-cli db:seed:all

front end---
npm remove react-scripts
npm i react-scripts (to bring it to version 5)
