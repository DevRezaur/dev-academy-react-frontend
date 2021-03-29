const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERID':
            return {
                ...state,
                id: action.payload
            };
        case 'SET_FULLNAME':
            return {
                ...state,
                fullname: action.payload
            };
        case 'SET_IMG_URL':
            return {
                ...state,
                imageUrl: action.payload
            };
        case 'SET_CONTACT':
            return {
                ...state,
                contact: action.payload
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload
            };
        case 'SET_ROLE':
            return {
                ...state,
                role: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;