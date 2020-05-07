import React from 'react'
import styled from 'styled-components'
import { device } from '../assets/Styles'

const Styling = styled.div.attrs({
  className: 'start-container',
})`
  display: flex;
  padding: 0;
  @media ${device.phone}{
    padding:0 20px;
  }
      max-width: 1024px;
    margin:0 auto;
  @media ${device.phone} {
    display: block;
  }
  h1 {
    
  }
  
  .lead {
  margin:0;
  }
 
  .hero-container {
    flex: 0 1 100%;
    padding-bottom:30px;

    span {
      font-family: Archivo;
      font-size: 14px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: normal;
      color: #87898f;
    }
  }
  .image-wrapper {
    flex: 0 1 50%;
  }
`

export const Start = React.memo((props) => {
  return (
    <Styling>
      <div className="hero-container">
        <h1>Selbsttest Depression: Bin ich depressiv?</h1>
        <h2>Teste dich mit unserem kostenlosem Online-Fragebogen</h2>
        <p className="lead">
        Traurigkeit, Schlafstörungen, Erschöpfung und Reizbarkeit können schon früh auf eine entstehende Depression hindeuten. Trotzdem lassen sich die Fragen “Habe ich eine Depression?” oder “Bin ich depressiv?” oftmals nicht leicht beantworten.
    Um dir die Selbsteinschätzung zu erleichtern und dir einen Kurs anzubieten, der so gut wie möglich auf dich und deine Probleme zugeschnitten ist, wollen wir dir den folgenden Selbsttest zur Verfügung stellen.</p>
    <p className="lead">Grundlage des Tests ist der sogenannte PHQ-9-Fragebogen. Dieser Test wird in den nationalen Versorgungsrichtlinien zur Diagnostik von Depressivität empfohlen und fragt die Symptome einer Depression ab.</p>
    <p className="lead">Es ist jedoch kein Test im herkömmlichen Sinn, denn es gibt keine richtigen oder falschen Antworten. Entscheide bei jeder Aussage, welche Antwort am ehesten auf dich zutrifft.</p>
    <p className="lead">Der Test kann Hinweise auf eine mögliche Depression geben, ersetzt allerdings keine ärztliche Diagnose.</p>
      </div>
    </Styling>
  )
})

export default Start
