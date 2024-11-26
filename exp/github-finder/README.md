# GIT Finder

![result](./recording.gif)

## 코드 설명
JS를 이용하여 OOP 사용 (객체 지향을 사용하기 위해 Utils 파일들은 Class로 작성 컴포넌트 파일들은 function component로 작성하였습니다.) 
비동기 API 호출 (API 호출시 Async await을 사용하여 비동기 호출을 사용하였습니다 위치 = GitApi.js, App.js에서 확인하실 수 있습니다.)
잔디밭 기능 혹은 Sprint 추가.

### 폴더 구조 

assets : css, img등 파일들을 작성하기 위한 폴더
- common.css

json : 정적 json을 작성해놓는 폴더
- random.json (random 함수를 실행시키기 위한 데이터를 저장한 파일)

utils : 모든 파일에서 사용하기 위한 Utils성 파일들 작성
- GitApi.js (GIT API 호출 클래스)
- Random.js (Random 함수를 담은 클래스)
- Utils.js (전체 파일에서 사용하기 위한 함수를 담기위한 클래스)

components : 메인 파일인 App.js에 컴포넌트 구조로 작성하기 위한 파일들을 작성
- Search.js (검색 부분의 내용이 담긴 컴포넌트)
- ProfileBox.js (검색한 유저의 Git 정보를 설명하는 내용이 담긴 컴포넌트)
- RepoBox.js (검색한 유저의 Repo들의 정보를 설명하는 내용이 담긴 컴포넌트)

### 컴포넌트 구조
```mermaid
flowchart BT
Search & ProfileBox & RepoBox <--> App.js
```
