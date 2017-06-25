const fetchSuggestionSuccess = suggestion => ({
  type: 'fetchSuggestionSuccess',
  suggestion,
});

const clear = () => ({
  type: 'clearSuggestion',
});

export const clearSuggestion = () => (dispatch) => {
  dispatch(clear());
};

const fetchSuggestion = collection => (dispatch) => {
  dispatch(fetchSuggestionSuccess(collection[Math.floor(Math.random() * collection.length)]));
};


export default fetchSuggestion;
