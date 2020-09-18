import axios from 'axios'
import Harvest from '../Entities/Harvest'
import UserInterface from '../Entities/Interfaces/UserInterface'

const getUser = async (): Promise<UserInterface> => {
  const harvest = new Harvest()
  let userResponse: any
  try {
    userResponse = await axios.get(
      'https://api.harvestapp.com/api/v2/users/me.json',
      { headers : harvest.headers }
    )
  } catch (err) {
    console.log(err)
  }

  const user = {
    id: userResponse?.data?.id || '',
    firstName: userResponse?.data?.first_name || '',
    lastName: userResponse?.data?.last_name || '',
    email: userResponse?.data?.email || '',
    avatar: userResponse?.data?.avatar_url || '',
  }

  return user
}

export default getUser