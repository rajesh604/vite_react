import './App.css'
import image from './assets/react.svg'

function App() {
  return (
    <div className='container'>
      <nav>
        <div className='logo'>
          <img src={image} alt='React Logo' />
          <h1>React Facts</h1>
        </div>
        <ul>
          <li>React Course - Project 1</li>
        </ul>
      </nav>
      <main>
        <section>
          <h1>Fun facts about <span>React</span></h1>
          <ul>
            <li>Was first released in 2013</li>
            <li>Is maintained by Facebook</li>
            <li>Is the most popular JS library</li>
            <li>Is used by 32.3% of all websites</li>
            <li>Is used by 1.3 million developers</li>
          </ul>
        </section>
        <section>
          <h1>Fun facts about <span>React</span></h1>
          <ul>
            <li>Was first released in 2013</li>
            <li>Is maintained by Facebook</li>
            <li>Is the most popular JS library</li>
            <li>Is used by 32.3% of all websites</li>
            <li>Is used by 1.3 million developers</li>
          </ul>
        </section>
      </main>
      <footer>
        &copy; 2021 - React Facts
      </footer>
    </div>
  )
}

export default App
