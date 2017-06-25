export default (state = {}, action) => {
  if (action.type === 'fetchSuggestionSuccess') {
    return action.suggestion;
  }

  return state;
};
