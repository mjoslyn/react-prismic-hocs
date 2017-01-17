import React from 'react'
import Query from './'
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
    renderer.create(
      <Query url={url}>
        {(props) => (
          <div>
          <Receiver {...props} done={done}/>  
          </div>
        )}
      </Query>
    )
  })
  test('Accepts a full query', (done) => {
    renderer.create(
      <Query url={url} query={[ predicates, options ]}>
        {(props) => (
          <div>
            <Receiver {...props} done={done}/>  
          </div>
        )}
      </Query>
    )
  })
  test('Accepts a predicate', (done) => {
    renderer.create(
      <Query url={url} predicates={predicates}>
        {(props) => (
          <div>
            <Receiver {...props} done={done}/>  
          </div>
        )}
      </Query>
    )
  })
  test('Accepts an opitons array', (done) => {
    renderer.create(
      <Query url={url} options={options}>
        {(props) => (
          <div>
            <Receiver {...props} done={done}/>  
          </div>
        )}
      </Query>
    )
  })
  test('Accepts a query key', (done) => {
    renderer.create(
      <Query url={url} queryKey="test">
        {(props) => (
          <div>
          <Receiver {...props} done={done}/>  
          </div>
        )}
      </Query>
    )
  })
  test('Throws an invariant with no url prop', (done) => {
    try {
      renderer.create(
      <Query>
        {(props) => (
          <div>
            <Receiver {...props} done={()=>null}/>  
          </div>
        )}
      </Query>)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
  test('Throws an invariant with no query, or (predidctes|| options)', (done) => {
    try {
      renderer.create(
      <Query>
        {(props) => (
          <div>
            <Receiver {...props} done={()=>null}/>  
          </div>
        )}
      </Query>)
      throw new Error()
    } catch (e) {
      expect(e.name).toMatch(/Invariant/)
      done()
    }
  })
})
