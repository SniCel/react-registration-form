import React from 'react'
import { ReactComponent as CheckMarkIcon } from './img/checkMark.svg'
import { useTranslation } from 'react-i18next'
import { Wrapper, Mark, Heading, Description } from './SuccessRegistrationStyled'

const SuccessRegistration: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Mark className="success-registration__mark">
        <CheckMarkIcon />
      </Mark>
      <Heading>{ t('form.success.text') }</Heading>
      <Description>{ t('form.success.desc') }</Description>
    </Wrapper>
  )
}

export default SuccessRegistration
