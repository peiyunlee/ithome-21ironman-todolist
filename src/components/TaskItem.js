import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../actions/todos";

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

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
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
    background-color: #F5727E;
  }
`;

function TaskItem(props) {
  const dispatch = useDispatch();

  return (
    <Container>
      <CheckBox
        type="checkbox"
        checked={props.task.isCompleted}
        onChange={() => dispatch(actions.toggleTask(props.task.idx))}
      />
      <TaskName>{props.task.taskName}</TaskName>
      <Button onClick={() => dispatch(actions.deleteTask(props.task.idx))}>
        Delete
      </Button>
    </Container>
  );
}

export default TaskItem;
