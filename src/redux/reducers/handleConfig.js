export default (state = [], action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return action.settings;
    default:
      return state;
  }
};
