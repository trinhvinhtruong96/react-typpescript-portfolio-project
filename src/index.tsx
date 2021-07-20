import ReactDom from 'react-dom';
import UserSearch from './refs/UserSearch';
// import EventComponent from './events/EventComponent';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';

const App = () => {
    return (
        <div>
            <h1>Hi there !</h1>
            {/* <EventComponent /> */}
            <UserSearch />
            {/* <GuestList /> */}
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);