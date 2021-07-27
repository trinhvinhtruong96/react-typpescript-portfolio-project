import { Fragment } from "react";
import { useTypeSelector } from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";

const CellList: React.FC = () => {

    const cells = useTypeSelector(({ cells: { order, data } }) => order.map((id) => data[id]));

    const renderedCells = cells.map(cell => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell previousCellId={cell.id} />
        </Fragment>
    ))

    return (
        <div>
            {renderedCells}
        </div>
    )
};

export default CellList;