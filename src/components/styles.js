import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: antiquewhite;
  border: 1px solid #ecd6b9;
  font-weight: bold;
  font-size: 22px;
  border-radius: 10px;
  color: #867155;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const NumberDisplay = styled.div`
  margin: 20px;
  width: 50px;
  font-size: 36px;
  text-align: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding-left: 5px;
  border-radius: 10px;
  border: black;
`;

export const VideoRow = styled.div`
  padding: 20px;
  max-width: 700px;
  height: 250px;
  font-size: 12px;
  color: #ffffff;
  display: flex;
  justify-content: "space-around";
  border: white;
`;

export const StyledVideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`