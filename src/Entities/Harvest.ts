import HarvestInterface from "./Interfaces/HarvestInterface";

let instance: Harvest | null = null

class Harvest {
  accountId: string
  accessToken: string
  organization: string

  constructor (props?: HarvestInterface) {
    if (!instance) instance = this
    this.accountId = props?.accountId || ''
    this.accessToken = props?.accessToken || ''
    this.organization = props?.organization || ''

    return instance
  }

  destructor (): void {
    instance = null
  }

  get headers () {
    return {
      'Harvest-Account-ID': this.accountId,
      'Authorization': `Bearer ${this.accessToken}`
    }
  }

  get props (): HarvestInterface {
    return {
      accountId: this.accountId,
      accessToken: this.accessToken,
      organization: this.organization
    }
  }
}

export default Harvest