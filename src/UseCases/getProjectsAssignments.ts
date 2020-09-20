import axios from 'axios'
import Harvest from '../Entities/Harvest'
import ProjectInterface from '../Entities/Interfaces/ProjectInterface'

const getProjectsAssignments = async (): Promise<ProjectInterface[]> => {
  const harvest = new Harvest()

  const projectResponses: any = await _getManyProjectPagesFromApi(harvest)

  let projects: ProjectInterface[] = []
  projectResponses.forEach((reponse: any) => {
    const projectResponss: ProjectInterface[] = reponse.data.project_assignments.map((p: any) => {
      return {
        id: p.project.id,
        name: p.project.name,
        tasks: p.task_assignments.map((t: any) => {
          return {
            id: t.task.id,
            name: t.task.name
          }
        })
      }
    })
    projects = [...projects, ...projectResponss]
  })

  return projects
}

let projectPageRresonses: any = []

const _getManyProjectPagesFromApi = async (harvest: Harvest, nextPageUrl?: string): Promise<any> => {
  let projectsResponse: any
  try {
    projectsResponse = await axios.get(
      nextPageUrl || 'https://api.harvestapp.com/v2/users/me/project_assignments',
      { headers : harvest.headers }
    )

    projectPageRresonses.push(projectsResponse)
    
    if (projectsResponse.data.links.next) await _getManyProjectPagesFromApi(harvest, projectsResponse.data.links.next)
  } catch (err) {
    console.log(err)
  }

  return projectPageRresonses
}

export default getProjectsAssignments