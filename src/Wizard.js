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
// import Debug from './Debug'
import Footer from './Footer'
import { wizardData } from './wizardData'
gsap.registerPlugin(CSSPlugin)

const PartSchema = yup.object().shape({
  part1: yup.string().required('Please choose on of the options'),
  part2: yup.string().required('Please choose on of the options'),
  part3: yup.string().required('Please choose on of the options'),
  part4: yup.string().required('Please choose on of the options'),
  part5: yup.string().required('Please choose on of the options'),
  part6: yup.string().required('Please choose on of the options'),
  part7: yup.string().required('Please choose on of the options'),
  part8: yup.string().required('Please choose on of the options'),
  part9: yup.string().required('Please choose on of the options'),
})

const EmailSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
})

const Styling = styled.div.attrs({
  className: 'wrapper',
})`
  .main-wrapper {
    margin: auto 7rem;
    position: relative;
    height: ${(props) => props.mainHeight}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
    .main-container {
      border-radius: 10px;
      border: solid 1px #bab5b5;
      padding: 4rem;
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
      page: 0,
      dimensions: {
        width: 0,
        height: 0,
      },
    }
  }

  onResizeDebounced = debounce(() => {
    const element = document.querySelector('.main-container')
    console.log(element)

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

  submitForm = (values) => {
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: '',
      data: values,
    })
      .then((response) => {
        this.setState({ message: 'success' })
      })
      .catch((error) => {
        this.setState({ message: 'failure' })
      })
  }

  handleSubmit = (values) => {
    const { children } = this.props
    const { page } = this.state
    const beforeLastPage = page === React.Children.count(children) - 2
    const lastPage = page === React.Children.count(children) - 1
    if (beforeLastPage) {
      let sum = 0
      for (let [key, value] of Object.entries(values)) {
        if (!(key === 'email')) {
          console.log(`${key}: ${value.value}`)
          sum = sum + Number(value.value)
        }
      }
      this.setState({ score: sum })
      this.next(values)
    }
    if (lastPage) {
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
    const initialValues = { email: '' }
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

              {/* {process.env.NODE_ENV === 'development' && <Debug />} */}
            </form>
          )}
        </Formik>
      </Styling>
    )
  }
}

export default Wizard
