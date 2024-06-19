import './App.css';
import TestButton from './components/button/buttons';
import { Image } from './components/image';

import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    const response = fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo'
    );
    console.log(response);
    response
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((item) => {
        setState(item);
        console.log(item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const name = '〇〇';

  return (
    <div className="App">
      <div className="container">
        <header className="header-container">
          <div className="">
            <h1>タイトル</h1>
          </div>
          <div className="">
            <ul className="menu-container">
              <li className="menu-items">メニュー1</li>
              <li className="menu-items">メニュー２</li>
            </ul>
          </div>
        </header>
      </div>
      <div>{'こんにちは' + name + 'さん'}</div>
      <div
        style={{
          fontSize: 20,
          color: 'red',
        }}
      >{`こんにちは${name}さん`}</div>
      <MyButton color={'red'} backgroundColor={'white'} />
      <MyButton color={'blue'} backgroundColor={'red'} />
      <LoginPage isLogined={false} />
      <LoginPage isLogined={true} />
    </div>
  );
}

function MyButton({ color, backgroundColor }) {
  const handleClick = () => {
    alert('テスト');
  };

  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
      }}
      className="submit-button"
      onClick={handleClick}
    >
      送信
    </button>
  );
}

function Label({ url, text }) {
  return <a href={url}>{text}</a>;
}

function LoginPage({ isLogined }) {
  // let content;
  // if (isLogined) {
  //   content = <div>コントロールパネルです</div>;
  // } else {
  //   content = <div>ログイン画面</div>;
  // }
  return (
    <div>
      {isLogined ? <div>コントロールパネルです</div> : <div>ログイン画面</div>}
    </div>
  );
}

// const button = document.createElement('button')
// button.className="test"
// button.addEventListener('click',() => {})
// button.onclick = () => {

// }

export default App;
