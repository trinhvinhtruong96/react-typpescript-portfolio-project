import ReactDom from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
    return (
        <div>
            <h1>Hi there !</h1>
            <UserSearch />
            {/* <GuestList /> */}
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);