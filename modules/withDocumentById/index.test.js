import React from 'react'
import withDocumentById from './'
import renderer from 'react-test-renderer'
import { XMLHttpRequest } from 'xmlhttprequest'
import Receiver from '../test/receiver'

window.XMLHttpRequest = XMLHttpRequest

const url = 'https://lesbonneschoses-ve9ubyaaaciapezy.prismic.io/api'
const id = 'UlfoxUnM0wkXYXbU' 

describe ('The query component', () => {
  test('When passed url', (done) => {
    const Query = withDocumentById({
      url,
      id
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('When passed url and query key', (done) => {
    const Query = withDocumentById({
      url,
      id,
      queryKey: 'test'
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('Throws an invariant with no url prop', (done) => {
    const Query = withDocumentById({
    })(Receiver)

    try {
      renderer.create(<Query done={()=>null} />)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with id', (done) => {
    const Query = withDocumentById({
      url
    })(Receiver)
    try {
      renderer.create(<Query done={()=>null} />)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
})

