import React from "react";

function TheoPage(){



    return (

            <div>
              <body className="theo-pg-body">


                  <header>
                      <h1 className="theo-pg-h1">Theo's Gallery</h1>
                  </header>


            <main>
                  <div className="theo-pg-container">
                      <div className="theo-pg-row">
                          <div className="theo-pg-column">
                                <img className="theo-img1" src="visual/theo2.jpg" alt="Theo, the cat, as a kitten laying upside on the couch trying to fall asleep"/>
                            </div>
            
                          <div className="theo-pg-column">
                                <img className="theo-img2" src="visual/theo3.jpg" alt="Theo, the cat, sleeping on his scratch board and looking at the photographer"/>
                          </div>
                      </div>    

                    <div className="theo-pg-row">
                        <div className="theo-pg-column">
                          <img  className="theo-img3" src="visual/theo4.jpg" alt="Theo, the cat, on top of his tree house protecting his other small kitten friend"/>
                        </div>
                      <div className="theo-pg-column">
                          <img  className="theo-img4" src="visual/theo5.jpg" alt="Theo, the cat, sitting on the window ledge looking towards the photographer"/>
                      </div>
                  </div>
              </div>
            </main>

      <footer>
          <h5 className="theo-pg-h5">***MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW***</h5>
      </footer>
</body>

</div>

    )
}

export default TheoPage;