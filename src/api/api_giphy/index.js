import axios from "axios";

export function apiGetIMG() {
  return axios.get('https://api.giphy.com/v1/gifs/search?api_key=5b95537b316f4cacaec0b5c753cbd563&q=IT ACADEMY&limit=60&offset=0&rating=G&lang=en')
        .then((response) => response)
        .catch((error) => {
            console.log(error);
        });
}
