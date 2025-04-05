import { Box, Image, Badge, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "./index.css"

function WeatherNews() {

     return (

          <>

               {/* First */}

               <div id="news-conitaner" >
                    <Heading as='h3' size='md' pl={5}>
                         Hurricane Helene: 6 months later
                    </Heading>

                    <div id="news">
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/Sign-2.jpg?w=304&h=171&crop=1" />
                              <h4>State of emergency declared as wildfires ravage the Carolinas, threaten hurricane recovery.</h4>
                         </div>
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/helene-square.gif?w=304&h=171&crop=1" />
                              <h4>6 months later, Hurricane Helene by the numbers
                                   The storm's numbers were impressive the week that Helene hit the U.S. </h4>
                         </div>
                         <div>
                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/NASA-study-shows-unexpected-ocean-level-increase.jpg?w=304&h=171&crop=1" />
                              <h4>'We're still struggling': North Carolina families coping with weather anxiety, long recovery months after Helene.</h4>

                         </div>
                    </div>
               </div>

               {/* second  */}
               <div id="news-conitaner">
                    <Heading as='h3' size='md' pl={5}>
                         Weather News
                    </Heading>

                    <div id="news">
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/GettyImages-2206108537.jpg?w=304&h=171&crop=1" />
                              <h4>State of emergency declared as wildfires ravage the Carolinas, threaten hurricane recovery.</h4>
                         </div>
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/cicadas.png?w=304&h=171&crop=1" />
                              <h4>Cicadas 2025: Billions of Brood XIV will soon emerge, is your state on the list?. </h4>
                         </div>
                         <div>
                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/page-3_862296.jpg?w=304&h=171&crop=1" />
                              <h4>Potent storm packing wind and rain risk to target Northwest</h4>

                         </div>
                    </div>
               </div>

               {/* Third  */}

               <div id="news-conitaner">
                    <Heading as='h3' size='md' pl={5}>
                         Trending Today
                    </Heading>

                    <div id="news">
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/dustdevil.gif?w=304&h=171&crop=1" />
                              <h4>State of emergency declared as wildfires ravage the Carolinas, threaten hurricane recovery.</h4>
                         </div>
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/cosmic-tornado.png?w=304&h=171&crop=1" />
                              <h4>Breathtaking 'cosmic tornado' swirling image captured by NASA telescope. </h4>
                         </div>
                         <div>
                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/cnn-L19jb21wb25lbnRzL2ltYWdlL2luc3RhbmNlcy9jbThuZDlrbnMwMDB3M2I2bWd0bGN5cTln-L19jb21wb25lbnRzL2FydGljbGUvaW5zdGFuY2VzL2NtOG5kN3k4ZTAwMHkyY3FuMm4xcTdvZ3o.jpg?w=304&h=171&crop=1" />
                              <h4>Murphy, beloved bald eagle who went viral for incubating a rock, dies after Missouri storms.</h4>

                         </div>
                    </div>
               </div>


               {/* Four  */}

               <div id="news-conitaner">
                    <Heading as='h3' size='md' pl={5}>
                         Health and Wellness
                    </Heading>

                    <div id="news">
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/spotted-lantern-fly.png?w=304&h=171&crop=1" />
                              <h4>Insect invasion: What to expect in your backyard this spring.</h4>
                         </div>
                         <div>

                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/cnn-L19jb21wb25lbnRzL2ltYWdlL2luc3RhbmNlcy9jbTg3d2t2eXAwMDB5M2I2bTdydTBtd2hu-L19jb21wb25lbnRzL2FydGljbGUvaW5zdGFuY2VzL2NtODd3YzY2ejAwMXQyNnA0YW5mbWd0cjc.jpg?w=304&h=171&crop=1" />
                              <h4>Socks could really improve your sleep, experts say. </h4>
                         </div>
                         <div>
                              <img src="https://cms.accuweather.com/wp-content/uploads/2025/03/Number-of-Texas-measles-cases-surpass-last-years-national-total.jpg?w=304&h=171&crop=1" />
                              <h4>Number of Texas measles cases surpass last year's national total.</h4>

                         </div>
                    </div>
               </div>
          </>
     );
}

export default WeatherNews;
