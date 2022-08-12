import styled from 'styled-components'

const Area = styled.div`
  cursor: default;
  background: none;
  border: none;
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 1.0625rem;
  align-items: center;
  text-align: left;
`

const Input = styled.input`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 0.375rem;
  background: #F2F5F8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  transition: border 300ms;
  position: relative;
  overflow: hidden;
  &:focus {
    outline: none;
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
  }
`

const Label = styled.label<{ error: boolean }>`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 170%;
  color: ${ props => props.error ? '#F43C3C' : '#31425A' }
`

export {
  Area,
  Input,
  Label
}
