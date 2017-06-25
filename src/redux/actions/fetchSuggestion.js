export const fetchSuggestionSuccess = suggestion => ({
  type: 'fetchSuggestionSuccess',
  suggestion,
});

const fetchSuggestion = collection => (dispatch) => {
  dispatch(fetchSuggestionSuccess(collection[Math.floor(Math.random() * collection.length)]));
};


export default fetchSuggestion;
