## 당신의 문화 유산 답사기 (UHR : Ur Heritage Record)

아름다운 우리 문화유산 이야기, 문화재에 대한 당신만의 답사기를 만들어가세요.

---

## 팀구성

| 임지영 | 최윤서 | 노진철 | 유지완 | 전수정 |

---
## 시연 영상
[유튜브 링크](https://www.youtube.com/watch?v=DuDZBfDEnB8)


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
  - header
  - footer

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

## API 명세
| Feature 	| Method 	| URL 	| Query String 	| Request Body 	| Response 	| 비고 	|
|---	|---	|---	|---	|---	|---	|---	|
| 목록 조회 	| GET 	| http://www.cha.go.kr/<br>cha/SearchKindOpenapiList.do 	| ?:ccbaKdcd&:<br>ccbaCtcd&:<br>ccbaMnm1&:<br>pageIndex 	|  	| {"result": <br>{"ccbaKdcd": <br>"종목코드", "ccbaAsno":<br> "관리번호", "ccbaCtcd":<br> "시도코드", "ccbaCpno":<br> "문화재연계번호", "longitude":<br> "경도", "latitude":<br> "위도", "item":<br>[{"ccmaName":<br> "문화재종목", "crltsnoNm":<br> "1", "ccbaMnm1":<br> "문화재명(국문)", "ccbaMnm2":<br> "문화재명(한자)", "gcodeName":<br> "문화재분류", "bcodeName":<br> "문화재분류2", "mcodeName":<br> "문화재분류3", "scodeName":<br> "문화재분류4", "ccbaQuan": <br>"수량", "ccbaAsdt":<br> "지정(등록일)", "ccbaCtcdNm": <br>"시도명", "ccsiName":<br> "시군구명", "ccbaLcad": <br>"소재지 상세", "ccceName":<br> "시대", "ccbaPoss":<br> "소유자", "ccbaAdmin":<br> "관리자", "ccbaCncl": <br>"지정해제여부 (Y, N)", "ccbaCndt": <br>{"content": "내용"}, "imageUrl": <br>"메인노출이미지URL", "content":<br> "내용"}]}} 	| ccbaKdcd:종목코드<br><br>ccbaCtcd:시도코드<br><br>ccbaMnm1:문화재명(국문)<br><br>pageIndex:페이지 	|
| 상세보기 조회 	| GET 	| http://www.cha.go.kr/<br>cha/SearchKindOpenapiDt.do 	| ?:ccbaKdcd&:<br>ccbaAsno&:<br>ccbaCtcd 	|  	| {"result": {"ccbaKdcd":<br> "종목코드", "ccbaAsno":<br> "관리번호", "ccbaCtcd":<br> "시도코드", "ccbaCpno":<br> "문화재연계번호", "longitude":<br> "경도", "latitude":<br> "위도", "item": {"ccmaName":<br> "문화재종목", "crltsnoNm":<br> "1", "ccbaMnm1":<br>"문화재명(국문)", "ccbaMnm2": <br>"문화재명(한자)", "gcodeName":<br> "문화재분류", "bcodeName":<br> "문화재분류2", "mcodeName":<br> "문화재분류3", "scodeName":<br> "문화재분류4", "ccbaQuan":<br> "수량","ccbaAsdt":<br> "지정(등록일)","ccbaCtcdNm":<br> "시도명", "ccsiName":<br> "시군구명", "ccbaLcad":<br> "소재지 상세", "ccceName":<br> "시대", "ccbaPoss":<br> "소유자","ccbaAdmin":<br> "관리자", "ccbaCncl":<br> "지정해제여부 (Y, N)","ccbaCndt":<br> {"content": "내용"}, "imageUrl":<br> "메인노출이미지URL", <br>"content": "내용"}}} 	| ccbaKdcd:종목코드<br><br>ccbaAsno:관리번호<br><br>ccbaCtcd:시도코드 	|
| 이미지 조회 	| GET 	| http://www.cha.go.kr/<br>cha/SearchImageOpenapi.do 	| ?:ccbaKdcd&:<br>ccbaAsno&:<br>ccbaCtcd 	|  	|  	| ccbaKdcd: 분류종목<br><br>ccbaAsno: 관리번호<br><br>ccbaCtcd: 시도코드 	|
| 지도 조회 	| GET 	| https://map.kakao.com/<br>link/map/:latitude,:longitude 	|  	|  	|  	| latitude: 위도<br><br>longitude: 경도 	|
| 댓글 작성 	| POST 	| /comments 	|  	| {"id": "고유 id",<br> "hId":"문화재연계번호",<br> "hName":"문화재명",<br> "user": "작성자 id",<br>"userName": "작성자 닉네임",<br> "content": "내용",<br> "originTime":"작성 시간",<br> "modifyTime": "수정 시간"} 	|  	|  	|
| 댓글 조회 	| GET 	| /comments/:id 	|  	|  	| {"id": "고유 id",<br> "hId": "문화재연계번호", "hName":<br> "문화재명", "user":<br> "작성자 id", "userName":<br> "작성자 닉네임", "content":<br> "내용", "originTime": <br>"작성 시간", "modifyTime": <br>"수정 시간"} 	|  	|
| 댓글 수정 	| PATCH 	| /comments/:id 	|  	| {"content": <br>"내용", "modifyTime":<br> "수정 시간"} 	|  	|  	|
| 댓글 삭제 	| DELETE 	| /comments/:id 	|  	| {"id": "고유 id", "hId":<br> "문화재연계번호"} 	|  	|  	|
