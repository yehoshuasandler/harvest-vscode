# <a href="https://github.com/joshuashoemaker/harvest-vscode"> <img alt="brightScreen" src="./harvestLogo.png" width="26px" /> Harvest TimeTracker for Vs Code </a>

This extension is maintained by me not Harvest so please:
[🧡 Support this Extension 🧡](https://github.com/sponsors/joshuashoemaker/)

Harvest is a very popular labor and expense tracker that I use at work. I was bothered by constantly having to switch apps and context to make sure I was properly tracking my coding labor. I made this extension so I never have to leave VS Code and interupt my flow of thought. I hope several others will find this convenient time saver userful.

## Authorization

You will need to get yourself the User Id of your account and you will need to generate a personal Access Token [by going here!](https://id.getharvest.com/developers)

## UI

In the botton right of VS Code you will find the label `Harvest'. Clicking this will open simple drop down menus leting you choose your project and task, then adding notes to you time entry.

## Commands

All commands are accessible through `Ctrl-p`. Punching Time can be run by clicking the `Harvest` label in the bottom right

### Login

When running the login command you will be asked to enter your `User Id` and your `Personal Access Token`. This will save to your extention setttings and will not need to be entered again unless you log out.

### Logout

Running Logout will properly removed your stored `User Id` and `Personal Access Token`

### Punch Time

This command can be run by clicking the label `Harvest` in the bottom right or by searching with `Ctrl-p`

