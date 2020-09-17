import ProjectInterface from './Interfaces/ProjectInterface'
import TaskInterface from './Interfaces/TaskInterface'

class Project {
  public id: number
  public name: string
  public tasks: TaskInterface[]

  constructor (props: ProjectInterface) {
    this.id = props.id
    this.name = props.name
    this.tasks = props.tasks
  }

  get props (): ProjectInterface {
    return {
      id: this.id,
      name: this.name,
      tasks: this.tasks
    }
  }
}

export default Project
