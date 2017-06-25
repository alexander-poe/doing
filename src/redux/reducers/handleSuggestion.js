export default (state = {}, action) => {
  switch (action.type) {
    case 'fetchSuggestionSuccess':
      return action.suggestion;
    case 'clearSuggestion':
      return {};
    default:
      return state;
  }

  return state;
};
