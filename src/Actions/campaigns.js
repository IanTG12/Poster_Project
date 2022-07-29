import * as api from "../API";

import { FETCH_ALL, CREATE } from "../Constants/actionTypes";

export const getCampaigns = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCampaigns();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCampaign = (campaign) => async (dispatch) => {
  try {
    const { data } = await api.createCampaign(campaign);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
