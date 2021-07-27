import { useActions } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
    previousCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId: nextCellId }) => {

    const { insertCellAfter } = useActions();

    return (
        <div className="add-cell" style={!nextCellId ? { opacity: 1, marginTop: '20px' } : {}}>
            <div className="add-buttons">
                <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'code')}>
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Code</span>
                </button>
                <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'text')}>
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Text</span>
                </button>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default AddCell;