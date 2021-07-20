import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actionCreators.searchRepositories(term));
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
    )
}

export default RepositoriesList;