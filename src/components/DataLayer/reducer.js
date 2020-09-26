export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQDPq3-8fNu8QUieTWzMLZfRr1ns2nGTTlHK_Nq3Ijt5PDlX6Q…wcSJCtQ_KLpaICzej5R5reaS5PkfjQl3VgPJf5ovg-7kzNtpB'
}

const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default: 
            return state
    }
}


export default reducer;