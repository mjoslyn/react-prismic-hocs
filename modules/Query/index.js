//@flow
import React from 'react'
import { query } from '../queries'
import type { APIOptions } from 'prismic.io'

type Props = {
  url: string,
  apiOptions: APIOptions, 
  query: any,
  queryKey: string,
  predicates: Predicates, 
  predicateOptions: Options, 
  children: any
};


export default class Query extends React.Component {
  props: Props;
  state: {
    loading: boolean,
    prismic: any,
    error: boolean | Error
  }

  static defaultProps = {
    apiOptions: {},
    query: false,
    queryKey: '',
    predicates: '',
    predicateOptions: {}
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      loading: true,
      prismic: false,
      error: false
    }
  }

  componentDidMount = () => {
    const _this = this
    query({ url: this.props.url, apiOptions: this.props.apiOptions, query: this.props.query, predicates: this.props.predicates, predicateOptions: this.props.predicateOptions })
    .then( (response: any) => {
      _this.setState({ loading: false, prismic: response })
    })
    .catch( (err: Error) => {
      _this.setState({ loading: false, error: err })
    })
  }


  render() {
    const keyed = this.props.queryKey.length > 0
    const prismic = {
      queryKey: keyed ? this.props.queryKey: false,
      [keyed ? `${this.props.queryKey}Loading` : 'loading']: this.state.loading,
      [keyed ? `${this.props.queryKey}Error` : 'error']: this.state.error,
      [keyed ? `${this.props.queryKey}Prismic` : 'prismic']: this.state.prismic
    }
    return (
      <div>
        {this.props.children(prismic)}
      </div>
    )
  }
}

