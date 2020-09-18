import * as vscode from "vscode";
import Harvest from "../../Entities/Harvest"
import UserInterface from "../../Entities/Interfaces/UserInterface";
import User from "../../Entities/User"
import getUser from "../getUser";

function PunchTime (context: vscode.ExtensionContext): vscode.Disposable {
  return vscode.commands.registerCommand('harvest-vscode.punchTime', async () => {
    const harvest = new Harvest()
    let user = new User()
    
		const accountId: string = context.globalState.get('accountId') || ''
    const accessToken: string = context.globalState.get('accessToken') || ''
    
    if (!accountId || !accessToken) {
      vscode.window.showErrorMessage('Run "Harvest: Login" Command before trying to puch time')
      return
    }

    harvest.accountId = accountId
    harvest.accessToken = accessToken

    if (!user.id) {
      let userProps: UserInterface
      try {
        userProps = await getUser()
      } catch (err) {
        console.log(err)
        vscode.window.showErrorMessage('Could not retrieve user data from Harvest')
        return
      }
      if (!userProps.id) {
        vscode.window.showErrorMessage('Could not retrieve user data from Harvest')
        return
      }
      user.destructor()
      user = new User(userProps)
      vscode.window.showInformationMessage('Successfully authenticated with Harvest')
    }

    console.log(user)
  })
}

export default PunchTime