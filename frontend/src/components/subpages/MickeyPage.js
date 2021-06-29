import React from "react";


function MickeyPage(){
    return(
          <div>
             
             <body className="mickey-pg-body">
        
                <header>
                    <h1 className="mickey-pg-h1">Mickey's Gallery</h1>
                </header>
                   
                    <main>
    
                        <div className="mickey-pg-container">           
                            
                        <div className="mickey-pg-row">
                                <div className="mickey-pg-column">
                                     <img className="mickey-img1" src="visual/mickey2.jpeg" alt="Mickey, the Dog,  on top of a couch holding his favourite stuffed animal" height="600"width="450"/>
                                 </div>
            
            
                                <div className="mickey-pg-column">
                                    <img className="mickey-img2" src="visual/mickey3.jpeg" alt="Mickey, the Dog, sitting on an open field of green grass" height="600"width="450"/>
                                 </div>
                          </div>
        
        
                      <div className="mickey-pg-row">
                            <div className="mickey-pg-column">
                                <img  className="mickey-img3" src="visual/mickey4.jpeg" alt="Mickey, as a puppy laying on the family bed" height="600"width="450"/>
                             </div>
                             <div className="mickey-pg-column">
                                <img  className="mickey-img4" src="visual/mickey5.jpeg" alt="Mickey sitting on his all fours on the backyard deck" height="600"width="450"/>
                            </div>
                          </div>  
                      </div>    
           
           </main>
              <footer>
                <h5 className="mickey-pg-h5"> Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof </h5>
             </footer>
         
         
         </body>
   </div>
    )
}

export default MickeyPage;