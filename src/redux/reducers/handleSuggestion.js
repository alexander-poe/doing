export default (state = {}, action) => {
  switch (action.type) {
    case 'fetchSuggestionSuccess':
      return action.suggestion;
    case 'nextSuggestion':
      return action.suggestion;
    default:
      return state;
  }
};
