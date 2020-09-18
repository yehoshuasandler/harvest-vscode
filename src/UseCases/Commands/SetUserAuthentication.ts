import * as vscode from "vscode";
import Harvest from "../../Entities/Harvest"
import User from "../../Entities/User"

function SetUserAuthentication (context: vscode.ExtensionContext): vscode.Disposable {
  return vscode.commands.registerCommand('harvest-vscode.login', async () => {
    new Harvest().destructor()
    new User().destructor()

    const accountId = await vscode.window.showInputBox({
      ignoreFocusOut: true,
      placeHolder: 'Harvest Acount Id'
    })

    if (!accountId) {
      vscode.window.showErrorMessage('No Account Id Proveded')
      return
    }

    const accessToken = await vscode.window.showInputBox({
      ignoreFocusOut: true,
      placeHolder: 'Harvest Access Token',
      password: true
    })

    if (!accessToken) {
      vscode.window.showErrorMessage('No Access Token Proveded')
      return
    }

    await context.globalState.update('accountId', accountId)
    await context.globalState.update('accessToken', accessToken)

    new Harvest({
      accountId: accountId,
      accessToken: accessToken
    })

  })
}

export default SetUserAuthentication