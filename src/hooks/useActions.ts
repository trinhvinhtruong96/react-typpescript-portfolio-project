import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
export const useActions = () => {
    const dispatch = useDispatch();

    // bind all the action in actionCreators dispatch: {action: dispatch(action)}
    return bindActionCreators(actionCreators, dispatch);
}