import axios from 'axios'
import Harvest from '../Entities/Harvest'
import ErrorMessage from '../Constants/ErrorMessageInterface'
import ErrorMessages from '../Constants/ErrorMessages'
import Project from '../Entities/Project'
import ProjectInterface from '../Entities/Interfaces/ProjectInterface'

const getProjects = async (): Promise<Project[] | ErrorMessage> => {
  const harvest = new Harvest()
  let projectsResponse: any
  try {
    projectsResponse = await axios.get(
      'https://api.harvestapp.com/v2/users/me/project_assignments',
      { headers : harvest.headers }
    )
  } catch (err) {
    console.log(err)
    return ErrorMessages[1]
  }

  const projectData = projectsResponse.data.project_assignments.map((p: any) => {
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
  
  const projects = projectData.map((p: ProjectInterface) => {
    return new Project(p)
  })
  return projects
}

export default getProjects