import axios from 'axios';
const API_URL = 'http://localhost:8080';
export class APIService{

constructor(){
}
  getItems() {
    const url = '${API_URL}/routes/items';
    return axios.get(url).then(response => response.data);
  }

  getItems(itemId) {
    const url = '${API_URL}/routes/items/${itemId}';
    return axios.get(url).then(response => response.data);
  }
}
