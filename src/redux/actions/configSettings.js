const setSettings = settings => ({
  type: 'SET_CONFIG',
  settings
});

export default settings => (dispatch) => {
  dispatch(setSettings(settings));
};
