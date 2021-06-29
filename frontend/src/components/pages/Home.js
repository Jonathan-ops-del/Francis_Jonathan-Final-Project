import React from 'react'
import {NavLink} from "react-router-dom";


function Home (){

      return(
            <div>
                <body className="home-pg-body">  

                        <section className="home-pg-section">
                            
                        </section>

                <main className="home-pg-main">
                    
                    <h1 className="home-pg-h1">My Journey</h1>
           
                <section>
                        <div className="home-pg-container">
                            <p className="home-pg-p1">Welcome to my Personal Portfolio, my name is Jonthan Francis. I am a born & bred Canadian from a blue collar immigrant family. My family had migrated to Canada in 1990 to escape the Civil War in Sri Lanka. They had choosen Toronto to become their forver home. I have lived in Toronto for 30 years and just like my city, have seen and experienced amazing & drastic changes. From the Jays winning the World Series in the earlys 90s to the Raptors hoisting the NBA championship in our citys' largest parade. How about the unveiling of the Skydome in the 90s or being bought & renamed as the Rogers Centers in the last couple of years.</p>
       
                            <p className="home-pg-p1">Raised from a hard-working middle class family, education & work ethic were consistenly emphasized. In Toronto, the average cost of living & owning a home have gone up dramatically over the years almost to the point where many of us have no idea when we will afford our own home. However, in this country disciple, hard-work, & consistency will always take you places you have never been. In many ways it is the Land of Opportunity. How else would our immigrant families with no English, no generational wealth make a name for themselves here and have multiple propertys. I am a firm believer in the fact that we were all brought to this world to contribute to society & make this world, our city a beautiful place for our generation, the next generation, and the generation after. My contribution has been similar to all Torontians, a hard-working & goal-oriented individual.</p>
         
                            <p className="home-pg-p1">Having graduated from the University of Toronto in 2013 with a Bsc, I had gone on to write my Mcat with the hopes of going to Medical School. Unfortunately, i had fallen short twice with low results. I had then decided to take some much needed time off. Working in the Hopsitaility Industry during my University years as a part time student, I became a full time employee once I had graduated. This where I had found my niche in the finance sector. I started off as a data entry clerk for a Catering Company, and then moved on as an Accounts Payable Clerk for a Toronto-based chain restaurant. It is during this time i went back to school to get an Accounting Diploma and purse a CPA designation.</p>
   
                            <p className="home-pg-p1">After graduating from Centenial College, and continuing my education in finance i had landed a job at Recipe Unlimited, a corporate giant in the Hospitality Industry. Less than a year in, I had realized that I wanted a change and wanted to work in a completely different Industry. This came to fruition when I received a job opporunity from a North-American based POS Software Company , SilverWare POS Inc. My experience here is what led me to purse a Full Stack Certicate at York Unversitys' Continuing Education Program. I am excited to see the endless opporunties in this new field & journey that i have embarrked on. Again, welcome into a glimpse of my world as I navigate you through my Journey of life! </p> 
                        </div> 
                </section>
             
             </main>


        <article className="home-pg-article">
            
            <blockquote className="home-pg-blockquote">
               
                    <p>"It doesn't make sense to hire smart people & then tell them what to do; we hire smart people so they can tell us what to do."</p>
                    <cite>- Steve Jobs -</cite>
             
            </blockquote>
        
        </article>
       
       

       <div className="bottom-pg">
       <footer>
            <figure>
                <figcaption>
             
                    <p className="home-pg-p2">Lets connect on Linkedin & Twitter.</p>
                </figcaption>
                
                <nav className="home-pg-nav">
                    <NavLink to="/https://ca.linkedin.com/"><img src="images/linked-in.jpg" alt="Blue linkedin logo" width="50" height="50"/></NavLink> <NavLink to="/https://twitter.com/"><img src="images/twitter.jpg" alt="Blue twitter logo" width="50" height="50"/></NavLink>
                </nav>            
            
            </figure>
        </footer>
        </div>
    </body> 

   </div>
  )
}

export default Home;