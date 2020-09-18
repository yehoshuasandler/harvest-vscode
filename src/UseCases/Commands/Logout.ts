import * as vscode from "vscode";
import Harvest from "../../Entities/Harvest"
import User from "../../Entities/User"

function Logout (context: vscode.ExtensionContext): vscode.Disposable {
  return vscode.commands.registerCommand('harvest-vscode.logout', async () => {
    new Harvest().destructor()
    new User().destructor()

    await context.globalState.update('accountId', '')
    await context.globalState.update('accessToken', '')
  })
}

export default Logout