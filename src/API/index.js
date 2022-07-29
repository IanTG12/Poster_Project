import axios from "axios";

const url = "http://localhost:5000/campaign";

export const fetchCampaigns = () => axios.get(url);
export const createCampaign = (newCampaign) => axios.post(url, newCampaign);
