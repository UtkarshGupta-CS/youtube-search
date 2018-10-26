import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${'' /* position: absolute; */}
`;

export const Logo = styled.img`
  height: 180px;
  width: 320px;
  border-radius: 10px;
  margin: 20px;
`;
