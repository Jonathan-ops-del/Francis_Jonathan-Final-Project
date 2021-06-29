import React from "react";

function OlliePage(){

  return (

        <div>
            
            <body className="ollie-pg-body">
        
        <header>
            <h1 className="ollie-pg-h1">Ollie's Gallery</h1>
        
        </header>
    
    <main>
    
    
        <div className="ollie-pg-container">      
            <div className="ollie-pg-row">
            <div className="ollie-pg-column">
               <img className="ollie-img1" src="visual/ollie2.jpg" alt="Ollie, the cat, sitting on the window ledge"/>
            </div>
            <div className="ollie-pg-column">
                <img className="ollie-img2" src="visual/ollie3.jpg" alt="Ollie, the cat, sitting on a green chair in the corner of a room"/>
            </div>
        </div> 
        
        <div className="ollie-pg-row">
            <div className="ollie-pg-column">
              <img className="ollie-img3" src="visual/ollie4.jpg" alt="Ollie, the cat, outdoors sitting under a shade of tree sleeping on the ground looking up"/>
            </div>
            <div className="ollie-pg-column">
              <img className="ollie-img4" src="visual/ollie5.jpg" alt="Ollie, the cat, sitting on top of the coffee table looking at the photographer"/>
            </div>
        </div>
      </div>   
   
    </main>
    
    
    <footer>
      
        <h5 className="ollie-pg-h5">***MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW***</h5>
    </footer>
    
    </body>
</div>

        )
}

export default OlliePage;