import axios from 'axios';

const url = 'api/';

class apiService {
  //Items
  static getItems(){
    return axios.get(url + 'items')
      .then(res => res.data);
  }

  static getItemProfile(){
    return axios.get('../' + url + 'items')
      .then(res => res.data);
  }

  static postItems(newItem, headers){
    return axios.post(url + 'items', newItem, headers);
  }

  static postBookmark(id, user){
    const requestUrl = `${url}users/bookmarks/${user}`;
    return axios.post(requestUrl, {itemId: id});
  }

  static getBookmarks(userId){
    const requestUrl = `${url}users/${userId}/bookmarks`;
    return axios.get(requestUrl)
  }

  static deleteBookmark(user, id){
    const requestUrl = `${url}users/removebookmark/${user}`;
    return axios.post(requestUrl, {itemId: id}).then();
  }

  //Users
  static createUser(newUser){
    return axios.post(url + 'userSignup/signup', newUser);
  }

  static loginUser(credentials){
    return axios.post(url + 'userSignup/login', credentials);
  }

  static getUserProfile(){
    return axios.get('../' + url + 'users')
      .then(res => res.data);
  }

  static getUser(){
    return axios.get(url + 'users')
      .then(res => res.data);
  }
 }

export default apiService;