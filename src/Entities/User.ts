import UserInterface from './Interfaces/UserInterface'

let instance: User | null

class User {
  public readonly id: number
  public readonly firstName: string
  public readonly lastName: string
  public readonly email: string
  public readonly avatar: string
  constructor (props?: UserInterface) {
    if (!instance) instance = this

    this.id = props?.id || 0
    this.firstName = props?.firstName || ''
    this.lastName = props?.lastName || ''
    this.email = props?.email || ''
    this.avatar = props?.avatar || ''
    
    return instance
  }

  destructor (): void {
    instance = null
  }

  get props (): UserInterface {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      avatar: this.avatar
    }
  }
}

export default User
