import { venuesActionTypes } from './venuesTypes';

export const VenueListAction = () => ({
  type: venuesActionTypes.GET_VENUE_LIST_REQUEST,
});
export const VenueDetailAction = (payload) => ({
  type: venuesActionTypes.GET_VENUE_DETAIL_REQUEST,
  payload,
});
