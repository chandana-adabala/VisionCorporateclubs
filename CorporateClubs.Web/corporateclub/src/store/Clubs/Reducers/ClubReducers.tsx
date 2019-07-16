import IClubs from "../../../models/IClubs";
import { PayLoad, Actions, ActionReturnType } from "../Actions/ClubActions";
const IntialState: PayLoad = {
  clubs: [],
  users: [],
  members: [],
  requests: [],
  isLoading: false,
  clubMembersList: [],
  filteredClubMembersList: []
};
export function ClubReducer(
  State = IntialState,
  Action: ActionReturnType
): PayLoad {
  debugger;
  switch (Action.type) {

    case Actions.DISPLAY_CLUBS:
      State.clubs = Action.payload.clubs;
      State.isLoading = false;
      return { ...State };

    case Actions.DETAILS_OF_USER:
      State.users = Action.payload.users;
      State.isLoading = false;
      return { ...State };

    case Actions.DETAILS_OF_MEMBERS:
      State.members = Action.payload.members;
      State.isLoading = false;
      return { ...State };

    case Actions.REQUESTS_OF_CLUB:
      State.requests = Action.payload.requests;
      State.isLoading = false;
      return { ...State };

    case Actions.FETCH_CLUB_MEMBERS_LIST:
      State.clubMembersList = Action.payload.clubMembersList;
      State.filteredClubMembersList = Action.payload.clubMembersList;
      State.isLoading = false;
      return { ...State };

    case Actions.REQUEST_CHANGED:
      return State;

    case Actions.USER_ADDED:
      return State;

    case Actions.USER_DELETED:
      return State;

    case Actions.ADD_CLUB:
      return State;

    case Actions.FILTRATION_SUCCESS:
      State.filteredClubMembersList = Action.payload.filteredClubMembersList;
      return {...State}

    case Actions.REQUESTS_OF_CLUB:
      return State;

    default:
      return State;
  }
}
