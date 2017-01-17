React Prismic
=========================

React HOC's for querying [prismic.io](https://www.prismic.io)

## Installation

```
npm install --save react-prismic-hocs
```
Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using an ES6 transpiler, like babel
import { Query, DocumentById } from 'react-prismic-hocs'
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/react-prismic-hocs@0.1.1/umd/ReactPrismicHocs.min.js"></script>
```

## How Does It Work?
React Prismic provides Higher Order Components that will fetch from [prismic.io](https://www.prismic.io) and pass the prismic to either props to your child components or child functions.

# Child Components
The "with" versions of each component return a new component with the Prismic prismic as props on that component

The props passed to your component are 
* ```loading or queryKeyLoading``` - \(*Boolean*) - Is the Prismic request loading?
* ```prismic or queryKeyPrismic``` - \(*false | PrismicResponse*) - The prismic of  your Prismic query. Returns false if the query is loading or if an error has occurred
* ```error or queryKeyError``` - \(*false | Error*) - The error, if thrown by your Prismic query. Returns false if the query is loading or if the query was resolved successfully.

<a id="withQuery"></a>

## ```withQuery({ url, query, predicates, optons })```
Returns a new component with the the Prismic response to your query. 

##### Arguments
* ```url``` \(*String*) - *Required* Your Prismic project's API endpoint. You can find this in the *Settings -> Api & Security* section in the dashboard of your Prisimic project.
* ```query``` \(*[[PrismicPredicates], {PredicateOptions}]*) - A tuple containing an array of Prismic pridicate queries and a map of query options. ***If this argument is passed, the ```predicates``` and ```options``` arguments  are ignored.***
* ```predicates``` \(*[PrismicPredicates]*) - An array of Prismic Predicates. See the [Prismic api docs](http://prismicio.github.io/javascript-kit/Predicates.html) for available predicates.
* ```options``` \(*{PredicateOptions}*) - A map of predicate options. See the [predicate options section](https://prismic.io/docs/custom-types#query?lang=javascript) of the Prismic docs for available options. 
* ```queryKey``` \(*String*) - An optional key for the query props in your component. As an example a ```queryKey``` of ```articles``` will result in your passed props being ```articleLoading, articlePrismic, articleError```


##### Examples
```js
import { withQuery } from 'react-prismic-hocs'

const Articles = (props) => ... // your component

export default withQuery({
  url: 'https://yourapiurl.prismic.io/api',
  query: [
    [ Predicates.any('document.type', [ 'article' ]) ],
    { pageSize: '5'}
  ]
})(Articles)


export default withQuery({
  url: 'https://yourapiurl.prismic.io/api',
  predicates: [ Predicates.any('document.type', [ 'article' ]) ],
})(Articles)


export default withQuery({
  url: 'https://yourapiurl.prismic.io/api',
  predicates: [ Predicates.any('document.type', [ 'article' ]) ],
  options: { pageSize: '5'}
})(Articles)
```

<a id="withDocumentById"></a>

## ```withDocumentById({ url, id })```
Returns a new component with the the Prismic response to your query

##### Arguments
* ```url``` \(*String*) - *Required* Your Prismic project's API endpoint. You can find this in the *Settings -> Api & Security* section in the dashboard of your Prisimic project.
* ```id``` \(*String*) - *Requred* The id of the Prismic document you are querying
* ```queryKey``` \(*String*) - An optional key for the query props in your component. As an example a ```queryKey``` of ```articles``` will result in your passed props being ```articleLoading, articlePrismic, articleError```


##### Examples
```js
import { withDocumentById} from 'react-prismic-hocs'

const Article = (props) => ... // your component

export default withDocumentById({
  url: 'https://yourapiurl.prismic.io/api',
  id: 'vkadf183wvsdfh'
})(Article)
```

<a id="withDocumentByUid"></a>

## ```withDocumentByUid({ url, id })```
Returns a new component with the the Prismic response to your query

##### Arguments
* ```url``` \(*String*) - *Required* Your Prismic project's API endpoint. You can find this in the *Settings -> Api & Security* section in the dashboard of your Prisimic project.
* ```uid``` \(*String*) - *Requred* The uid of the Prismic document you are querying
* ```type``` \(*String*) - *Requred* The type of the Prismic document you are querying
* ```queryKey``` \(*String*) - An optional key for the query props in your component. As an example a ```queryKey``` of ```articles``` will result in your passed props being ```articleLoading, articlePrismic, articleError```


##### Examples
```js
import { withDocumentById} from 'react-prismic-hocs'

