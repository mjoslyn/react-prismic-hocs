//@flow
import React from 'react'
import { query as prismicQuery } from '../queries'

type Props = {
  query: Query,
  children: any,
  predicates: Predicates,
  options: Options
}

//$FlowFixMe https://github.com/facebook/flow/issues/183
export default function withQuery({ url, apiOptions={}, queryKey='', query=false, predicates='', predicateOptions={} }: QueryParams ) {
  return <Config>(ComposedComponent: ReactClass<Config>) => {
    return class withQuery extends React.Component {
      props: Props;
      state: {
        loading: boolean,
        prismic: any,
        error: boolean | Error
      };

      constructor(props: Props) {
        super(props)
        this.state = {
          loading: true,
          prismic: {},
          error: false
        }
      }

      componentDidMount() {
        const _this = this
        prismicQuery({ url, apiOptions, query, predicates, predicateOptions })
        .then( (response: any) => {
          _this.setState({ loading: false, prismic: response })
        })
        .catch( (err: Error) => {
          _this.setState({ loading: false, error: err })
        })
      }
      render() {
        const keyed = queryKey.length > 0
        const prismic = {
          queryKey: keyed ? queryKey: false,
          [keyed ? `${queryKey}Loading` : 'loading']: this.state.loading,
          [keyed ? `${queryKey}Error` : 'error']: this.state.error,
          [keyed ? `${queryKey}Prismic` : 'prismic']: this.state.prismic
        }
        return (
          <ComposedComponent {...this.props} {...prismic} />
        )
      }
    }
  }
}
