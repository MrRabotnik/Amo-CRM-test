import { DealDetails } from "../types/dealDetails.type";
import TaskStatusCircle from "./TaskStatus";

const ExpandedDealCard = ({ deal }: { deal: DealDetails }) => {
    const { id, name, date, taskStatus } = deal;

    return (
        <div>
            <p>
                <strong>ID:</strong> {id}
            </p>
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Date:</strong> {date}
            </p>
            <p>
                <strong>Task Status:</strong> <TaskStatusCircle status={taskStatus} />
            </p>
        </div>
    );
};

export default ExpandedDealCard;
