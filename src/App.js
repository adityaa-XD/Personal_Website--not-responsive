
import './App.css';
import Mine from './mine.jpg'
import drawings from './artssssssssss.jpg'


function App() {
  
  return (
    <><div className="photo">
      <header className="header">
        <h1 className="defalt">De.Defalt</h1>
        <nav className="navbar">
          <a className="h1" href=".h1">Home</a>
          <a className="h1" href='#about'>About</a>
          <a className="h1" href="mailto:minatomadhatter@gmail.com">Contact</a>
        </nav>
      </header>
      <section className="content">
        <div className="intro">
          <h1>Hi, I'm Aditya Chaudhary</h1>
          <h3>Front-End Developer</h3>
          <p>HTML, CSS, JAVASCRIPT, REACT.JS, REACT NATIVE, AND PYTHON WIZARDRY✨🐍. A VERSATILE FREELANCER SKILLED IN FRONT-END, MOBILE, AND BACKEND DEVELOPMENT. LET'S BRING YOUR PROJECTS TO LIFE TOGETHER! 💻📱 WITH A KEEN EYE FOR DESIGN AND A PASSION FOR CLEAN CODE, I'LL ENSURE YOUR WEB AND MOBILE APPLICATIONS NOT ONLY LOOK GREAT BUT ALSO PERFORM FLAWLESSLY..</p>
          <div className="buttons">
            <button className="button1">Hire Me</button>
            <button className="button2">Let's Talk</button>
          </div>

        </div>
        <img src={Mine} className="image" alt="myimage"></img>

      </section>
    </div>
    <div className="know_me">
    <div  className="know"><h1 className="ABOUT">About Me</h1></div>
     <section className='knowww'>
     
     <div id="about" className="art_container">
     <div className="image1" ><img className="img1" src={drawings} alt='drawings'/></div>
     <div className="about_img1"><p className="about_img"><h1 className='FUN'>A FUN FACT</h1>
I am not just a coder; I am also deeply passionate about manga art. Combining my technical skills with my love for visual storytelling, I find joy in creating immersive worlds through both code and illustrations. This dual passion allows me to express my creativity in unique ways, blending the analytical mindset of coding with the emotive nature of art. Embracing these two passions, I continuously strive to improve both my coding abilities and artistic talents, making me a versatile and dedicated individual.</p></div>
     </div>
     <div className='glance'>
     <h6 className="about_G">At A Glance</h6>
     <h3 className="about_Gl">As a multi-faceted individual, I'm a front-end developer, gamer, coffee person, a student, and a chess lover.</h3>
     </div>
     </section>
     <div className='contacts'>
      <footer className='END'>
      <h1 className='contact'>Find Me At</h1>
      
        <button className='button3'><a href="https://github.com/adityaa-XD" target='_blank' className="link1">GITHUB</a></button>
        <button className='button4'><a href="https://replit.com/@LAlderson" target='_blank'    className="link2">REPLIT</a></button>
        <button className='button5'><a href="https://twitter.com/adiitya_XD" target='_blank'    className="link2">TWITTER</a></button>
      

      </footer>
     </div>
      
    </div></>
  );
}

export default App;
