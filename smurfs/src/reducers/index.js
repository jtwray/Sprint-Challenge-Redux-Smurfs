/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, SUCCESS, ERROR} from "../actions";
const initialState = {
  smurfs: [],  
  fetching: false,
  error: null,
  addingSmurf:false
  // Array charac ters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch( action.type ) {
    case LOADING: {
      // action types should be FETCHING, SUCCESS and FAILURE	   
      // your switch statement should handle all of these cases.	   
      console.log( action.payload )
      return {
          ...state,
          fetching: true,
        }
      }
      case SUCCESS: {
        return {
          ...state,
          fetching: false,
          error: null,
          characters: action.payload.results
        }
      }
      case ERROR: {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
