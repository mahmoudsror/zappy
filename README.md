# Zappy

Zappy is a tool that make it easy to get tweets for specific twitter account through Slack. Just in your workspace write message on any channel includes "go " keyword and it will get all tweets for your twitter account .

## Installation
You can run zappy in this following simple steps :

```sh
$ git clone  https://github.com/mahmoudsror/zappy.git

$ cd zappy/

$ cp backend/Dockerfile.dev backend/Dockerfile
$ cp .env.dev .env

$ docker-compose up -d --build

```

Now you should have zappy (backend - frontend - Database ) containers up 

## Usage

, It is time to subscribe to slack workspace events , I created account for you to test that
Let's start :
#### Login to slack workspace :

Go to this URL : [zappyteamworkspace](https://zappyteamworkspace.slack.com/)

Username : zappdemo1234@gmail.com

Password : 123456zappy

Well , Now you joined your zappyTeam Workspace .

It's time to update our event subscription URL 

If you are not linux user , download ngrok from the follwing : [ngrok](https://dl.equinox.io/ngrok/ngrok/stable)

If you are using Linux , then run the following command in terminal (in zappy directoy) to get https url that you add it to as callback for event subscription :
```sh
$ ./ngrok http 3000
```
Copy the generated URl with https:// and the follwed by /slack/event

ex : https://dedc002a.ngrok.io/slack/event

Go to this url : https://api.slack.com/apps/AJJGKJ03B/event-subscriptions

Paste url that formatted like above example and click change . After you click chnage , that will send post request to /slack/event endpoint with challenge and our api will reply with that challenge 

POST Request like the following :
```
{
  "token": "dqm8e1rlvrYmcKrDEfMvEfMM",
  "challenge": "r9toFboJpIcM1iix1C1dvidubJbjKyVoKZFhyiro2D9X2ikF2Ogb",
  "type":"url_verification"
}
```

Then it should be verified , click save changes 

Now when you write message on any channel includes "go" word , that will call twitter to get tweets for account

To see Tweets goto the following URL : http://localhost:4200


## Testing 

To run tests follow below steps :
```sh

$ cd zappy/

$ cp backend/Dockerfile.test backend/Dockerfile

$ cp .env.test .env

$ docker-compose up -d --build

$ docker-compose exec backend sh -c "npm run test"

```
