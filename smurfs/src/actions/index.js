/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios"

export const LOADING="LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR="ERROR";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export function fetchsmurfs( ) {
  return (dispatch) => {
      dispatch({ type: LOADING });
  axios
    .get( `http://localhost:3333/smurfs/` )
          .then( response=> {
              dispatch( {
                  type: SUCCESS,
                  payload: response.data.message } );
       })
      .catch( err => {
      dispatch( {
        type: ERROR, 
        payload: "Check .get address :(" } );
    }); 
};
}
export function addsmurf( smurf ) {
  const smurf=[{age:"",height:"",name:""} ]
  return (dispatch) => {
      dispatch({ type: LOADING });
  axios
    .post( `http://localhost:3333/smurfs/`,smurf )
          .then( response=> {
              dispatch( {
                  type: SUCCESS,
                  payload: response.data.message } );
          } )
    
      .catch( err => {
      dispatch( {
        type: ERROR, 
        payload: "smurf not added yo :(" } );
    });

};
}