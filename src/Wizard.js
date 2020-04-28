import axios from 'axios'
import { Formik } from 'formik'
import { gsap, Power3, TimelineLite } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import debounce from 'lodash.debounce'
import React, { Component } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import * as yup from 'yup'
import { device } from './assets/Styles'
import Debug from './Debug'
import Footer from './Footer'
import { wizardData } from './wizardData'
import { connect } from 'react-redux'

gsap.registerPlugin(CSSPlugin)

const PartSchema = yup.object().shape({
  part1: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part2: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part3: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part4: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part5: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part6: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part7: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part8: yup.string().required('Bitte wähle ein Element aus der Liste'),
  part9: yup.string().required('Bitte wähle ein Element aus der Liste'),
})

const EmailSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  gdpr: yup.bool().oneOf([true], 'Bitte stimme der Datenschutzerklärung zu'),
})

const Styling = styled.div.attrs({
  className: 'wrapper',
})`
  .main-wrapper {
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    height: ${(props) => props.mainHeight}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
    .main-container {
      border-radius: 10px;
      border: solid 1px #bab5b5;
      width: 100%;
      position: absolute;
    }
    @media ${device.tablet} {
      margin: auto 1rem;
    }
  }
  .footer-wrapper {
    width: 100%;
  }
`

class Wizard extends Component {
  static Page = ({ children, parentState }) => {
    return children(parentState)
  }

  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      page: 1,
      dimensions: {
        width: 0,
        height: 0,
      },
    }
  }

  onResizeDebounced = debounce(() => {
    const element = document.querySelector('.main-container')

    this.setState({
      dimensions: {
        height: element.clientHeight,
        width: element.clientWidth,
      },
    })
  }, 400)

  onResize = () => {
    return this.onResizeDebounced()
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }))

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }))

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = (values) => {
    const { page } = this.state
    if (page === 1) {
      if (this.props.finalize) {
        this.next(values)
      } else {
        let sum = 0
        for (let [key, value] of Object.entries(values)) {
          if (!(key === 'email') && !(key === 'gdpr')) {
            console.log(`${key}: ${value.value}`)
            sum = sum + Number(value.value)
          }
        }
        this.setState({ score: sum })

        const username = 'hila'
        const password = 'hila'
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString(
          'base64',
        )
        const url =
          'https://selfapy.hkvlaanderen.com/wp-json/newsletter/v1/subscribe?email=web@hkvlaanderen.com'

        axios
          .post(url, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
          .then((response) => {
            this.props.dispatch({ type: 'finalize' })
          })
          .catch((error) => {})
      }
    } else {
      this.next(values)
    }
  }

  getValidationSchema = (page) => {
    const validationSchemas = [PartSchema, EmailSchema]
    return validationSchemas[page]
  }

  animateOnEnter = (node) => {
    const timeline = new TimelineLite()
    return timeline
      .from(
        node,
        0.5,
        {
          ease: Power3.easeInOut,
          autoAlpha: 0,
        },
        '+=0.5',
      )
      .call(
        () => {
          this.onResize()
        },
        null,
        this,
        '-=1',
      )
  }

  animateOnExit = (node) => {
    const timeline = new TimelineLite()
    return timeline.to(node, 0.2, {
      ease: Power3.easeInOut,
      autoAlpha: 0,
    })
  }
  render() {
    const { children } = this.props
    const { page, score } = this.state
    const activePage = React.Children.toArray(children)[page]
    const initialValues = { email: '', gdpr: false }
    wizardData.forEach((obj) => {
      initialValues[obj.name] = obj.value || ''
    })
    return (
      <Styling mainHeight={this.state.dimensions.height}>
        <Formik
          initialValues={initialValues}
          validationSchema={this.getValidationSchema(this.state.page)}
          enableReinitialize={false}
          validate={this.validate}
          onSubmit={this.handleSubmit}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className="main-wrapper">
                <TransitionGroup component={null}>
                  <Transition
                    appear
                    key={this.state.page}
                    onEnter={(node) => this.animateOnEnter(node)}
                    onExit={(node) => this.animateOnExit(node)}
                    timeout={500}
                    unmountOnExit
                  >
                    <div className="main-container">
                      {React.cloneElement(activePage, {
                        parentState: {
                          ...props,
                          score,
                        },
                      })}
                      <Footer
                        width={this.state.dimensions.width}
                        previous={this.previous}
                        page={page}
                        children={children}
                      />
                    </div>
                  </Transition>
                </TransitionGroup>
              </div>

              {process.env.NODE_ENV === 'development' && <Debug />}
            </form>
          )}
        </Formik>
      </Styling>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  finalize: state.subscribe.finalize,
})

export default connect(mapStateToProps, null)(Wizard)
