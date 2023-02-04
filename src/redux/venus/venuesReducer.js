import { venuesActionTypes } from './venuesTypes';

const initState = {
  venuesList: [],
};

export default function venuesReducer(state = initState, action) {
  switch (action.type) {
    case venuesActionTypes.GET_VENUE_LIST_SUCCESS:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
