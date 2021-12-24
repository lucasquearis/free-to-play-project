import axios from "axios";

const fetchById = async (id) => {
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: {id: `${id}`},
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '1ba37d5745msh42920f154585fbcp1d2fd2jsn8c25ea449380'
    }
  };
  
  return axios.request(options)
    .then((response) => response.data )
    .then(data => data)
    .catch(function (error) {
    console.error(error);
  });
};

export { fetchById }
