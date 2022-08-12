import React, { useState, useRef } from 'react'
import { ReactComponent as PasswordIcon } from './img/password.svg'
import { InnerWrapper, Type, Input, PasswordIconWrapper, ErrorMsg } from './InputFieldStyled'

interface Props {
  theInitialFirstType: string,
  type: string,
  placeholder: string,
  setType?: (params: string) => void,
  permanentType?: (params: string) => void,
  required: boolean,
  reactHookFormRegister: object,
  value: string,
  error: boolean,
  errorMsg: string,
}

const InputField: React.FC<Props> =  ({
  theInitialFirstType,
  type,
  placeholder,
  setType,
  required,
  reactHookFormRegister,
  value,
  error,
  errorMsg
}) => {
  const inputEl = useRef(null)
  const [focus, setFocus] = useState<boolean>(false)

  const imgPassword = () => {
    if (theInitialFirstType === 'password') {
      return <PasswordIconWrapper>
        <PasswordIcon
          onClick={ onClickHandler }
        />
      </PasswordIconWrapper>
    }
    return null
  }

  const onClickHandler = () => {
    const currentType = type === 'password' ? 'text' : 'password'
    if (setType !== undefined) {
      return setType(currentType)
    }
  }

  const onFocusHandler = () => {
    setFocus(true)
  }

  const onBlurHandler = () => {
    setFocus(false)
  }

  return (
    <div>
      <InnerWrapper error={error} focused={focus} empty={value.length === 0}>
        <Type focused={focus} empty={value.length === 0}>{ placeholder }</Type>
        <Input
          error={error}
          focused={focus}
          empty={value.length === 0}
          ref={inputEl}
          type={type}
          {...reactHookFormRegister}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          required={required}
        />
        { imgPassword() }
      </InnerWrapper>
      { error && errorMsg.length ? <ErrorMsg>{ errorMsg }</ErrorMsg> : null }
    </div>
  )
}

export default InputField
