import React from 'react'
import { getToken } from '@rc-ses/mfe-host'
import { RcSesTextField } from '@registrucentras/rc-ses-react-components'

function BasicInformationForm() {
  return (
    <RcSesTextField
      value={getToken()}
      label='JWT'
      multiline
      slotProps={{
        field: {
          readOnly: true,
          rows: 10,
          sx: { minHeight: '200px' },
        },
      }}
    />
  )
}

export default BasicInformationForm
