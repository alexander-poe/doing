export default (state = {}, action) => {
  switch (action.type) {
    case 'fetchSuggestionSuccess':
      console.log(action.suggestion, 'jfd');
      return action.suggestion;
    case 'nextSuggestion':
      return action.suggestion;
    default:
      return state;
  }
};
