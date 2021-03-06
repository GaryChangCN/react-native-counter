var defaultState={
	count:0
}
import {counter} from '../../actions/namespace';
const {INCREASE,DECREASE}=counter;

function reducer(state = defaultState, action) {
	var state=Object.assign({},state);
	switch (action.type) {
		case INCREASE:
			var {value}=action.payload;
			state.count+=value;
			return state;
		case DECREASE:
			var {value}=action.payload;
			state.count-=value;
			return state;
		default:
			return state;
	}
}
export default reducer;