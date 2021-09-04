import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../actions/filter";

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  background-color: ${(props) => (props.active ? "#ffc236" : "#bebebe")};
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  padding: 5px 10px;
  color: white;
  margin-right: 10px;
  letter-spacing: 0.1em;
  text-align: center;
  cursor: pointer;
`;

function Filter(props) {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <Button
        active={props.selected === "SHOW_ALL"}
        onClick={() => dispatch(actions.setFilter("SHOW_ALL"))}
      >
        ALL
      </Button>
      <Button
        active={props.selected === "SHOW_TODO"}
        onClick={() => dispatch(actions.setFilter("SHOW_TODO"))}
      >
        TODO
      </Button>
      <Button
        active={props.selected === "SHOW_DONE"}
        onClick={() => dispatch(actions.setFilter("SHOW_DONE"))}
      >
        DONE
      </Button>
    </ButtonContainer>
  );
}

export default Filter;
