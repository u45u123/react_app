import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Hello/>

        <h1 style={{color: 'yellow', backgroundColor: 'purple'}}>제목</h1>

        <ul style={{textAlign: 'left', color: 'pink'}}>
          <li>사과</li>
          <li>바나나</li>
          <li>딸기</li>
        </ul>

        <button style={{fontSize: '20px', padding: '10px', marginTop: '10px'}}>눌러보세요</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
