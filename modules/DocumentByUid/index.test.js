import React from 'react'
import DocumentByUid from './'
import renderer from 'react-test-renderer'
import { XMLHttpRequest } from 'xmlhttprequest'
import { Predicates } from 'prismic.io'
import Receiver from '../test/receiver'


window.XMLHttpRequest = XMLHttpRequest

const url = 'https://lesbonneschoses-ve9ubyaaaciapezy.prismic.io/api'

describe ('The query component', () => {
  test('Accepts a uid and type', (done) => {
    renderer.create(
      <DocumentByUid url={url} uid={'about-us'} type={'article'}>
        {(props) => (
          <div>
            <Receiver {...props} done={done}/>  
          </div>
        )}
      </DocumentByUid>
    )
  })
  test('Throws an invariant with no url prop', (done) => {
    try {
      renderer.create(
      <DocumentByUid uid={'about-us'} type={'article'}>
        {(props) => (
          <div>
            <Receiver {...props} done={()=>null}/>  
          </div>
        )}
      </DocumentByUid>)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with no uid', (done) => {
    try {
      renderer.create(
      <DocumentByUid url={url} type={'article'}>
        {(props) => (
          <div>
            <Receiver {...props} done={()=>null}/>  
          </div>
        )}
      </DocumentByUid>)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with no type', (done) => {
    try {
      renderer.create(
      <DocumentByUid url={url} uid={'about-us'}>
        {(props) => (
          <div>
            <Receiver {...props} done={()=>null}/>  
          </div>
        )}
      </DocumentByUid>)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })

})
