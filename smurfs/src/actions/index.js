/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios"

export const LOADING_ADDSMURF = "LOADING_ADDSMURF";
export const LOADING_FETCHSMURFS="LOADING_FETCHSMURFS";
export const SUCCESS_ADDSMURF = "SUCCESS_ADDSMURF"
export const SUCCESS_FETCHSMURFS="SUCCESS_FETCHSMURFS"
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
export function fetchSmurfs( ) {
  return (dispatch) => {
      dispatch({ type: LOADING_FETCHSMURFS });
  axios
    .get( `http://localhost:3333/smurfs/` )
          .then( response=> {
              dispatch( {
                  type: SUCCESS_FETCHSMURFS,
                  payload: response.data } );
       })
      .catch( err => {
      dispatch( {
        type: ERROR, 
        payload: "Check .get address :(" } );
    }); 
  };
  
}
export const addSmurf = ({ name, age, height }) => dispatch => {
  dispatch({ type: LOADING_ADDSMURF });
  axios
    .post('http://localhost:3333/smurfs', { name, age, height })
    .then(res => {
      dispatch({  type: SUCCESS_ADDSMURF, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR,  payload: err });
    });
};

