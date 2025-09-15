import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,b] = useState('여자 코트 추천'); 

  /* [2025-09-15] 리액트에서 자료 잠깐 저장할땐 state 써도 됨.
     1.import{ useState } from 'react';
     2.userState(보관할자료) 
     3.let [a(작명),b(작명) = a : state를 보관한 자료. b:state 변경함수

     Destructuring 문법 : 배열이나 객체를 분해해서 그 안에 있는 값을 쉽게 꺼내 쓸 수 있게 하는 문법
     let [a,c] = [1,2];

     변수와 state의 차이점 
     - 변수는 값이 바뀌어도 html 재렌더링X, state는 값이 바뀌면 재렌더링O.
     - 변동시 자동으로 html에 반영되게 하고싶으면 state사용하면 됨.
     - 자주변경될거 같은 html을 state로 만들어놓으면 됨. 
  */

  
  /* JSX언어 : JS안에서 HTML문법을 쉽게 쓸 수 있게 해주는 언어
    
     JSX문법 주의사항
      1.class를 넣을땐 clsassName으로 써야함
      2.변수를 넣을땐 {}안에 넣어야함
      3.여러줄일땐 꼭 부모태그로 감싸야함
        className, id에도 {}사용가능
      4.JSX안에 style적용시 style { {스타일명:'값'} } 이런식으로 object형태로 넣어야함
        카멜표기법으로 작성해야함 (background-color -> backgroundColor)

      //기존 js문법 : documnet.querySelector('h4').innerHTML = 'post'

  */
  
  //return()안에는 병렬로 태그 2개이상 기입금지.
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>  
      <div className="list">  
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
