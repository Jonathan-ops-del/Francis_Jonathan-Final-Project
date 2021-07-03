import React from "react";
import {Link} from "react-router-dom";

function Portfolio(){

return (
       <div>
           <body className="porfolio-pg-body"> 
               
               <header>
                 <h1 className="portfolio-pg-h1">Welcome to My Portfolio</h1>
              </header>
    
      <main>
        
             <div className="portfolio-pg-container">
        
              <aside>
                  <p className="portfolio-p1">Welcome to my Portfolio Page! Here you will find some pieces of work that I am proud of and want to share with you. This page consists of my first two small pieces of work that I have worked on since starting the Full Stack Web Development Course at York University in January 2021. Below, you will find two projects titled : Project 1 & Project 2. Please click on the links to see each of the individual projects. I hope you enjoy the show!</p>
              </aside>
        

        <section className="portfolio-pg-row">  

                
                <article className="portfolio-pg-column">

                        <h3 className="portfolio-pg-h3">Project 1: "Comic Book Club"</h3>
                
                  <nav className="portfolio-nav">
                        <Link to={"Project1"}>Comic Book Club - Click Here</Link>
                   </nav>
              
                     <p className="portfolio-p2">The Project titled The Comic Book Club is a website that my team from my Full Stack Web Development Course & I have worked on as part of an assignment. This was one of our first assignments in the Course. The concept behind the assignment was to essentially design a website that brings to life a gallery. My team and I had a joint interest in Comic Books and we had decided to build this and bring our concept of a Comic Book Gallery to life. Please click on the link to see some snipets & a preview of what we are working on together.  </p>  
             
                </article>
               
               
               
               <article className="portfolio-pg-column">
                        
                        <h3 className="portfolio-pg-h3">Project 2: "Adopt Don't Shop!"</h3>
                
                <nav className="portfolio-nav">
                        <Link to={"Project2"}>Adopt Don't Shop! - Click Here</Link>
                </nav>
               
                <p className="portfolio-p2">This is a personal project that I have worked on myself. The purpose behind this project is to bring to attention the importance of adopting pets & not encouraging backyard breeders who neglect & abuse animals while breeding "the perfect pet." I wanted to bring to attention the importance of adopting & giving a voice for the voiceless. This Gallery consists of my own pets whom i have adopted in the course of my life and have built a strong loving home for. I hope this will encourage you to ADOPT & NOT SHOP!</p>  
               
                </article>
            
            
        </section>
         
       </div>
   </main>  
   
        <footer>
            <blockquote className="portfolio-pg-blockquote">
                <p>"You can't use up creativity. The more you use, the more you have."</p>
                <cite>Maya Angelou</cite>
            </blockquote>
        </footer>
    
    </body> 
 
 </div>)

}

export default Portfolio;