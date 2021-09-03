import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../actions/todos";
import checkIcon from "../assets/icon/check.png";

const Container = styled.div`
  background-color: white;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 0 20px;
`;

const CircleButton = styled.div`
  background-color: white;
  border: 3px solid #f5727e;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  cursor: pointer;
  background-color: ${(props) => (props.check ? "#f5727e" : "white")};
  display: ${(props) => (props.check ? "flex" : "auto")};
  align-items: center;
  justify-content: center;
`;

const TaskName = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;

const Button = styled.div`
  background-color: #bebebe;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  width: min-content;
  color: white;
  letter-spacing: 0.05em;
  cursor: pointer;

  &:hover {
    background-color: #ffc236;
  }
`;

function TaskItem(props) {
  const dispatch = useDispatch();

  return (
    <Container>
      {props.task.isCompleted ? (
        <CircleButton
          check
          onClick={() => dispatch(actions.toggleTask(props.task.idx))}
        >
          <img src={checkIcon} alt="" />
        </CircleButton>
      ) : (
        <CircleButton
          onClick={() => dispatch(actions.toggleTask(props.task.idx))}
        ></CircleButton>
      )}
      <TaskName>{props.task.taskName}</TaskName>
      <Button onClick={() => dispatch(actions.deleteTask(props.task.idx))}>
        Delete
      </Button>
    </Container>
  );
}

export default TaskItem;
