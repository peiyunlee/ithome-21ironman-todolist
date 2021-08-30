import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  background-color: #bebebe;
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  padding: 5px 10px;
  width: min-content;
  color: white;
  margin-right: 10px;
  letter-spacing: 0.1em;

  &:hover {
    background-color: #FFC236;
  }
`;

function Filter() {
  return (
    <ButtonContainer>
      <Button>Todo</Button>
      <Button>Done</Button>
    </ButtonContainer>
  );
}

export default Filter;
