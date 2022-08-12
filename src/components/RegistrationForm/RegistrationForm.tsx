import React, { useState, useEffect, useRef } from 'react'
import { useForm, SubmitHandler } from  'react-hook-form'
import InputField from '../InputField/InputField'
import BtnSignUp from '../BtnSignUp/BtnSignUp'
import { Wrapper, SuccessMsg, Heading, SecondaryText, Hr, Form, Row } from './RegistrationFormStyled'
import SelectField from '../SelectField/SelectField'
import BtnSwitch from '../BtnSwitch/BtnSwitch'
import CheckBoxArea from '../CheckBoxArea/CheckBoxArea'
import SuccessRegistration from '../SuccessRegistration/SuccessRegistration'
import { useTranslation } from 'react-i18next'

type Inputs = {
  email: string
  firstName: string,
  secondName: string,
  language: string,
  country: string,
  password: string,
  confirmPassword: string,
  privacyPolicy: boolean
}

interface ConfigItem {
  placeholder: string,
  errorMsg: string,
  validation: {
    required: boolean | string,
    pattern?: any,
    minLength?: number,
    maxLength?: number
  }
}

const RegistrationForm: React.FC = () => {
  const API = {
    COUNTRIES: process.env.REACT_APP_COUNTRIES_API
  }

  const { t } = useTranslation()

  const config: {
    email: ConfigItem,
    firstName: ConfigItem,
    secondName: ConfigItem,
    language: ConfigItem,
    countries: ConfigItem,
    password: ConfigItem,
    confirmPassword: ConfigItem,
    privacyPolicy: ConfigItem
  } = {
    email: {
      placeholder: t('form.email.placeholder'),
      errorMsg: t('form.email.errorMsg'),
      validation: {
        required: true,
        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
    },
    firstName: {
      placeholder: t('form.firstName.placeholder'),
      errorMsg: t('form.firstName.errorMsg'),
      validation: {
        required: true,
        minLength: 2,
        maxLength: 100
      }
    },
    secondName: {
      placeholder: t('form.secondName.placeholder'),
      errorMsg: t('form.secondName.errorMsg'),
      validation: {
        required: true,
        minLength: 2,
        maxLength: 100
      }
    },
    language: {
      placeholder: t('form.language.placeholder'),
      errorMsg: t('form.language.errorMsg'),
      validation: {
        required: true
      }
    },
    countries: {
      placeholder: t('form.countries.placeholder'),
      errorMsg: t('form.countries.errorMsg'),
      validation: {
        required: true
      }
    },
    password: {
      placeholder: t('form.password.placeholder'),
      errorMsg: t('form.password.errorMsg'),
      validation: {
        required: true,
        minLength: 5,
        maxLength: 100
      }
    },
    confirmPassword: {
      placeholder: t('form.confirmPassword.placeholder'),
      errorMsg: t('form.confirmPassword.errorMsg'),
      validation: {
        required: true,
        minLength: 5
      }
    },
    privacyPolicy: {
      placeholder: '',
      errorMsg: '',
      validation: {
        required: true
      }
    }
  }

  const [languageOptions] = useState([
    { value: 'Slovak', label: 'Slovak' },
    { value: 'English', label: 'English' }
  ])
  const [countries, setCountries] = useState<Array<{ value: string, label: string }>>([])
  const { register, control, handleSubmit, watch, reset, formState: { errors } } = useForm<Inputs>()

  const password = useRef({})
  password.current = watch('password', '')

  const [privateProfile, setPrivateProfile] = useState<boolean>(false)

  const [successMsg, setSuccessMsg] = useState<boolean>(false)

  const [requestIsSending, setRequestIsSending] = useState<boolean>(false)

  const onSubmit: SubmitHandler<Inputs> = (requiredData) => {
    const dataThatWillBeSend = {
      ...requiredData,
      privateProfile: privateProfile
    }
    // POST request...
    setRequestIsSending(true)
    setTimeout(() => {
      console.log(dataThatWillBeSend)
      setSuccessMsg(true)
      setTimeout(() => { setSuccessMsg(false) }, 4000)
      reset({
        email: '',
        firstName: '',
        secondName: '',
        language: '',
        country: '',
        password: '',
        confirmPassword: '',
        privacyPolicy: false
      })
      setPrivateProfile(false)
      setRequestIsSending(false)
    }, 2000)
  }

  useEffect(() => {
    if (API.COUNTRIES) {
      fetch(API.COUNTRIES)
      .then(res => res.json())
      .then(data => {
        const newData = data.map((item: { name: string }) => {
          return {
            value: item.name,
            label: item.name
          }
        })
        setCountries(newData)
      })
      .catch(error => console.error(error))
    }
  }, [API.COUNTRIES])

  return (
    <Wrapper requestIsSending={requestIsSending}>
      <SuccessMsg show={successMsg}>
        <SuccessRegistration />
      </SuccessMsg>
      <Heading>{ t('form.title') }</Heading>
      <Form
        noValidate
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <InputField
            theInitialFirstType="email"
            type="email"
            placeholder={config.email.placeholder}
            required={true}
            reactHookFormRegister={{ ...register('email', { ...config.email.validation }) }}
            value={watch('email') || ''}
            error={!!errors.email}
            errorMsg={config.email.errorMsg}
          />
        </Row>
        <InputField
          theInitialFirstType="text"
          type="text"
          placeholder={config.firstName.placeholder}
          required={!!config.firstName.validation.required}
          reactHookFormRegister={{ ...register('firstName', { ...config.firstName.validation }) }}
          value={watch('firstName') || ''}
          error={!!errors.firstName}
          errorMsg={config.firstName.errorMsg}
        />
        <InputField
          theInitialFirstType="text"
          type="text"
          placeholder={config.secondName.placeholder}
          required={!!config.secondName.validation.required}
          reactHookFormRegister={{ ...register('secondName', { ...config.secondName.validation }) }}
          value={watch('secondName') || ''}
          error={!!errors.secondName}
          errorMsg={config.secondName.errorMsg}
        />
        <SelectField
          name="language"
          placeholder={config.language.placeholder}
          options={languageOptions}
          error={!!errors.language}
          errorMsg={config.language.errorMsg}
          reactHookFormControl={control}
        />
        <SelectField
          name="country"
          placeholder={config.countries.placeholder}
          options={countries}
          error={!!errors.country}
          errorMsg={config.countries.errorMsg}
          reactHookFormControl={control}
        />
        <InputField
          theInitialFirstType="password"
          type="password"
          placeholder={config.password.placeholder}
          required={!!config.password.validation.required}
          reactHookFormRegister={{ ...register('password', { ...config.password.validation }) }}
          value={watch('password') || ''}
          error={!!errors.password}
          errorMsg={config.password.errorMsg}
        />
        <InputField
          theInitialFirstType="password"
          type="password"
          placeholder={config.confirmPassword.placeholder}
          required={!!config.confirmPassword.validation.required}
          reactHookFormRegister={
            {
              ...register('confirmPassword',
                { validate: value => value === password.current })
            }
          }
          value={watch('confirmPassword') || ''}
          error={!!errors.confirmPassword}
          errorMsg={config.confirmPassword.errorMsg}
        />
        <Row center>
          <SecondaryText>{ t('form.privateProfile.text') }</SecondaryText>
          <BtnSwitch
            privateProfile={privateProfile}
            setPrivateProfile={setPrivateProfile}
          />
        </Row>
        <Row>
          <Hr></Hr>
        </Row>
        <Row signup>
          <BtnSignUp
            text={t('form.btnSignUp.text')}
            loader={requestIsSending}
          />
          <CheckBoxArea
            textDescription={t('form.checkBoxArea.text')}
            required={!!config.privacyPolicy.validation.required}
            reactHookFormRegister={{ ...register('privacyPolicy', { ...config.privacyPolicy.validation }) }}
            error={!!errors.privacyPolicy}
          />
        </Row>
      </Form>
    </Wrapper>
  )
}

export default RegistrationForm
