import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
    )
}

export default RepositoriesList;