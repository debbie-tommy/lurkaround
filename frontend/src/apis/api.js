import request from '../request.js';

// Get the feed list data from the server, and then use the callback function to process the fetched data.
export const getFeedList = (start = 0, callback, hideLoading = true) => {
  return new Promise((resolve, reject) => {
    request(
      '/job/feed',
      { start: start },
      { method: 'get', hideLoading: hideLoading }
    ).then((res) => {
      callback(res);
    });
  });
};
export const getUserInfo = (userId) => {
  request('/user', { userId: userId }, { method: 'get' })
    .then((res) => {
      res.jobs = null;
      localStorage.setItem('userInfo', JSON.stringify(res));
    })
    .catch((error) => {
      console.log(error);
    });
};
