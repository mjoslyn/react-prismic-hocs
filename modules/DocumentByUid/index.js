//@flow
import React from 'react'
import { queryByUid } from '../queries'

type Props = {
  url: string,
  apiOptions: APIOptions,
  uid: string,
  type: string,
  queryKey: string,
  children: any
}


export default class DocumentById extends React.Component {
  props: Props;
  state: {
    loading: boolean,
    prismic: any,
    error: boolean | Error
  }

  static defaultProps = {
    queryKey: '',
    apiOptions: {}
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
    queryByUid({ url: this.props.url, apiOptions: this.props.apiOptions, uid: this.props.uid, type: this.props.type })
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


