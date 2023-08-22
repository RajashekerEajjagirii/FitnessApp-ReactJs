
export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      'X-RapidAPI-Key': '537f9eac5cmsh6e54c0cc5c27f6fp1221c1jsn31061fb11d98'
    }
  };

export const youtubeOptions={
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '537f9eac5cmsh6e54c0cc5c27f6fp1221c1jsn31061fb11d98'
  }
};

export const fetchData=async(url,options)=>{

    const response=await fetch(url,options);
    const data= await response.json();

    return data;
};