import styled from 'styled-components';

export const StatSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-bottom: 50px;
  background-color: #f7f8fa;
  box-shadow: 2px 4px 5px -2px rgba(0, 0, 0, 0.93);
`;

export const StatTitle = styled.h2`
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #233a4f;
`;

export const StatList = styled.ul`
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  padding: 10px 0px 10px 0px;
  background-color: ${prop => {
    switch (prop.label) {
      case '.docx':
        return '#1fc6fb';
      case '.pdf':
        return '#ce6bff';
      case '.mp3':
        return '#ff6b91';
      case '.psd':
        return '#55cf84';
      default:
        return '#ffff';
    }
  }};
`;

export const StatLabel = styled.span`
  font-size: 20px;
`;
export const StatPercent = styled.span`
  font-size: 30px;
`;
