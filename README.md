# Timeline

## Local development

Prerequisites: NPM, Postgres

Installation:
```
git clone http://github.com/prendradjaja/timeline
cd timeline

# Install dependencies
npm install

# Create a database called "timeline" (Make sure Postgres is running!)
psql -c "CREATE DATABASE timeline";

# Add some data to the local database
psql timeline < initialize-database.sql

# Run the server
node server.js
```

Then visit localhost:8000

You can also run the server with `npx nodemon` to restart on changes or `heroku local` to run via the Heroku CLI.

## Deploying to Heroku

Prerequisites: Heroku CLI

```
git clone http://github.com/prendradjaja/timeline
cd timeline

# Create a Heroku app
heroku create

# Add a database
heroku addons:create heroku-postgresql:hobby-dev

# Add some data to the remote database
heroku pg:psql < initialize-database.sql

# Deploy
git push heroku master

# Open in browser
heroku open
```
