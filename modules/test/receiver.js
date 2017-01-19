/* eslint-disable react/prop-types */

import React from 'react'

export default class Receiver extends React.Component {
  componentDidMount() {
    if(this.props.queryKey) {
      expect(this.props[`${this.props.queryKey}Loading`]).toEqual(true)
      expect(this.props[`${this.props.queryKey}Error`]).toEqual(false)
      expect(this.props[`${this.props.queryKey}Prismic`]).toEqual(false)
    } else {
      expect(this.props.loading).toEqual(true)
      expect(this.props.error).toEqual(false)
      expect(this.props.prismic).toMatchSnapshot(false)
    }
  }
  componentWillReceiveProps(props: any) {
    if(props.queryKey) {
      expect(props[`${this.props.queryKey}Loading`]).toEqual(false)
      expect(props[`${this.props.queryKey}Error`]).toEqual(false)
      expect(props[`${this.props.queryKey}Prismic`]).toMatchSnapshot()
    } else {
      expect(props.loading).toEqual(false)
      expect(props.error).toEqual(false)
      expect(props.prismic).toMatchSnapshot()
    }
    this.props.cwrpTest && this.props.cwrpTest()
    this.props.done()
  }

  render() {
    return null
  }
}

/* eslint-enable react/prop-types */