const Page = (props) => ... // your component

export default withDocumentByUid({
  url: 'https://yourapiurl.prismic.io/api',
  uid: 'about-us'
  type: 'page'
})(Page)
```

# Child Functions 
Pass the results of prismic query as arguments to your child function.

The arguments passed to your child function are
* ```loading or queryKeyLoading``` - \(*Boolean*) - Is the Prismic request loading?
* ```prismic or queryKeyPrismic``` - \(*false | PrismicResponse*) - The prismic of  your Prismic query. Returns false if the query is loading or if an error has occurred
* ```error or queryKeyError``` - \(*false | Error*) - The error, if thrown by your Prismic query. Returns false if the query is loading or if the query was resolved successfully.

<a id="Query"></a>

## ```Query({ url, query, predicates, optons })```
Pass the results of a Prismic query to your child function. 

##### Arguments
* ```url``` \(*String*) - *Required* Your Prismic project's API endpoint. You can find this in the *Settings -> Api & Security* section in the dashboard of your Prisimic project.
* ```query``` \(*[[PrismicPredicates], {PredicateOptions}]*) - A tuple containing an array of Prismic pridicate queries and a map of query options. ***If this argument is passed, the ```predicates``` and ```options``` arguments  are ignored.***
* ```predicates``` \(*[PrismicPredicates]*) - An array of Prismic Predicates. See the [Prismic api docs](http://prismicio.github.io/javascript-kit/Predicates.html) for available predicates.
* ```options``` \(*{PredicateOptions}*) - A map of predicate options. See the [predicate options section](https://prismic.io/docs/custom-types#query?lang=javascript) of the Prismic docs for available options. 
* ```queryKey``` \(*String*) - An optional key for the query props in your component. As an example a ```queryKey``` of ```articles``` will result in your passed props being ```articleLoading, articlePrismic, articleError```


##### Example
```js
import { Query } from 'react-prismic-hocs'

<Query
  url={'https://yourapiurl.prismic.io/api'}
  query={[
    [ Predicates.any('document.type', [ 'article' ]) ],
    { pageSize: '5'}
  ]}
>
  {({loading, prismic, error}) => (
    <div>
      {!loading && prismic &&
        <div>Use your prismic here</div>
      }
    </div>
  )}
</Query>

```

<a id="DocumentById"></a>

## ```DocumentById({ url, id })```
Passes a Prismic document to your child function

##### Arguments
* ```url``` \(*String*) - *Required* Your Prismic project's API endpoint. You can find this in the *Settings -> Api & Security* section in the dashboard of your Prisimic project.
* ```id``` \(*String*) - *Requred* The id of the Prismic document you are querying
* ```queryKey``` \(*String*) - An optional key for the query props in your component. As an example a ```queryKey``` of ```articles``` will result in your passed props being ```articleLoading, articlePrismic, articleError```


##### Example
```js
import { DocumentById} from 'react-prismic-hocs'

const Article = (props) => ... // your component

<DocumentById
  url={'https://yourapiurl.prismic.io/api'},
  id={'vkadf183wvsdfh'}
>
  {({loading, prismic, error}) => (
    <div>
      {!loading && prismic &&
        <div>prismic.data['title']</div>
      }
    </div>
  )}
</DocumentById>
```

<a id="DocumentByUid"></a>

## ```DocumentByUid({ url, id })```
Passes a Prismic document to your child function

##### Arguments
* ```url``` \(*String*) - *Required* Your Prismic project's API endpoint. You can find this in the *Settings -> Api & Security* section in the dashboard of your Prisimic project.
* ```uid``` \(*String*) - *Requred* The uid of the Prismic document you are querying
* ```type``` \(*String*) - *Requred* The type of the Prismic document you are querying
* ```queryKey``` \(*String*) - An optional key for the query props in your component. As an example a ```queryKey``` of ```articles``` will result in your passed props being ```articleLoading, articlePrismic, articleError```


##### Examples
```js
import { DocumentById} from 'react-prismic-hocs'

export default withDocumentByUid({
  url: 'https://yourapiurl.prismic.io/api',
  uid: 'about-us'
  type: 'page'
})(Page)
<DocumentById
  url={'https://yourapiurl.prismic.io/api'},
  uid={'about-us'}
  type={'page'}
  queryKey={'page'}
>
  {({pageLoading, pagePrismic, pageError}) => (
    <div>
      {!pageLoading && pagePrismic &&
        <div>pagePrismic.data['title']</div>
      }
    </div>
  )}
</DocumentById>
```

## License
MIT
