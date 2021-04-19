<h1>최신 자바스크립트 문법(ES6, Es11)</h1>
<p>드림코딩 by 엘리 영상 요약</p>

---
<h3>ES11</h3>
- Optional Chaining (옵셔널 체이닝)
    - A?.B 형태로 사용하여, 연산자 좌측 항이 존재할 때만 우측 항에 접근
    - 존재유무가 불확실한 객체 내 속성에 접근할 때, && 연산자 또는 중첩된 삼항연산자를 사용하여 객체 내 상위 속성의 유무를 하나하나 확인하던 것 대신 사용
    - 예문
        - var obj = { { param : { param1 : { param2 : value }} }}
        - 기존 : if (obj && obj.param && obj.param.param1 && obj.param.param1.param2) { const value = obj.param.param1.param2 };
        - Optional Chaining 사용 : if (obj.param?.param1?param2) { const value = obj.param.param1.param2 };

<br/>

- Nullish Coalescing Operator (Null 병합 연산자)
    - 자바스크립트에서 false : false, '', 0,  NaN, null, undefined 모두 해당
    - A || B 사용 시 문제 발생 가능 :  A가 0이거나 NaN, ''일 때도 B가 반환
        - 0, NaN, '' 값을 유효한 값으로 처리해야 할 경우 ||를 사용한 로직은 문제 발생 위험
    - A ?? B
        - A가 null 또는 undefined로 평가될 때만 B 반환
    - 명확한 값으로 null 또는 undefined를 처리할 때 사용
    - 예문
        - const message = variable1 ?? 'variable1 is missing';
        - variable1 값이 null 또는 undefined이면 message = 'variable1 is missing', variable1에 값이 할당되어 있다면 message = variable1;
