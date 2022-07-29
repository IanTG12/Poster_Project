//add reducers here
import { FETCH_ALL, CREATE } from "../Constants/actionTypes";
export default (campaigns = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return campaigns;
  }
};
