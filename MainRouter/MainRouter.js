import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Navbar from '../Navbar/Navbar';
  import Men from '../Pages/Men';
  import Women from '../Pages/Women';
  import Contact from '../Pages/Contact';
  import Home from '../Pages/Home';

export default function MainRouter(){

      return (
        
          <div>
            <Navbar/>
            <Switch>
           
            <Route exact path="/Home">
                <Home/>
              </Route>
              <Route exact path="/Men">
                <Men/>
              </Route>
              <Route exact path="/Women">
                <Women />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
                <Route path="">
                <Home/>
              </Route>
            </Switch>
          </div>
        
        
      );
    };
/*    
    function Home() {
      return <h2>Home</h2>;
    }
    
    function About() {
      return <h2>About</h2>;
    }
    
   
    }
  */

