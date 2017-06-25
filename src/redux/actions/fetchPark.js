import axios from 'axios';

export const fetchParkSuccess = parks => ({
    type: 'fetchParkSuccess',
    parks: parks
})

const fetchPark = (lat, long) => (dispatch) => {
	console.log(process.env.REACT_APP_PARK)
    axios.get('xxxxx' )
        .then(function (response) {
            dispatch(fetchParkSuccess(response))
            console.log(response)
        }).catch(function (error) {
            console.log(error);
    });
}

export default fetchPark;



