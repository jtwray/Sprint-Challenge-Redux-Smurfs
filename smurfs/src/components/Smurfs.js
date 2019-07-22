import React from 'react';
import Smurf from "./Smurf";

const Smurfs=(props)=> {
 

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs&&props.smurfs.map(smurf => {
            return ( <div>
              <Smurf
                smurf={smurf}
              key={smurf.name}  
              name={smurf.name}
             
              />
              
              
              </div>
            );
          })}
        </ul>
      </div>
    );

  }

export default Smurfs;


