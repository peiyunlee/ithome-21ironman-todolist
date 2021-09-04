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
        ALL
      </Button>
      <Button onClick={() => dispatch(actions.setFilter("SHOW_TODO"))}>
        TODO
      </Button>
      <Button onClick={() => dispatch(actions.setFilter("SHOW_DONE"))}>
        DONE
      </Button>
    </ButtonContainer>
  );
}

export default Filter;
