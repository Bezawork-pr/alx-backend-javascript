/* eslint-disable */
export default function getFullResponseFromAPI(success) {
  return new Promise((myResolve, myReject) => {
    if (success == true) {
      return myResolve({ status: 200, body: 'Success' });
    }
    myReject(new Error('The fake API is not working currently'));
  });
}
