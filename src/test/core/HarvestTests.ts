import Harvest from '../../Entities/Harvest'
import UnitTest from '../UnitTestInterface'

const harvestCreateInstance = (): boolean => {
  const input = {
    accountId: '123',
    accessToken: 'XYZ',
    organization: 'ABC'
  }

  const expectedOutput = {
    accountId: '123',
    accessToken: 'XYZ',
    organization: 'ABC'
  }
  
  const harvest = new Harvest(input)

  if (JSON.stringify(harvest.props) === JSON.stringify(expectedOutput)) return true
  else return false
}

const unitTests: UnitTest[] = [
  { name: 'Entity | Harvest Create Instance', test: harvestCreateInstance }
]

export default unitTests