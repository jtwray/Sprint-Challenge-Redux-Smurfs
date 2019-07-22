/**Be sure to import in all of the action types from `../actions`
 */
import {
	LOADING_FETCHSMURFS,
	LOADING_ADDSMURF,
	SUCCESS_ADDSMURF,
	SUCCESS_FETCHSMURFS,
	ERROR,
} from "../actions/";

/*
   Your initial/default state for this project could *Although does not have to* look a lot like this
   updatingSmurf: false
   deletingSmurf: false
  
  */ const initialState = {
	smurfs: [],
	fetchingSmurfstate: false,
	addSmurfstate: false,
	error: null,
};
/*
    You'll only need one smuf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
  */
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_FETCHSMURFS:
			return {
				...state,
				fetchingSmurfstate: true,
			};
		case SUCCESS_FETCHSMURFS:
			return {
				...state,
				smurfs: [...action.payload],
				fetchingSmurfstate: false,
			};
		case ERROR:
			return {
				...state,
				error: action.payload,
			};
		case LOADING_ADDSMURF:
			return {
				...state,
				addSmurfstate: true,
			};
		case SUCCESS_ADDSMURF:
			return {
				...state,
				smurfs: [...action.payload],
				addSmurfstate: false,
			};
		default:
			return state;
	}
};
export default rootReducer;
