import logo from './logo.svg';
import './App.css';
// import imgs from './images/port11.png'

function Header()
{
  return (
    <header className="header">
        <a href="#" className="logo">Portfolio.</a>

        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
        </nav>
    </header>
  )
}

function Introdiv()
{
  return (
    <div className="matter">
    <h3>Hello, It's Me</h3>
    <h1>Mohan satya prasad</h1>
    <h3>And I'm a <span>Frontend Devoloper</span></h3>
    <p>Actually now i am practicing React js that'swhy i made this.</p>

    <div className="socialmedia">
        <a href="#" ><i class="fa-brands fa-facebook"></i></a>
        <a href="#" ><i class="fa-brands fa-instagram"></i></a>
        <a href="#" ><i class="fa-brands fa-linkedin"></i></a>
        <a href="#" ><i class="fa-brands fa-twitter"></i></a>
    </div>

    <a href="#" className="btn">View my Resume</a>
</div>
  )
}

function Imagediv()
{
  return (
    <div className="homeimg">
    <div className="photodiv">
    </div>
    <img src="port11.png" alt="msp"  className="myimg" />
 </div>
  )
}

function Body()
{
  return (
    <section className="home">
        <Introdiv/>
        <Imagediv/>
    </section>
  )
}

function App() {
  return (
    <div className='App'>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
