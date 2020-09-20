import * as vscode from 'vscode'
import Logout from './UseCases/Commands/Logout'
import PunchTime from './UseCases/Commands/PunchTime'
import SetUserAuthentication from './UseCases/Commands/SetUserAuthentication'
import StopTimer from './UseCases/Commands/StopTimer'

export function activate(context: vscode.ExtensionContext) {
	const statusbar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100)
	statusbar.command = 'harvest-vscode.punchTime'
	
	statusbar.text = 'Harvest'
	statusbar.show()

	const commands: vscode.Disposable[] = [
		SetUserAuthentication(context),
		Logout(context),
		PunchTime(context),
		StopTimer(context)
	]

	context.subscriptions.push(...commands)
}

export function deactivate() {}
