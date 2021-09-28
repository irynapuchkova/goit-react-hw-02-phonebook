import styled from "@emotion/styled";

export const Name = styled.p`
  font-family: inherit;
  font-size: 100%;
  font-size: 16px;
  font-weight: 500;

  line-height: 1.15;
`
export const Tel = styled.span`
  font-family: inherit;
  font-size: 100%;
  font-size: 16px;
  font-weight: 600;

  line-height: 1.15;
`
export const DeleteBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  padding: 5px 10px;

  background: #bba172;
  border-color: #887145;
  border-radius: 5px;
  color: #5a4343;

  cursor: pointer;
  transition: .3s cubic-bezier(.075, .82, .165, 1);

&:hover, &:focus {
  background-color: #da632c;
  border: none;
  }
`