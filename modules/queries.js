//@flow

import Prismic from 'prismic.io'
import invariant from 'invariant'
import type { APIOptions } from 'prismic.io'

//$FlowFixMe https://github.com/facebook/flow/issues/183
const query = ({ url, apiOptions={}, query = false, predicates='', predicateOptions={} }: QueryParams) => {
  invariant(
    url,
    'No url prop passed. Make sure you pass in an api url ' +
    'via the "url" prop.'
  )
  invariant(
    (query || (predicates || predicateOptions)),
    'You must pass a query, predicates, or options. '
  )   
  return Prismic.api(url, apiOptions)
    .then(function (api: any) {
      if(query) {
        return api.query(...query)
      }
      return api.query(predicates, predicateOptions)
    })
}

const queryById = ({ url, apiOptions={}, id }: { url: string, apiOptions: APIOptions, id: string}) => {
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
  return Prismic.api(url, apiOptions)
    .then( (api: any) => api.getByID(id))
}

const queryByUid = ({ url, apiOptions={}, uid, type }: { url: string, apiOptions: APIOptions, uid: string, type: string }) => {
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
  return Prismic.api(url, apiOptions)
    .then( (api: any) => api.getByUID(type, uid))
}
export { query, queryById, queryByUid }
