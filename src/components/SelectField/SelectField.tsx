import React from 'react'
import Select from 'react-select'
import { Controller } from  'react-hook-form'
import { ErrorMsg } from './SelectFieldStyled'

interface Props {
  placeholder: string,
  options: any,
  error: boolean,
  errorMsg: string,
  reactHookFormControl: any,
  name: string
}

const SelectField: React.FC<Props> = (
  {
    placeholder,
    options,
    error,
    errorMsg,
    reactHookFormControl,
    name
  }
) => {
  return (
    <div className="select-field">
      <Controller
        name={name}
        control={reactHookFormControl}
        rules={{ required: true }}
        render={({ field }) => <Select
          {...field}
          placeholder={placeholder}
          options={options}
          styles={{
            container: (provided) => ({
              ...provided,
              height: '4rem',
              boxSizing: 'border-box'
            }),
            control: (provided, state) => ({
              ...provided,
              height: '100%',
              borderRadius: '.875rem',
              border: error ? '1px solid #F43C3C' : '1px solid transparent',
              borderBottomLeftRadius: state.menuIsOpen ? '0' : '',
              borderBottomRightRadius: state.menuIsOpen ? '0' : '',
              background: state.hasValue ? '#fff' : '#F6F8FA',
              boxShadow: state.hasValue ? '0px 2px 5px rgb(0 0 0 / 10%)' : 'none',
              padding: '0 1.125rem',
              borderBottom: state.menuIsOpen ? '1px solid #F2F5F8' : '',
              transition: 'border 200ms',
              '&:hover': {
                border: state.menuIsOpen ? '1px solid transparent' : '1px solid #D5DBE2'
              }
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              transition: 'transform 300ms',
              transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : ''
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              display: 'none'
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: '0'
            }),
            menu: (provided) => ({
              ...provided,
              margin: '0',
              boxShadow: '0px 12px 34px -12px rgb(0 0 0 / 16%)',
              background: '#fff',
              borderBottomLeftRadius: '0.875rem',
              borderBottomRightRadius: '0.875rem',
              overflow: 'hidden'
            }),
            menuList: (provided) => ({
              ...provided,
              padding: '0',
              boxShadow: '0px 12px 34px -12px rgb(0 0 0 / 16%)'
            }),
            option: (provided, state) => ({
              ...provided,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '500',
              padding: '0.938rem 1.125rem',
              background: state.isSelected ? '#31425A' : '',
              color: state.isSelected ? '#fff' : '#76879E',
              cursor: state.isSelected ? 'default' : 'pointer'
            }),
            singleValue: (provided) => ({
              ...provided,
              color: '#1B2C45',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '500',
            }),
            placeholder: (provided) => ({
              ...provided,
              color: '#76879E',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '500'
            })
          }}
        />}
      />
      { error && errorMsg.length ? <ErrorMsg>{ errorMsg }</ErrorMsg> : null }
    </div>
  )
}

export default SelectField
