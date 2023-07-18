## 당신의 문화 유산 답사기 (UHR : Ur Heritage Record)

아름다운 우리 문화유산 이야기, 문화재에 대한 당신만의 답사기를 만들어가세요.

---

## 팀구성

| 임지영 | 최윤서 | 노진철 | 유지완 | 전수정 |

---

## 깃 플로우 전략

- main
- dev
- feat
  - main
  - list
  - detail
  - comment
  - common

---

## 커밋 컨벤션

- Feat: 새로운 기능 추가
- Fix: 버그 수정
- Docs: 문서 변경
- Style: 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
- Refactor: 코드 리팩토링 (변수명 변경 등)
- Chore: 설정 변경 등 기타 변경사항
- Design: HTML, CSS 등 사용자 UI 디자인 변경

---

## 코드 컨벤션

### 폴더, 파일명

컴포넌트 파일명은 파스칼 케이스(PascalCase)를 사용한다.

```javascript
MainComponent.jsx;
Route.jsx;
```

컴포넌트를 제외한 폴더, 파일명은 카멜 케이스(camelCase)를 사용한다.

```javascript
components;
modules;
configStore.js;
```

### 함수

함수명은 카멜 케이스(camelCase)를 원칙으로 한다.

```javascript
function nameOfFunction() {
  // ...some logic
}
```

### 변수명

상수는 모두 대문자로 쓰며 띄어쓰기는 \_로 처리하며, 객체타입의 경우 카멜 케이스를 적용한다.

```javascript
const SOME_VALUE = 1;

const people = {
  name: '김자바',
  age: '26',
};
```

### 클래스명

클래스명은 케밥 케이스(kebab-case)를 원칙으로 한다.

```html
<h1 class="main-title">오늘 메뉴 추천</h1>
```

---

### 스타일 코드 (styled-components)

최상위 컴포넌트

```javascript
'컴포넌트명'Layout
```

각 태그들의 컴포넌트 명

```javascript
div : '컴포넌트명'Box
section : '컴포넌트명'Section
ul : '컴포넌트명'List
li : '컴포넌트명'Item
p : '컴포넌트명'Paragraph
span : '컴포넌트명'Span
```

컴포넌트들을 묶어주는 컴포넌트 명

```javascript
'컴포넌트명'Row/Col
```

스타일 코드의 순서는 아래와 같이 작성한다.

```css
.sample {
  /* position 관련 */
  position: absolute;
  top: 0;
  left: 0;

  /* display 관련 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* size 관련 */
  width: auto;
  height: auto;

  /* margin, padding */
  margin: 0 auto;
  padding: 12px;

  /* background 관련 */
  background-color: #fff;

  /* border 관련 */
  border: 1px solid #fff;
  border-radius: 12px;

  /* font 관련 */
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  /* animation 관련 */
  transform: translate(10px, 100%);
  transition: 300ms;
}
```
