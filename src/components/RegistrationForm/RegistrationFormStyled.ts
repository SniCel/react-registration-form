import styled from 'styled-components'

const Wrapper = styled.div<{ requestIsSending: boolean }>`
  width: 54.625rem;
  max-width: 54.625rem;
  background: #fff;
  border-radius: 1.563rem;
  padding: 1.563rem 1.25rem 1.25rem 1.25rem;
  position: relative;
  overflow: hidden;
  pointer-events: ${ props => props.requestIsSending ? 'none' : 'auto' };
  @media only screen and (min-width: 900px) {
    padding: 5.875rem 6.625rem 8.75rem 6.625rem;
  }
`

const SuccessMsg = styled.div<{ show: boolean }>`
  position: absolute;
  top: ${ props => props.show ? '0' : '-100%' };
  left: 0;
  transition: all 600ms;
  z-index: 10;
  width: 100%;
  height: 100%;
`

const Heading = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.438rem;
  color: #333333;
  text-align: left;
  margin-bottom: 1.813rem;
  margin-top: 0;
  @media only screen and (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 4.375rem;
    margin-bottom: 3.625rem;
    text-align: center;
  }
`

const SecondaryText = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #1C2D41;
`

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: #F1F3F5;
`

const Form = styled.form`
  display: grid;
  grid-gap: 1.25rem;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.625rem;
  }
`

const Row = styled.div<{ center?: boolean, signup?: boolean }>`
  grid-column: 1/-1;
  ${ 
    props => props.center && `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
  }
  ${
    props => props.signup && `
      display: grid;
      grid-gap: 1.875rem;
      align-items: center;
      @media only screen and (min-width: 768px) {
        grid-template-columns: 16.75rem auto;
        grid-gap: 2.313rem;
        justify-content: space-between;
      }
    `
  }
`

export {
  Wrapper,
  SuccessMsg,
  Heading,
  SecondaryText,
  Hr,
  Form,
  Row
}
