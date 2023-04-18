import logo from './home.png';
import './App.css';

function App() {
  return (
    <div >
    <h1>Axiom TechGuru Private Limited</h1>
      <section class="home" id="home">
        <div class="content">
          <h3>food made with love</h3>
          <br></br>
          <h2>This is my First <em> React </em>  Program</h2>
          <br></br>
        </div>

        <div class="image">
          <img src={logo} alt="" />
        </div>

      </section>
    </div>
  );
}

export default App;
