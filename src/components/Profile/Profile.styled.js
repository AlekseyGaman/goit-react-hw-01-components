import styled from 'styled-components';

export const ProfileSection = styled.div`
  margin: 50px 0px 50px 0px;
  padding-top: 30px;
  width: 360px;
  background-color: #f7f8fa;
  box-shadow: 2px 4px 5px -2px rgba(0, 0, 0, 0.93);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ProfileImg = styled.img`
  max-width: 250px;
`;

export const ProfileName = styled.p`
  font-size: 30px;
  margin: 10px 0px 0px 0px;
  color: #233a4f;
`;

export const ProfileTag = styled.p`
  display: flex;
  align-items: flex-end;
  max-width: 250px;
  font-size: 20px;
  margin: 0;
  color: #426685;
`;

export const ProfileLocation = styled.p`
  max-width: 250px;
  font-size: 20px;
  margin: 0px 0px 10px 0px;
  color: #426685;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #e1e8f7;
`;

export const ProfileItem = styled.li`
  padding: 10px;
  width: 120px;
  border: 0.5px solid #a2a5a8;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const ProfileLabel = styled.span`
  color: #426685;
  font-size: 20px;
`;
export const ProfileQuantity = styled.span`
  color: #233a4f;
  font-size: 25px;
`;
