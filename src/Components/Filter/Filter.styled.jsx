import styled from "@emotion/styled";

export const FinderWrapper = styled.div`
  max-width: 400px;
  padding: 20px;
  margin-bottom: 10px;
  
  font-family: 'Oswald', sans-serif;

  background: #f5b975;
`
export const PlaceHolder = styled.label`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

font-size: 16px;
font-weight: 700;

color: #3d2c2c;
transition: .3s linear;

  &:hover {
    width: 300px;
  }
`
export const Finder = styled.input`
height: 32px;
`
