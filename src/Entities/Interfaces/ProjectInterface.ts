import TaskInterface from "./TaskInterface";

interface ProjectInterface {
  id: number,
  name: string,
  tasks: TaskInterface[]
}

export default ProjectInterface
