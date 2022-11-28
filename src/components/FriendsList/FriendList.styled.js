import styled from 'styled-components';

export const FriendStyleList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin-bottom: 50px;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 100px;
  background-color: #f7f8fa;
  box-shadow: 2px 4px 5px -2px rgba(0, 0, 0, 0.93);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${prop => (prop.online ? 'green' : 'red')};
`;

export const FriendImg = styled.img`
  width: 80px;
`;

export const FriendName = styled.p`
  font-size: 25px;
  color: #233a4f;
`;
