let instance: CurrentTimeEntry | null

interface CurrentTimeEntryProps {
  id?: number,
  taskName?: string,
  projectName?: string,
  notes?: string
}

class CurrentTimeEntry {
  public id?: number
  public taskName?: string
  public projectName?: string
  public notes?: string

  constructor () {
    if (!instance) instance = this
    return instance
  }

  set props (values: CurrentTimeEntryProps) {
    if (values.id) this.id = values.id
    if (values.taskName) this.taskName = values.taskName
    if (values.projectName) this.projectName = values.projectName
    if (values.notes) this.projectName = values.notes
  }

  get props (): CurrentTimeEntryProps {
    return {
      id: this.id,
      taskName: this.taskName,
      projectName: this.projectName,
      notes: this.notes
    }
  }
}

export default CurrentTimeEntry
