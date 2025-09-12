import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  //기존 js문법 : documnet.querySelector('h4').innerHTML = 'post'


  return (

    /* JSX언어 : JS안에서 HTML문법을 쉽게 쓸 수 있게 해주는 언어
    
      JSX문법 주의사항
        1.class를 넣을땐 clsassName으로 써야함
        2.변수를 넣을땐 {}안에 넣어야함
        3.여러줄일땐 꼭 부모태그로 감싸야함
         className, id에도 {}사용가능
        4.JSX안에 style적용시 style { {스타일명:'값'} } 이런식으로 object형태로 넣어야함
        카멜표기법으로 작성해야함 (background-color -> backgroundColor)
    */
   
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'red', fontSize:'16px' } }>블로그 test</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
