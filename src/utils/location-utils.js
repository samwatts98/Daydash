const fetchCoords = async (s, f) => navigator.geolocation.getCurrentPosition(s, f);

export default fetchCoords;
