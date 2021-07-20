interface RepositoryState {
    loading: boolean;
    error: string | null;
    data: string[];

}

// interface Action {
//     type: string;
//     payload?: any
// }

interface SearchRepositoriesAction {
    type: 'search_repositories'
}

interface SearchRepositoriesSuccessAction {
    type: 'search_repositories_success';
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: 'search_repositories_error';
    payload: string
}

const reducer = (
    state: RepositoryState,
    action:
        SearchRepositoriesAction
        | SearchRepositoriesSuccessAction
        | SearchRepositoriesErrorAction
): RepositoryState
    => {
    switch (action.type) {
        case 'search_repositories':
            return {
                loading: true, error: null, data: []
            }
        case 'search_repositories_success':
            return {
                loading: false, error: null, data: action.payload
            }
        case 'search_repositories_error':
            return {
                loading: false, error: action.payload, data: []
            }
        default:
            return state;
    }
};

export default reducer;