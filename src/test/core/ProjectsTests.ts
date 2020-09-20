import ErrorMessage from "../../Constants/ErrorMessageInterface"
import Harvest  from "../../Entities/Harvest"
import ProjectInterface from "../../Entities/Interfaces/ProjectInterface"
import Project from "../../Entities/Project"
import ProjectCollection from "../../Entities/ProjectCollection"
import getProjectsAssignments from '../../UseCases/getProjectsAssignments'
import env from '../env'
import UnitTest from "../UnitTestInterface"

const projectCreateInstance = (): boolean => {
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

const projectCollectionAddOne = (): boolean => {
  new ProjectCollection().destructor()

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
  const collection = new ProjectCollection()
  collection.addOne(project)

  if (JSON.stringify(collection.elements[0].props) === JSON.stringify(expectedOutput)) return true
  else return false
}

const projectCollectionAddMany = (): boolean => {
  new ProjectCollection().destructor()

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
  const collection = new ProjectCollection()
  collection.addMany([project])

  if (JSON.stringify(collection.elements[0].props) === JSON.stringify(expectedOutput)) return true
  else return false
}

const unitTests: UnitTest[] = [
  { name: 'Entity | Project Create Instance', test: projectCreateInstance },
  { name: 'Use Case | Get Projects From Api', test: getProjectsAssignmentsFromApi },
  { name: 'Collection | Add One To Project Collection', test: projectCollectionAddOne },
  { name: 'Collection | Add Many To Project Collection', test: projectCollectionAddMany },
]

export default unitTests