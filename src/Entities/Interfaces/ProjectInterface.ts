import TaskInterface from "./TaskInterface";

interface ProjectInterface {
  id: string,
  name: string,
  tasks: TaskInterface[]
}

export default ProjectInterface
