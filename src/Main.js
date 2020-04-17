import React from 'react'
import Wizard from './Wizard'
import Part from './Wizard/Part'
import Start from './Wizard/Start'
import Finish from './Wizard/Finish'

import { wizardData } from './wizardData'

const Main = () => {
  return (
    <React.Fragment>
      <Wizard initialValues={{}}>
        <Wizard.Page>
          {(props) => {
            return <Start {...props}></Start>
          }}
        </Wizard.Page>

        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[0]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[1]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[2]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[3]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[4]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[5]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[6]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[7]}></Part>
          }}
        </Wizard.Page>
        <Wizard.Page>
          {(props) => {
            return <Part {...props} object={wizardData[8]}></Part>
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
