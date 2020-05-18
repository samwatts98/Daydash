const fetchCoords = async (success) => {
  const failure = () => {
    alert('Failed to retrieve location. Please check your Location Permissions.');
  };
  return navigator.geolocation.getCurrentPosition(success, failure);
};


export default fetchCoords;
