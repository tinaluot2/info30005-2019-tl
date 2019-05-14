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
  //Users
  static createUser(newUser){
    return axios.post(url + 'userSignup/signup', newUser);
  }

  static loginUser(user){
    return axios.post(url + 'userSignup/login', user);
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