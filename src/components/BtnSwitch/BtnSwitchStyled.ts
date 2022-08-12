import styled from 'styled-components'

const Button = styled.button<{ privateProfile: boolean }>`
  min-width: 3.75rem;
  height: 1.875rem;
  border-radius: 0.625rem;
  border: none;
  padding: 0.1875rem;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 300ms;
  background: ${ props => props.privateProfile ? '#004EEF' : '#F2F5F8' };
  &:focus {
    outline: none;
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
  }
`

const Text = styled.span<{ privateProfile: boolean }>`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.6875rem;
  line-height: 0.6875rem;
  color: ${ props => props.privateProfile ? '#fff' : '#76879E' };
  padding-right: ${ props => props.privateProfile ? '1.5625rem' : '.5625rem' };
  padding-left: ${ props => props.privateProfile ? '.5625rem' : '1.5625rem' };
`

const Box = styled.span<{ privateProfile: boolean }>`
  display: block;
  width: 1.1875rem;
  height: calc(100% - 6px);
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.12);
  border-radius: 0.4375rem;
  background: #fff;
  position: absolute;
  top: 0.1875rem;
  transition: all 300ms;
  color: #fff;
  background: ${ props => props.privateProfile ? '#F1F3F5' : '#fff' };
  left: ${ props => props.privateProfile ? 'calc(100% - 22px)' : '0.25rem' };
`
export {
  Button,
  Text,
  Box
}
