import styled from "@emotion/styled";

export const Form = styled.form`
  max-width: 400px;
  padding: 20px;

  background: #FAAB1B;
  font-family: 'Oswald', sans-serif;
`
export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;

  font-size: 20px;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 700;

  color: #5a4343;
  text-transform: uppercase;
`
export const AddButton = styled.button`
  display: inline-block;
  padding: 5px 10px;

  background: #ebc785;
  border-color: #e4a736;
  border-radius: 5px;
  color: #5a4343;

  cursor: pointer;

&:hover, &:focus {
  background-color: #9db33b;
  border-color: #61ec11;
  }
`