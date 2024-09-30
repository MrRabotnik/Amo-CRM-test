const TaskStatusCircle: React.FC<{ status: "red" | "green" | "yellow" }> = ({ status }) => {
    const colorMap = {
        red: "#FF0000",
        green: "#00FF00",
        yellow: "#FFFF00",
    };

    return (
        <svg
            height="20"
            width="20"
        >
            <circle
                cx="10"
                cy="10"
                r="10"
                fill={colorMap[status]}
            />
        </svg>
    );
};

export default TaskStatusCircle;
