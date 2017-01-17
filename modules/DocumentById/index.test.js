import React from 'react'
import DocumentById from './'
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
  test('Accepts an id', (done) => {
    renderer.create(
      <DocumentById url={url} id={'UlfoxUnM0wkXYXbU'}>
        {(props) => (
          <div>
            <Receiver {...props} done={done}/>  
          </div>
        )}
      </DocumentById>
    )
  })
  test('Throws an invariant with no url prop', (done) => {
    try {
      renderer.create(
      <DocumentById>
        {(props) => (
          <div>
            <Receiver {...props} done={()=>null}/>  
          </div>
        )}
      </DocumentById>)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with no query, or (predidctes|| options)', (done) => {
    try {
      renderer.create(
      <DocumentById>
        {(props) => (
          <div>
            <Receiver {...props} done={()=>null}/>  
          </div>
        )}
      </DocumentById>)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
})
