//@flow 

import type { APIOptions } from 'prismic.io'

type Predicates = string | Array<any>
type Options = {[key: string]: number | string | Array<string>}
type Query = false | string | [
    Array<any>,
    {[key: string]: number | string | Array<string>}
  ]

type QueryParams = {
  url: string,
  apiOptions: APIOptions,
  queryKey: string,
  query: Query,
  predicates: Predicates,
  predicateOptions: Options
}
