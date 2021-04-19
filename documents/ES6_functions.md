<h1>최신 자바스크립트 문법(ES6, Es11)</h1>
<p>드림코딩 by 엘리 영상 요약</p>

---
<h3>ES6</h3>
- Shorthand property names (객체 초기자)
    - key, value의 이름이 같으면 하나만 작성해도 됨
    - 예문
        - { key : key, name : name } -> { key, name };

<br/>

- Destructuring assignment (구조 분해 할당)
    1. Object
        - 객체명을 생략하고 key 이름을 그대로 변수처럼 사용
        - 예문
            - const { key1, key2 } = object1;
                - object1 내에 있는 key들을 그대로 변수로 쓸 수 있음
            - const { key1: variable1, key2: variable2 } = object1;
                - 다른 변수명으로 각 key의 값을 저장하고 싶을 경우
    2. Array
        - 배열 내 특정 순서의 값을 그대로 변수에 담아 사용
        - 예문
            - const [first, second] = array1;
                - 배열에 있는 값을 순서대로 \[ ]내의 변수에 담음
                - const first = array1[0], second = array1[1]; 

<br/>

- Spread Syntax (전개 구문)
    1. ...array
        - array 배열의 모든 아이템을 낱개로 가져와 복사
        - 배열 내에 참조값이 들어있는 경우 참조값을 복사 (새로운 객체 생성 x)
        - 예문
            - const array = [0, 1, 2];
            - const array1 = [{ key : 'key1' }, { key  : 'key2' }];
            - const arrayCopy = [...array]; // arrayCopy = [0, 1, 2];
            - const arrayCopy1 = [...array1, { key : 'key3' }]; // arrayCopy1 = [{ key : 'key1' }, { key  : 'key2' }, {key : 'key3' }];
    2. ...object
        - object 객체의 모든 key, value를 가져와 복사
        - 객체를 복사했을 때, 동일한 key가 있는 경우 마지막으로 작성된 key 값으로 덮어쓴다
        - 예문
            - const obj1 = { dog : 'maltese' };
            - const obj2 = { dog : 'sarang' };
            - const obj = {...obj1, ...obj2 }; // obj = { dog : 'sarang' };

<br/>

- Default parameters (기본값 매개변수)
    - 인자가 전달되면 전달된 인자를, 전달되지 않으면 설정한 기본값을 사용
    - 예문
        - function test(param = 'value 1') {}
        - param 값이 전달되지 않을 경우, 함수 내에서 param 변수에 'value 1'을 할당하여 실행 

<br/>

- Ternary Operator (삼항 연산자)
    - 삼항 연산자
    - 예문 
        - const A = B ? 'b' : '!b';
        - B 조건이 true면 A = 'b', false면 A = '!b'

<br/>

- Template Literals (템플릿 리터럴)
    - ``로 감싼 문자열
    - 내부에서 ${}를 사용하여 변수값을 할당할 수 있음
    - 예문
        - const userName = '민석'
        - \`${userName}님, 안녕하세요!`
        - 출력 -> 민석님, 안녕하세요!