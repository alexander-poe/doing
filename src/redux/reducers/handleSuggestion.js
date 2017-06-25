export default (state = {}, action) => {
  switch (action.type) {
    case 'fetchSuggestionSucces':
      return action.suggestion;
    case 'clearSuggestion':
      return {};
    default:
      return state;
  }
};
