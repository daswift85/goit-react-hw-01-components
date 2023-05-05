import styled from "styled-components";

// export const StyledSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: lightgrey;
// `;

export const StyledH2 = styled.h2`
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;

   :last-child {
    border-right: 1px solid black;
  }
`;