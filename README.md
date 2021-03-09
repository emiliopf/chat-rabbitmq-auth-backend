<p align="center">

  <h3 align="center">RABBITMQ-AUTH-BACKEND - <a href="https://github.com/emiliopf/chat-app">CHAT APP</a></h3>
  <p align="center">
    Rabbitmq-auth-backend microservice.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#set-up">Set Up</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br />


## About The Project


Rabbitmq Auth Backend microservice is responsible of auth all operations over RabbitMQ. The brokes must have [rabbitmq_auth_backend_http](https://github.com/rabbitmq/rabbitmq-server/tree/master/deps/rabbitmq_auth_backend_http) enabled


## Gettiing Started

### Prerequisites

* [Node](https://nodejs.org/en/) v15.11 or higher.
* [RabbitMQ](https://www.rabbitmq.com/)

### Set Up

1. Add [jwt](/src/config/jwt.ts) environment variables.
2. Add [app](/src/config/app.ts) environment variables.
3. Launch `npm run start`

## Build with

* [NestJS](https://nestjs.com/)
## License

[MIT licensed](LICENSE).
