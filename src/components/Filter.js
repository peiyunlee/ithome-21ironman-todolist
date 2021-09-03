import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../actions/filter";

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  background-color: #bebebe;
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  padding: 5px 10px;
  width: 45px;
  color: white;
  margin-right: 10px;
  letter-spacing: 0.1em;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #ffc236;
  }
`;

function Filter() {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <Button onClick={() => dispatch(actions.setFilter("SHOW_ALL"))}>
        All
      </Button>
      <Button onClick={() => dispatch(actions.setFilter("SHOW_TODO"))}>
        Todo
      </Button>
      <Button onClick={() => dispatch(actions.setFilter("SHOW_DONE"))}>
        Done
      </Button>
    </ButtonContainer>
  );
}

export default Filter;
