import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/todos";

import TaskList from "./TaskList";
import addIcon from "../assets/icon/add.png";

const Wrapper = styled.div`
  background-color: #3c5d95;
  height: 100vh;
  padding-top: 70px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
  color: #ffc236;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #333;
  width: 300px;
  font-size: 16px;
  letter-spacing: 0.05em;

  img {
    cursor: pointer;
  }

  &::placeholder {
    color: #333;
  }
`;

const AddTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 25px auto 40px;
`;

const AddBtnImg = styled.img`
  cursor: pointer;
`;

function App() {
  const dispatch = useDispatch();

  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const handleClick = (event) => {
    dispatch(actions.addTask(newTask));
    setnewTask("");
  };

  return (
    <Wrapper>
      <Title>Todolist</Title>
      <AddTaskContainer>
        <Input
          name="addtask"
          type="text"
          placeholder={"Add new task ..."}
          value={newTask}
          onChange={handleChange}
        />
        <AddBtnImg src={addIcon} alt="" onClick={() => handleClick()} />
      </AddTaskContainer>
      <TaskList></TaskList>
    </Wrapper>
  );
}

export default App;
