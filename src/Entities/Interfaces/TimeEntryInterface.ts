interface TimeEntryInterface {
  id?: number,
  projectId: number,
  taskId: number,
  date: string,
  notes: string,
  isRunning?: boolean
}

export default TimeEntryInterface