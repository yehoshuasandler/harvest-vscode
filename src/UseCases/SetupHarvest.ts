import * as vscode from "vscode"
import Harvest from "../Entities/Harvest"
import ProjectInterface from "../Entities/Interfaces/ProjectInterface"
import UserInterface from "../Entities/Interfaces/UserInterface"
import Project from "../Entities/Project"
import ProjectCollection from "../Entities/ProjectCollection"
import User from "../Entities/User"
import getProjectsAssignments from "./getProjectsAssignments"
import getUser from "./getUser"

async function SetupHarvest (context: vscode.ExtensionContext): Promise<boolean> {
  const harvest = new Harvest()
  let projectCollection = new ProjectCollection()
  let user = new User()
  
  const accountId: string = context.globalState.get('accountId') || ''
  const accessToken: string = context.globalState.get('accessToken') || ''
  
  if (!accountId || !accessToken) {
    vscode.window.showErrorMessage('Run "Harvest: Login" Command before trying to puch time')
    return false
  }

  harvest.accountId = accountId
  harvest.accessToken = accessToken

  if (!user.id) {
    vscode.window.showInformationMessage('Authenticating with Harvest')
    let userProps: UserInterface
    try {
      userProps = await getUser()
    } catch (err) {
      console.log(err)
      vscode.window.showErrorMessage('Could not retrieve user data from Harvest')
      return false
    }
    if (!userProps.id) {
      vscode.window.showErrorMessage('Could not retrieve user data from Harvest')
      return false
    }
    user.destructor()
    user = new User(userProps)
  }

  if (projectCollection.elements.length <= 0) {
    vscode.window.showInformationMessage('Getting Projects from Harvest')
    try {
      let projectsData = await getProjectsAssignments()
      const projects = projectsData.map((p: ProjectInterface) => {
        return new Project(p)
      })
      projectCollection.addMany(projects)
    } catch (err) {
      console.log(err)
      vscode.window.showErrorMessage('Could not retrieve uer projects')
      return false
    }
  }

  return true
}

export default SetupHarvest
