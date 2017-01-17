//@flow 

declare type Predicates = string | Array<any>
declare type Options = {[key: string]: number | string | Array<string>}
declare type Query = boolean | string | [
    Array<any>,
    {[key: string]: number | string | Array<string>}
  ]

declare type QueryParams = {
  url: string,
  queryKey: string,
  query: Query,
  predicates: Predicates,
  options: Options
}
