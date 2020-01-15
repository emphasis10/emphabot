# emphabot Project
## 1. Introduction
카카오톡을 쓰면서 나를 대신하거나 단톡방에서 특정 명령을 수행하거나 기능을 제공하는 챗봇이 있으면 좋겠다는 생각을 했다. 그래서 알아본 결과 Google의 Wear OS를 위한 알림 어플을 이용하여 noti로 정보를 받아올 수 있다는 것을 알게 되었다. [js로 코딩할 수 있는 어플](https://play.google.com/store/apps/details?id=com.xfl.msgbot)이 있어서 이 어플을 사용하기로 했다.

## 2. Problems
이 어플을 사용하면 안드로이드 안에서 무언가를 실행해야 하기 때문에 많은 제약이 생기게 된다. 이 프로젝트를 생각하고 언뜻 든 생각은,
- 제한적인 js 환경: Library의 부재
- 제한적인 리소스: 안드로이드 환경

정도 할 수 있었다. 

## 3. Solution
하지만, 제한적이지만 방법은 있는 것 같다. 이 어플이 Java로 구현된 js 엔진인 Rhino Engine을 사용하고 있기 때문에 뭔가 Java의 기능을 사용할 수 있을 것 같다는 생각이 들었다. 다행히도 [개발자 블로그](https://violet.develope.kr)에서 ~~제한적이지만~~ 개발자가 구현한 [API 목록](https://violet.develope.kr/entry/메신저봇-가이드-레거시-API)을 확인할 수 있었다. 여기서 `Utils.parse(String url)`이라는 함수를 사용하면 url에 대한 html 소스를 `org.jsoup.nodes.Document` Type으로 return 받을 수 있다. 

간단하게 `jsoup`에 대해서 알아보면, jsoup은 Java로 구현된 HTML parser인데 DOM 구조를 추적하거나 선택자를 사용하여 데이터를 추출할 수 있는 기능을 제공한다. 자세한 설명은 [링크](https://offbyone.tistory.com/116)를 참고하자. 여튼, jsoup을 사용하면 html에서 깔끔하게 내가 원하는 부분만 가져올 수 있다. ~~POST까지 되면 사기~~

(확인할 부분)
- [ ] POST 방식을 사용 가능 여부

어쨌든, 나는 [REST API](https://medium.com/@dydrlaks/rest-api-3e424716bab)를 사용하여 외부로 쿼리를 날려서 처리하는 방식으로 해결하였다. ~~아직 될지는 모르지만~~

## 4. Structure
3번에서 말한 것을 정리하면 다음과 같다.
- 메신저 봇은 알림을 읽어오고, API에 쿼리를 날리고, return 값을 출력
- 서버 구조
	- API 서버(flask): 메신저 봇과 직접적인 통신을 담당
	- DB 서버(미정): 쿼리에 대한 reply, feature 등을 저장
	- DL 서버(~~제일 비싼~~): NLP를 위한 고성능 서버

## 5. To-do
- [ ] 물리 서버 대수
- [ ] DB 선정
- [ ] 기능 설계
