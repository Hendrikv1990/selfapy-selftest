import React from 'react'
import Wizard from './Wizard'
import Subscribe from './Wizard/Subscribe'
import Finish from './Wizard/Finish'

import Part from './Wizard/Part'
import { wizardData } from './wizardData'

const Main = () => {
  return (
    <React.Fragment>
      <Wizard initialValues={{}}>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} parts={wizardData}></Part>
          }}
        </Wizard.Page>

        <Wizard.Page>
          {(props) => {
            return <Subscribe {...props}></Subscribe>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Finish {...props}></Finish>
          }}
        </Wizard.Page>
      </Wizard>
    </React.Fragment>
  )
}

export default Main
