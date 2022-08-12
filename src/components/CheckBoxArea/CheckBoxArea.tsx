import React from 'react'
import { Area, Input, Label } from './CheckBoxAreaStyled'

interface Props {
  textDescription: string,
  required: boolean,
  reactHookFormRegister: object,
  error: boolean
}

const CheckBoxArea: React.FC<Props> = ({
  textDescription,
  required,
  reactHookFormRegister,
  error
}) => {
  return (
    <Area>
      <Input
        id="checkbox-area__input"
        type="checkbox"
        required={required}
        {...reactHookFormRegister}
      />
      <Label error={error} htmlFor="checkbox-area__input">{ textDescription }</Label>
    </Area>
  )
}

export default CheckBoxArea
