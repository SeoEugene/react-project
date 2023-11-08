# react를 이용한 포트폴리오 사이트 만들기

# 작업 순서

1. 폴더를 만들고 리액트 설치 `npx create-react-app 프로젝트 이름`
2. git에 업로드
3. [lenis 사이트](https://lenis.studiofreight.com/)

## 설치

1. 폴더를 만들고 리액트 설치 `npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. leais 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

### git 업로드

echo "# react-project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SeoEugene/react-project.git
git push -u origin main

##### 문제점: git push -u origin main 명령을 입력하면 로그인창이 따로 뜨면서 계정을 선택하라고 한다.

Why am i being asked to select an account?
귀하(실제 개인)는 하나 이상의 Git 호스팅 제공업체에 하나 이상의 사용자 계정(ID)을 가질 수 있습니다. 대부분의 Git 호스트는 URL에 "사용자" 부분을 넣지 않기 때문에 기본적으로 Git은 원격에 대한 사용자 부분을 빈 문자열로 처리합니다. 하나의 도메인에 여러 ID가 있는 경우 ID별로 고유한 사용자 부분을 직접 삽입해야 합니다.
장소를 복제할 때 Git과 GCM이 서로 다른 ID를 사용하도록 하려면 도메인 이름 앞에 ID와 를 포함하세요 .

새로운 클론

##### instead of `git clone https://example.com/open-source/library.git`, run:

`git clone https://contrib123@example.com/open-source/library.git`

##### instead of `git clone https://example.com/big-company/secret-repo.git`, run:

`git clone https://employee9999@example.com/big-company/secret-repo.git`

기존클론

##### in the `library` repo, run:

`git remote set-url origin https://contrib123@example.com/open-source/library.git`

##### in the `secret-repo` repo, run:

`git remote set-url origin https://employee9999@example.com/big-company/secret-repo.git`

특정 원격에 대한 기본 계정을 설정하려면 다음 Git 구성을 설정하면 됩니다.
`git config --global credential.<URL>.username <USERNAME>`
ex) `git config --global credential.https://github.com.username alice`

### GSAP

JavaScript를 사용한 웹 애니메이션 라이브러리로, 웹 페이지에서 다양한 애니메이션 효과를 만들기 위한 강력한 도구입니다.

### lenis

Lenis is an open-source library built to standardize scroll experiences and sauce up websites with butter-smooth navigation, all while using the platform and keeping it accessible.

Lenis는 스크롤 경험을 표준화하고 웹사이트를 부드러운 내비게이션과 함께 향상시키기 위해 만들어진 오픈 소스 라이브러리입니다.

## 트러블 슈팅

<details>
<summary>Whitespace error</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,
윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지는데
Git이 이 둘 중 어느 쪽을 선택할지 혼란해 생기는 오류

`git config --global core.autocrlf true // 시스템 전체에 적용`
`git config core.autocrlf true // 해당 프로젝트에만 적용`
이렇게 하게되면 개발자가 git에 코드를 추가했을 때는 CRLF를 LF로 변환해주고,
git의 코드를 개발자가 조회할 때는 LF를 CRLF로 변환해준다고 한다.

</details>

# 리액트 명령어

`rafce()`

<div id="root"></div>
