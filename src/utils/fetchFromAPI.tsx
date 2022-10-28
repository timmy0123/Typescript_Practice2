import axios from 'axios';

export const BASE_URL1 = 'https://youtube-v31.p.rapidapi.com/search';
export const BASE_URL2 = 'https://youtube-v31.p.rapidapi.com/channels';
export const BASE_URL3 = 'https://youtube-v31.p.rapidapi.com/videos';

const options = {
  method: 'GET',
  params: {
    part: 'snippet',
    q:'new',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '89cbb374afmshcef25f4f7e40dfcp1a579cjsn992b7daae105',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
const options2 = {
  method: 'GET',
  params: {
    part: 'snippet',
    id:'',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '89cbb374afmshcef25f4f7e40dfcp1a579cjsn992b7daae105',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
const options3 = {
  method: 'GET',
  params: {
    part: 'snippet',
    channelId:'',
    order:'date',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '89cbb374afmshcef25f4f7e40dfcp1a579cjsn992b7daae105',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
const options4 = {
  method: 'GET',
  params: {
    part: 'snippet,statistics',
    id:'',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '89cbb374afmshcef25f4f7e40dfcp1a579cjsn992b7daae105',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
const options5 = {
  method: 'GET',
  params: {
    part: 'snippet',
    relatedToVideoId:'',
    type:'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '89cbb374afmshcef25f4f7e40dfcp1a579cjsn992b7daae105',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (selectedCategory:string,id:string,Condition:number) => {
  if (Condition === 2){
    options2.params.id = id
    const { data } = await axios.get(`${BASE_URL2}`, options2);
    return data;
  }  else if(Condition === 3){
    options3.params.channelId = id
    const { data } = await axios.get(`${BASE_URL1}`, options3);
    return data;
  }else if(Condition === 1){
    options.params.q = selectedCategory
    const { data } = await axios.get(`${BASE_URL1}`, options);
    return data;
  }else if(Condition === 4) {
    options4.params.id = id
    const { data } = await axios.get(`${BASE_URL3}`, options4);
    return data;
  }else {
    options4.params.id = id
    const { data } = await axios.get(`${BASE_URL1}`, options5);
    return data;
  }
};