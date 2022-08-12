import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #fff;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  padding: 0 11.1875rem;
`

const Mark = styled.div`
  width: 6.75rem;
  height: 6.75rem;
  background: #17BA87;
  box-shadow: 0 17px 31px rgba(44, 202, 117, 0.25);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem auto;
`

const Heading = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 3.75rem;
  line-height: 4.125rem;
  color: #333;
  margin-bottom: 0.875rem;
`

const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 175%;
  color: #76879E;
  letter-spacing: 0.02rem;
`

export {
  Wrapper,
  Mark,
  Heading,
  Description
}
