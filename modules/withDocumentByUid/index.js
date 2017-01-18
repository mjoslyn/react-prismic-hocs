//@flow
import React from 'react'
import { queryByUid } from '../queries'

type Props = {
  query: string,
  queryKey: string,
  children: any
};


export default function withDocumentById({ url, apiOptions={}, uid, type, queryKey='' }: { url: string, apiOptions: Options, uid: string, type: string, queryKey: string }) {
  return <Config>(ComposedComponent: ReactClass<Config>) => {
    return class withDocument extends React.Component {
      props: Props;
      state: {
        loading: boolean,
        prismic: any,
        error: any
      };

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
        queryByUid({ url, apiOptions, uid, type })
        .then( (response: any) => {
          _this.setState({ loading: false, prismic: response })
        })
        .catch( (err: any)=> {
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
