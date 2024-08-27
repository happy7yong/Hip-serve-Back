
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
---------------------------------------------
## 처음 git clone 이후 개발환경 기본 셋팅 만들기
1. .env 파일 생성
   파일안에 복붙하기

DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=1111
DB_DATABASE=hip

JWT_SECRET=mysecretkeyf

2. $ npm install
   Back-end 폴더 안에 node_modules 다운받기

3. Database 생성

User : root
password : 1234 (본인 컴퓨터의 DB 비번)
Database : 백엔드에서 지정한 DB 이름 