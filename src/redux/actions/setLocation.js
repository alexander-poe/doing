const formatLocation = locationData => ({
  latitude: locationData.coords.latitude,
  longitude: locationData.coords.longitude,
});

export default location => ({
  type: 'SET_LOCATION',
  location: formatLocation(location),
});
