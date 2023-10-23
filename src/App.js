import logo from './logo.svg'
import './App.css'

import ButtonComponent from './Components/ButtonComponent'

import ImageComponentClass from './Components/ImageComponentClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent MessageButton="Invia" />
        <ButtonComponent MessageButton="Cancella" />

        <ImageComponentClass
          ImgSrc="https://picsum.photos/200"
          ImgAlt="foto casuale"
        />
        <ImageComponentClass
          ImgSrc="http://placekitten.com/g/200"
          ImgAlt="gattino"
        />
      </header>
    </div>
  )
}

export default App
