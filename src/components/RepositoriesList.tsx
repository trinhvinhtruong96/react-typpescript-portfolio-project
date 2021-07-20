import { useState } from 'react';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
    )
}

export default RepositoriesList;