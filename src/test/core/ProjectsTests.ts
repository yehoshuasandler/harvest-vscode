import ErrorMessage from "../../Constants/ErrorMessageInterface"
import Harvest  from "../../Entities/Harvest"
import ProjectInterface from "../../Entities/Interfaces/ProjectInterface"
import Project from "../../Entities/Project"
import getProjectsAssignments from '../../UseCases/getProjectsAssignments'
import env from '../env'
import UnitTest from "../UnitTestInterface"

const projectCreateInstance = async (): Promise<boolean> => {
  const input: ProjectInterface = {
    id: 10203,
    name: 'Test Project',
    tasks: [{
      id: 123,
      name: 'Test Task'
    }]
  }

  const expectedOutput: ProjectInterface = {
    id: 10203,
    name: 'Test Project',
    tasks: [{
      id: 123,
      name: 'Test Task'
    }]
  }

  const project = new Project(input)
  if (JSON.stringify(project.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


const getProjectsAssignmentsFromApi = async (): Promise<boolean> => {
  new Harvest().destructor()

  new Harvest({
    accountId: env.accountId,
    accessToken: env.accessToken,
    organization: 'ABC'
  })

  const expectedOutput: ProjectInterface = env.firstProjectFromApi

  const projects: ProjectInterface[] | ErrorMessage = await getProjectsAssignments()

  if (!Array.isArray(projects)) return false

  const project: ProjectInterface = projects[0]

  // based off my own user data
  if (JSON.stringify(project) === JSON.stringify(expectedOutput)) return true
  else return false
}

const unitTests: UnitTest[] = [
  { name: 'Entity | Project Create Instance', test: projectCreateInstance },
  { name: 'Use Case | Get Projects From Api', test: getProjectsAssignmentsFromApi },
]

export default unitTests