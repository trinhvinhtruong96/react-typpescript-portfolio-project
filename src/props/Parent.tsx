import { ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC color="red" onClick={() => console.log('Click')} >
            Children content
        </ChildAsFC>
    )
}

export default Parent;