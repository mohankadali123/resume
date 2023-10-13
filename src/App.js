import './App.css';
// import imgs from './images/port11.png'

function Header()
{
  return (
    <header className="header">
        <a href="render.com" className="logo">Portfolio.</a>

        <nav className="navbar">
            <a href="render.com">Home</a>
            <a href="render.com">About</a>
            <a href="render.com">Skills</a>
            <a href="render.com">Projects</a>
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
    <p>Member of GDSC WEB DEVELOPMENT TEAM.</p>

    <div className="socialmedia">
        <a href="render.com" ><i class="fa-brands fa-facebook"></i></a>
        <a href="render.com" ><i class="fa-brands fa-instagram"></i></a>
        <a href="render.com" ><i class="fa-brands fa-linkedin"></i></a>
        <a href="render.com" ><i class="fa-brands fa-twitter"></i></a>
    </div>

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
