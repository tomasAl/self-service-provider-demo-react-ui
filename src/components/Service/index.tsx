import React from 'react'
import { Typography } from '@mui/material'

import {
  RcSesAccordion,
  RcSesServiceFormActions,
  RcSesServiceFormContainer,
  RcSesServiceHeader,
  RcSesServicePage,
  useAccordionController
} from '@registrucentras/rc-ses-react-components'

import BasicInformationForm from './components/BasicInformationForm'
import ServiceDetailsForm from './components/ServiceDetailsForm'
import ServiceIssuanceForm from './components/ServiceIssuanceForm'
import AdditionalServicesForm from './components/AdditionalServicesForm'
import TermsAndConditionsForm from './components/TermsAndConditionsForm'
import { redirectToSelfServiceDashboard, redirectToServiceDescriptionPage } from '@rc-ses/self-service-portal-ui-root'

function Service() {
  const accordionController = useAccordionController({
    initialState: {
      basicInformation: {
        expanded: false,
        state: 'completed',
        title: 'Bazinė informacija',
      },
      serviceDetails: {
        expanded: true,
        state: 'active',
        title: 'Paslaugos užsakymas',
      },
      serviceIssuance: {
        expanded: false,
        state: 'pending',
        title: 'Išdavimas',
      },
      additionalServices: {
        expanded: false,
        state: 'pending',
        title: 'Reikalingos papildomos paslaugos',
      },
      termsAndConditions: {
        expanded: false,
        state: 'pending',
        title: 'Terminai ir sąlygos',
      },
    },
  })

  return (
    <RcSesServicePage>
      <RcSesServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Pagrindinis', path: '/' },
            { label: 'Formos su vedliu pavyzdys', path: '/' },
          ],
        }}
        title='Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą'
      >
        <Typography variant='body1'>
          Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
          pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
          galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
          padalinyje.
        </Typography>
      </RcSesServiceHeader>

      <RcSesServiceFormContainer accordionController={accordionController} showProgressStepper>
        <RcSesAccordion id='basicInformation' controller={accordionController}>
          <BasicInformationForm />
        </RcSesAccordion>

        <RcSesAccordion id='serviceDetails' controller={accordionController}>
          <ServiceDetailsForm />
        </RcSesAccordion>

        <RcSesAccordion id='serviceIssuance' controller={accordionController}>
          <ServiceIssuanceForm />
        </RcSesAccordion>

        <RcSesAccordion id='additionalServices' controller={accordionController}>
          <AdditionalServicesForm />
        </RcSesAccordion>

        <RcSesAccordion id='termsAndConditions' controller={accordionController}>
          <TermsAndConditionsForm />
        </RcSesAccordion>

        <RcSesServiceFormActions
          onDiscard={() => redirectToServiceDescriptionPage('00000000-0000-0000-0000-000000000000')}
          onSaveDraft={() => redirectToSelfServiceDashboard()}
          onSubmit={() => redirectToSelfServiceDashboard()}
        />
      </RcSesServiceFormContainer>
    </RcSesServicePage>
  )
}

export default Service
