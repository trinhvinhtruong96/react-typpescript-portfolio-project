interface ChildProps {
    color: String;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}></button>
        </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>{children}</button>
        </div>
    )
}