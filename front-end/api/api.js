import axios from "axios";
import "dotenv/config";

// const { NODE_ENV } = process.env;
const URL = "https://deploy-spotify-replica.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
