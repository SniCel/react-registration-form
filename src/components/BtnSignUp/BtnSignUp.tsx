import React from 'react'
import { Button, Text } from './BtnSignUpStyled'

interface Props {
  loader: boolean,
  text: string
}

const BtnSignUp: React.FC<Props> = ({
  loader,
  text
}) => {
  return (
    <Button type="submit">
      <Text>
        { text }
        { loader && '...' }
      </Text>
    </Button>
  )
}

export default BtnSignUp
