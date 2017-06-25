export default (state = [], action) => {
  switch (action.type) {
    case 'fetchParkSuccess':
      return action.parks;
    default:
      return state;
  }
};

