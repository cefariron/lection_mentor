import axios from 'axios';

const API_KEY = 'heox0BwUDX3B4Fe4UL2hMe7VpHjTbv0De17E2XikfFhoeNcAbsatCMQh';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
