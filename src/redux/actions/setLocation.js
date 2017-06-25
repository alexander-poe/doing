const formatLocation = locationData => ({
  latitude: locationData.coords.latitude,
  longitude: locationData.coords.longitude,
});

export const setLocation = location => ({
  type: 'SET_LOCATION',
  location,
});

export default location => (dispatch) => {
  dispatch(setLocation(formatLocation(location)));
};
