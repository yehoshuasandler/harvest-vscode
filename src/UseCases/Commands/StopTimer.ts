import * as vscode from "vscode"
import axios from 'axios'
import Harvest from "../../Entities/Harvest"

function StopTimer (context: vscode.ExtensionContext): vscode.Disposable {
  return vscode.commands.registerCommand('harvest-vscode.stopTimer', async () => {

    const accountId: string = context.globalState.get('accountId') || ''
    const accessToken: string = context.globalState.get('accessToken') || ''

    if (!accountId || !accessToken) {
      vscode.window.showWarningMessage('You are not authenticated with Harvest /n Run the "Harvest: Login Command" first.')
      return
    }

    const harvest = new Harvest({
      accountId: accountId,
      accessToken: accessToken
    })

    const currentTaskId: string = context.globalState.get('currentTaskId') || ''

    if (!currentTaskId) {
      vscode.window.showWarningMessage('There is no current task stored.')
      return
    }

    let timeEntryResponse: any
    try {
      timeEntryResponse = await axios.patch(
        `https://api.harvestapp.com/v2/time_entries/${currentTaskId}/stop`,
        {},
        { headers: harvest.headers }
      )
    } catch (err) {
      console.log(err)
      vscode.window.showErrorMessage('Issue stoping timer with Harvest.')
      return
    }

    vscode.window.showInformationMessage('Harvest Timer Stopped')
    await context.globalState.update('currentTaskId', '')
  })
}

export default StopTimer
