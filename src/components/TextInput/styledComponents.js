import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5d0fe;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Paragraph = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  padding-right: 10px;
`
export const Input = styled.input`
  height: 30px;
  width: 250px;
  outline: none;
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
`

export const Button = styled.button`
  height: 30px;
  width: 55px;
  cursor: pointer;
  background-color: #d946ef;
  color: #ffffff;
  border-width: 0px;
  font-size: 13px;
  font-family: 'Roboto';
`
