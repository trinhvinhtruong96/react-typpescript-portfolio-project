interface RepositoryState {
    loading: boolean;
    error: string | null;
    data: string[];

}

const reducer = (state: RepositoryState, action: any) => {
    switch (action.type) {
        case 'search_repository':
            return {
                loading: true, error: null, data: []
            }
        case 'search_repository_success':
            return {
                loading: false, error: null, data: action.payload[]
            }
        case 'search-repository_error':
            return {
                loading: false, error: action.payload, data: []
            }

        default:
            return state;
    }
};

export default reducer;