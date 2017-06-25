export default (state = [], action) => {
  switch (action.type) {
    case 'SET_BARS':
      return action.bars;
    default:
      return state;
  }
};
