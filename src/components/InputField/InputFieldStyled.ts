import styled from 'styled-components'

const InnerWrapper = styled.div<{ error: boolean, focused: boolean, empty: boolean }>`
  border: ${ props => props.error ? '1px solid #F43C3C' : '1px solid transparent' };
  height: 4rem;
  position: relative;
  display: block;
  border-radius: .875rem;
  width: 100%;
  overflow: hidden;
  transition: all 200ms;
  box-shadow: ${ props => !props.empty && !props.focused ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : 'none' };
  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: ${ props => props.focused ? '100%' : '0' };
    height: .125rem;
    background: ${ props => props.error? '#F43C3C' : '#004EEF' };
    transition: all 300ms;
  }
  ${ props => !props.focused && !props.error && `
    &:hover {
      border: 1px solid #D5DBE2;
    }
  `}
`

const Type = styled.div<{ focused: boolean, empty: boolean }>`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: ${ props => props.focused || !props.empty ? '.75rem' : '1rem' };
  color: #76879E;
  position: absolute;
  left: 1.125rem;
  top: ${ props => props.focused || !props.empty ? '.8125rem' : '50%' };
  transform: ${ props => props.focused || !props.empty ? 'none' : 'translate(0, -50%)' };
  transition: all 300ms;
  pointer-events: none;
`

const Input = styled.input<{ type?: string, empty: boolean, focused: boolean, error: boolean }>`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  background: ${ props => !props.empty && !props.focused ? '#fff' : '#F6F8FA' };
  color: ${ props => props.error ? '#F43C3C' : '#76879E' };
  color: ${ props => props.focused || !props.empty ? '#1B2C45' : null };
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 1.125rem;
  padding-top: ${ props => props.focused || !props.empty ? '1.25rem' : null };
  padding-right: ${ props => props.type && props.type === 'password' ? '3.7rem' : null };
  &:hover,
  &:focus {
    outline: none;
  }
`

const PasswordIconWrapper = styled.span`
  position: absolute;
  top: calc(50% - 10px);
  right: 1.5625rem;
  pointer-events: none;
`

const ErrorMsg = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #F43C3C;
  padding-left: 1.125rem;
  margin-top: 0.3125rem;
`

export {
  InnerWrapper,
  Type,
  Input,
  PasswordIconWrapper,
  ErrorMsg
}
