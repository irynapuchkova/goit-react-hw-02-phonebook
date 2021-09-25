import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 100px;
`
export const Heading = styled.h1`
  position: relative;
  display: inline-block;
  margin: 15px auto 15px 20px;

  font-family: 'Merriweather', serif;
  font-size: 40px;
  letter-spacing: 1px;
  
  color: #465457;

  &:before {
    content: "";
    position: absolute;
    top: -8%;
    left: -12px;
    width: 80px;
    height: 20px;
    border-top: 4px solid #fed57b;
    border-left: 2px solid #fed57b;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -8%;
    right: -12px;
    width: 80px;
    height: 20px;
    border-bottom: 4px solid #fed57b;
    border-right: 2px solid #fed57b;
  }
`
export const Title = styled.h2`
  display: inline-block;
  margin: 15px auto 15px 20px;

  font-family: 'Merriweather', serif;
  font-size: 28px;
  letter-spacing: 1px;
  
  color: #465457;

  text-align: left;
  padding: 0 0 6px 10px;
  border-left: 10px solid #fed57b;
  border-bottom: 2px solid #fed57b;
`
