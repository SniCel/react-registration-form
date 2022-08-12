import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, Box } from './BtnSwitchStyled'

interface Props {
  privateProfile: boolean,
  setPrivateProfile: (params: boolean) => void
}

const BtnSwitch: React.FC<Props> = ({
  privateProfile,
  setPrivateProfile
}) => {
  const { t } = useTranslation()

  return (
    <Button
      privateProfile={privateProfile}
      type="button"
      onClick={(): void => setPrivateProfile(!privateProfile)}
    >
      <Text privateProfile={privateProfile}>
        { privateProfile ? t('form.btnSwitch.yes') : t('form.btnSwitch.no') }
      </Text>
      <Box privateProfile={privateProfile} />
    </Button>
  )
}

export default BtnSwitch
