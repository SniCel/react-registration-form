import styled from 'styled-components'

const Button = styled.button`
  height: 3.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.313rem;
  color: #fff;
  width: 100%;
  padding: 0 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 4px 14px rgba(0, 78, 239, 0.19);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    order: 2;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 400ms;
    opacity: 1;
    background: linear-gradient(269.72deg, #004EEF 0.1%, #8600EF 96.94%);
  }
  &:hover {
    &::before {
      transform: rotate(180deg);
    }
  }
  &:focus {
    outline: none;
    &::before {
      transform: rotate(180deg);
    }
  }
`

const Text = styled.span`
  position: relative;
  z-index: 1;
`

export {
  Button, Text
}
