import Harvest  from "../../Entities/Harvest"
import UserInterface from "../../Entities/Interfaces/UserInterface"
import User from "../../Entities/User"
import getUser from '../../UseCases/getUser'
import env from '../env'
import UnitTest from "../UnitTestInterface"

const userCreateInstance = (): boolean => {
  new User().destructor()

  const input: UserInterface = {
    id: 10203,
    firstName: 'Joshua',
    lastName: 'Sandler',
    email: 'joshua@me.com',
    avatar: 'link'
  }

  const expectedOutput: UserInterface = {
    id: 10203,
    firstName: 'Joshua',
    lastName: 'Sandler',
    email: 'joshua@me.com',
    avatar: 'link'
  }

  const user = new User(input)
  if(JSON.stringify(user.props) === JSON.stringify(expectedOutput)) return true
  else return false
}

const getUserFromApi = async (): Promise<boolean> => {
  new Harvest().destructor()
  new User().destructor()
  

  new Harvest({
    accountId: env.accountId,
    accessToken: env.accessToken,
    organization: 'ABC'
  })

  // this data is based off my own user
  const expectedOutput: UserInterface = env.userFromApi
  
  const userData = await getUser()

  if (JSON.stringify(userData) === JSON.stringify(expectedOutput)) return true
  else return false
}

const unitTests: UnitTest[] = [
  { name: 'Entity | User Create Instance', test: userCreateInstance },
  { name: 'Use Case | Get User from Api', test: getUserFromApi }
]

export default unitTests