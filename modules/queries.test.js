import { query, queryById, queryByUid } from './queries'
import { Predicates } from 'prismic.io'

const predicates =  [ Predicates.any('document.type', [ 'article', 'event' ]) ]
const options = { 
  pageSize: '5',
}


const url = 'https://lesbonneschoses-ve9ubyaaaciapezy.prismic.io/api'


describe('Query', () => {
  it('Should accept just a url', async() => {
    const q= await query({ url })
    expect(q).toMatchSnapshot()
  })
  it('Should accept a full query', async() => {
    const q= await query({ url, query: [ predicates, options ] })
    expect(q).toMatchSnapshot()
  })
  it('Should accept predicates', async() => {
    const q= await query({ url, predicates })
    expect(q).toMatchSnapshot()
  })
  it('Should accept options', async() => {
    const q= await query({ url, options })
    expect(q).toMatchSnapshot()
  })
})

describe('queryById', () => {
  it('Should accept a url and id', async() => {
    const q= await queryById({ url, id: 'UlfoxUnM0wkXYXbU' })
    expect(q).toMatchSnapshot()
  })
})


describe('queryByUid', () => {
  it('Should accept a url and uid', async() => {
    const q= await queryByUid({ url, uid: 'about-us', type: 'article' })
    expect(q).toMatchSnapshot()
  })
})
