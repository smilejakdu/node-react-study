# lesson 1

## start

__app.js__

```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.write('hello node1')
    res.write('hello node2')
    res.write('hello node3')
    res.write('hello node4')

    res.end('hello world');
});
server.listen(3065, () => {
    console.log('server running')
});
```

이렇게만 해도 서버는 돌아가게 된다 .

하지만 좀더 수월하게 돌릴수있게 제공해주는 프로임워크 express 를 사용하게 된다.

## express start

> npm i express

express 도 내부적으로 http 를 사요하기 때문에 , 서버를 돌릴 수가 있는것이다. node 자체가 서버가 아니라 node 에서 제공하는 http 모듈이 서버이기때문이다 .

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello express')
});

app.listen(3065, () => {
    console.log('server running');
});
```

하고 서버를 실행해보면 ,

![image](../one.png)


## api 적용

```javascript

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello express')
});

app.get('/api', (req, res) => {
    res.send('hello api');
})

app.get('/api/posts', (req, res) => {
    res.json([
        {id: 1, content: 'hello'},
        {id: 2, content: 'hello2'},
        {id: 3, content: 'hello3'},
    ]);
});

app.post('/api/posts', (req, res) => {
    res.json({id: 1, content: 'hello'});
});

app.delete('/api/post', (req, res) => {

});

app.listen(3065, () => {
    console.log('server running');
});
```

하고 다시 제대로 실행이 되는지 확인을 한다.



![image](../two.png)

### REST API 종류

- app.get -> 가져오다
- app.post -> 생성하다
- app.put -> 전체 수정
- app.delete -> 제거
- app.patch -> 부분 수정
- app.options -> 찔러보기
- app.head -> 헤더만 가져오기 