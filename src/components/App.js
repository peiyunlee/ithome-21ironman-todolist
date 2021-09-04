import styled from "styled-components";
import "./app.css";

import TaskList from "./TaskList";
import AddTask from "./AddTask";

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

function App() {
  return (
    <Wrapper>
      <Title>Todolist</Title>
      <AddTask />
      <TaskList />
    </Wrapper>
  );
}

export default App;
