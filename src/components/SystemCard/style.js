import styled from "styled-components";

export const SystemCardContainer = styled.div`
  background-color: #f5f5f5;
  width: 900px;
  margin: auto;
  margin-top: 15px;
  border-radius: 5px;
  color: #3778ad;
  padding: 1.5rem;
  h1 {
    font-size: 1.125rem;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.5rem;
  }
  label {
    &:hover{
      transform: scale(1.02);
    }
    /* display: inline-block; */
    margin-top: 0.5rem;
    input {
      margin-right: 0.5rem;
      /* margin-left: 2rem; */
    }
    &:first-child {
      input {
        margin-left: 0rem;
      }
    }
  }
  @media screen and (max-width: 750px) {
    div{
      display: flex;
      flex-direction: column;
    }
  }
`;
