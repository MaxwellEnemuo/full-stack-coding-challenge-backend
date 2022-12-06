## Extra questions

We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

## What are some edge cases you would take care of before shipping this to production?

- - Write unit and integration tests before shipping
- - Document APIs using swagger
- - Secure the our APIs using JWT
- - Improve the search by making it case sensitive
- - Use monitoring and logging to spot errors

## How would you scale this to handle high amounts of traffic?

- - Optimise database queries
- - Implement rate limiting
- - Use a NoSQL database like MongoDB for faster queries. It can be scaled horizontally as well.
- - Use caching (e.g Redis cache) to reduce database lookup

## What's important for you to work well in a fully remote team?

- - Easy and fluid way of communicating
- - Supportive and approachable team members

## Deliverables

- Invite [@pieterbeulque](https://github.com/pieterbeulque) and [@umartayyab](https://github.com/umartayyab) to a GitHub repo with your completed project
- A video of your screen recording (unlisted YouTube video, Loom, … anything works)
- Answers to the questions above can be either in the video or written down in the README of your repo

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn start
```

The app should be available via [http://localhost:3000](http://localhost:3000).
