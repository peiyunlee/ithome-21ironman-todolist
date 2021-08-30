import styled from "styled-components";
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
  width: 20px;
  height: 20px;

  //   background-color: #f5727e;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
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

  &:hover {
    background-color: #ffc236;
  }
`;

function TaskList() {
  return (
    <Container>
      <CircleButton>
        <img src={checkIcon} alt="" />
      </CircleButton>
      <TaskName>NEW TASK</TaskName>
      <Button>Delete</Button>
    </Container>
  );
}

export default TaskList;
