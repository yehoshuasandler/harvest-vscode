import Harvest from '../../Entities/Harvest'

const harvest = new Harvest({
  accountId: '123',
  accessToken: 'XYZ'
})

console.log(harvest.props)

const harvest2 = new Harvest()

harvest2.organization = 'ABC'

console.log(harvest2.props)