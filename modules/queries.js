//@flow

import Prismic from 'prismic.io'
import invariant from 'invariant'

type Query = {
  url: string,
  predicates: Predicates,
  options: Options
}

//$FlowFixMe https://github.com/facebook/flow/issues/183
const query = ({ url, query = false, predicates='', options={} }: Query) => {
  invariant(
    url,
    'No url prop passed. Make sure you pass in an api url ' +
    'via the "url" prop.'
  )
  invariant(
    (query || (predicates || options)),
    'You must pass a query, predicates, or options. '
  )   
  return Prismic.api(url)
    .then(function (api: any) {
      if(query) {
        return api.query(...query)
      }
      return api.query(predicates, options)
    })
}
const queryById = ({ url, id }: { url: string, id: string}) => {
  invariant(
    url,
    'No url prop passed. Make sure you pass in an api url ' +
    'via the "url" prop.'
  )
  invariant(
    id,
    'No id prop passed. Make sure you pass in a document' +
    'id via the "id" prop.'
  )   
  return Prismic.api(url)
    .then( (api: any) => api.getByID(id))
}

const queryByUid = ({ url, uid, type }: { url: string, uid: string, type: string }) => {
  invariant(
    url,
    'No url prop passed. Make sure you pass in an api url ' +
    'via the "url" prop.'
  )
  invariant(
    uid,
    'No uid prop passed. Make sure you pass in a document' +
    'type via the "uid" prop.'
  )   
  invariant(
    type,
    'No type prop passed. Make sure you pass in a document' +
    'type via the "type" prop.'
  )  
  return Prismic.api(url)
    .then( (api: any) => api.getByUID(type, uid))
}
export { query, queryById, queryByUid }
