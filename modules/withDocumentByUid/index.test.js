import React from 'react'
import withDocumentByUid from './'
import renderer from 'react-test-renderer'
import { XMLHttpRequest } from 'xmlhttprequest'
import Receiver from '../test/receiver'

window.XMLHttpRequest = XMLHttpRequest

const url = 'https://lesbonneschoses-ve9ubyaaaciapezy.prismic.io/api'
const uid = 'about-us' 
const type = 'article'

describe ('The query component', () => {
  test('When passed url, uid, and type', (done) => {
    const Query = withDocumentByUid({
      url,
      uid,
      type
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('When passed a query key', (done) => {
    const Query = withDocumentByUid({
      url,
      uid,
      type,
      queryKey: 'test'
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('Throws an invariant with no url prop', (done) => {
    const Query = withDocumentByUid({
    })(Receiver)
    try {
      renderer.create(<Query done={()=>null} />)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with no uid', (done) => {
    const Query = withDocumentByUid({
      url,
      type
    })(Receiver)
    try {
      renderer.create(<Query done={()=>null} />)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with no type', (done) => {
    const Query = withDocumentByUid({
      url,
      uid
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

