import React from 'react'
import withQuery from './'
import renderer from 'react-test-renderer'
import { XMLHttpRequest } from 'xmlhttprequest'
import { Predicates } from 'prismic.io'
import Receiver from '../test/receiver'

const predicates =  [ Predicates.any('document.type', [ 'article' ]) ]
const options = { 
  pageSize: '5'
}

window.XMLHttpRequest = XMLHttpRequest

const url = 'https://lesbonneschoses-ve9ubyaaaciapezy.prismic.io/api'

describe ('The query component', () => {
  test('When passed url only', (done) => {
    const Query = withQuery({
      url
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('When passed a query', (done) => {
    const Query = withQuery({
      url,
      query: [ predicates, options ] 
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('Accepts a predicate', (done) => {
    const Query = withQuery({
      url,
      predicates
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('Accepts an opitons array', (done) => {
    const Query = withQuery({
      url,
      options
    })(Receiver)
    renderer.create(<Query done={done} />)
  })
  test('Accepts a query key', (done) => {
    const Query = withQuery({
      url,
      key: 'test'
    })(Receiver)
    renderer.create(<Query done={done} />)
  })

  test('Throws an invariant with no url prop', (done) => {
    const Query = withQuery({
    })(Receiver)

    try {
      renderer.create(<Query done={()=>null} />)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with no query, or (predidctes|| options)', (done) => {
    const Query = withQuery({
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

