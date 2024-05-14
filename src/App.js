import './App.css';
// import imgs from './images/port11.png'
import React from 'react';
import data from './imgs.json'
function Header() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.linkedin.com/in/mohan-satya-prasad-kadali-107304248/">Navbar</a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="https://www.linkedin.com/in/mohan-satya-prasad-kadali-107304248/">Achievements</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}




function MyCard(props) {
  return (
    <div className=" col-6 col-lg-3 col-md-6 mb-4 col-sm-6">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt="Cardimage" />
        <div className="card-body">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div className='container'>
      <div className='row'>
        {data.map((card, index) => (
          <MyCard key={index} img={card.img} text={card.text} />
        ))}
      </div>
    </div>
  );
}


function Introdiv()
{
  return (

    <div className="matter col-lg-6 col-md-12 col-sm-12">
    <h3>Hello, It's Me</h3>
    <h1>Mohan satya prasad</h1>
    <h3>And I'm a <span>FullStack Devoloper</span></h3>
    <p>Web and App Devolopement co-ordinator in Google Developers Students Club | Experinced with Spring Boot, Django | Coding Enthusiast and Aspiring Software Developer</p>

    <div className="socialmedia">
        <a href="https://www.linkedin.com/in/mohan-satya-prasad-kadali-107304248/" ><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/mohan_kadali5/" ><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/mohan-satya-prasad-kadali-107304248/" ><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.linkedin.com/in/mohan-satya-prasad-kadali-107304248/" ><i class="fa-brands fa-twitter"></i></a>
    </div>

    <a href="programlearnerz.com" className="btn">View my Resume</a>
</div>
  )
}

function Imagediv()
{
  return (
    <div className="homeimg col-lg-6 col-md-12 col-sm-12">
    <div className="photodiv">
    </div>
    <img src="mypic.png" alt="msp"  className="myimg" />
 </div>
  )
}

function Body()
{
  return (
      <div>
    <section className="home">
       <div className="container">
       <div className="row">
        <Introdiv/>
        <Imagediv/>
        </div>
        </div> 
    </section>
    
    <div className='bg-yellow'>
    <div className='matter2'>
      <h1 className='mb-5 mt-5' id='skills'>Skills</h1>
    </div>
      <CardList/>
    </div>
    </div>


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
