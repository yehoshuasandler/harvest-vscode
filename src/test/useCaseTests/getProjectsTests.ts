import ErrorMessage from "../../Constants/ErrorMessageInterface"
import Harvest  from "../../Entities/Harvest"
import Project from "../../Entities/Project"
import getProjects from '../../UseCases/getProjects'
import env from '../env'

async function test () {
  new Harvest({
    accountId: env.accountId,
    accessToken: env.accessToken,
    organization: 'ABC'
  })

  const projects: Project[] | ErrorMessage = await getProjects()

  if (Array.isArray(projects)) {
    console.log(projects[0])
    console.log(`${projects.length} Prpjects found`)
  }
  else console.log(projects)
}

test()