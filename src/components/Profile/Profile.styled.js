import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
`;

export const StatsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #777;
  margin-bottom: 10px;
  flex-direction: column;
  padding: 0 10px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;

  :last-child {
    border-right: 1px solid lightgrey;
  }
`;

export const StatName = styled.span`
  font-size: 12px;
  margin-top: 10px;

`;

export const StatValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;