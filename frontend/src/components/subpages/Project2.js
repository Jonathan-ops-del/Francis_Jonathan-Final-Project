import React from "react";
import {Link} from "react-router-dom";


function Project2(){

  return (
  
        <div>

            <body className="project2-body">
    
                <header className="project2-header">
                    <h1>Adopt Don't Shop!</h1>
                    <h3>Welcome to my Adopted Pet  Gallery</h3>
                </header>
    
    
            <main>

                <div className="project2-container">

                    <p className="project2-p1">Why do people buy pets from breeders? Simply, because they want a specific breed. Did you know that these back-yard breeders will breed pets from the same family? Did you know that they will do whatever it takes to make a quick buck, whether its abusing the animal, neglecting the animal, or simply forcing the animal to do things that are not ethical. By adopting animals we are not only putting back-yard breeders out of business but we are also opening up space for new animals to take up these shelters. Everytime we adopt a pet we open up a space for one that needs a temporary home. Shelters can only have so much space until they can't accept any more homeless animals. Just because you couldn't find the perfect breed doesn't mean that animal is not worth our love. I have and will always encourage people to adopt animals as I strongly disagree with shopping for animals. There are so many homeless cats & dogs that roam this city that need our help. I myself have adopted three pets over the course of my life. I have created a small gallery below for each of my adopted pets to show you how adorable & loving adopted pets are.  </p>
      

                    <div className="project2-row">
                     <div className="project2-column">
                      <Link to={"TheoPage"}><img src="visual/theo1.jpg" alt="Theo, the cat, enjoying sometime sitting on his board scratcher" className="project2-img" /></Link>
                    <div>
                        <h5 className="project2-h5">Theodore</h5>
                        <p className="project2-p2">Meet Theo, the orange tabby. Theo was found living in a neighbourhood with his mom and four siblings. They were given shelter and food by people in the neighbourhood but soon Theo and his siblings began crossing busy streets and winter was approaching. A family in the neighbourhood took in the mother and her litter. The family worked with a local rescue to find Theo's mother and her litter their forever homes. I adopted Theo when he was four months old. Theo is a very affectionate cat but also very cautious of his surroundings. He isn't too fond of humans he doesn't know but he loves spending time with his fur brothers.   </p>
                      </div>
                    </div>
        
        
                      <div className="project2-column">
                        <Link to={"MickeyPage"}><img src="visual/mickey1.jpeg" alt="Mickey, the Dog, ready to go on walk on a nice green field of grass" className="project2-img" /></Link>
                         <div>
                          <h5 className="project2-h5">Mickey</h5>
                          <p className="project2-p2">Meet Mickey,  the pomeranian and papillon mix. Mickey was the first pet I adopted from a rescue. Mickey was surrendered by a family who could no longer care for him when he was only 4 months old. Mickey is now 14 years old. He is the best furry companion a person could ask for. He is very loving, adventurous, and has a kind old soul - always looking out for his younger fur brothers. He loves to learn new tricks and has mastered many because he will do anything for treats!  </p>
                         </div>
                     </div>



                        <div className="project2-column">
                            <Link to={"OlliePage"}><img src="visual/ollie1.jpg" alt="Ollie, the cat, with his to paws out on top of a table peering into his next mission" className="project2-img" /></Link>
                           <div>
                             <h5 className="project2-h5">Oliver</h5>
                             <p className="project2-p2">Meet Ollie, the tuxedo. Theo was the only cat at home and I soon came to realize it was time to adopt again. Ollie among other several cats were rescued from a hoarding situation in Toronto. When I first met Ollie, the five month old kitten, I knew he would be the perfect fit. He came with a personality bigger than himself. Ollie is very curious and adventurous so he has to explore/investigate everything. He is also very food motivated so he will sneak into cupboards or pantry to find his treats and finish the entire bag before he is caught. When he isn't exploring he is playing or cuddling with his brother Theo.  </p>
                          </div>
       
                      </div>
            </div>
        </div>
    </main>
     

    <footer className="project2-footer">
       <h5 className="project2-h5">Giving Voice to the Voiceless !</h5>
    </footer>


    </body>
</div>)
}

export default Project2;