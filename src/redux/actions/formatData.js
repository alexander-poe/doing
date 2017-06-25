export default collection => collection.map((place) => {
  const photoSrc = place.photos ? place.photos[0].photo_reference : null;
  const imageSrc = place.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoSrc}${process.env.REACT_APP_GOOGLE_KEY}` : null;


  return {
    name: place.name,
    img: imageSrc,
    hours: place.opening_hours,
    address: place.vicinity,
    rating: place.rating,
  };
});
