const API_BASE_URL = "https://cms.samespace.com/items/songs";

export const FetchSongs = async ()=>{
try {
  const response =await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
}

const data= await response.json();
return data;
} catch (error) {
  console.error('There has been a problem with your fetch operation:', error);
}
}