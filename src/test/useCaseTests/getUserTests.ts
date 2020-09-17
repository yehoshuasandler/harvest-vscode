import Harvest  from "../../Entities/Harvest"
import getUser from '../../UseCases/getUser'
import env from '../env'

async function test () {
  new Harvest({
    accountId: env.accountId,
    accessToken: env.accessToken,
    organization: 'ABC'
  })

  const user = await getUser()
  console.log(user)
}

test()