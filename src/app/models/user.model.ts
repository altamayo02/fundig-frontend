export class User {
  _id?: number
  cc?: string
  // Security nickname
  name?: string
  email: string
  password: string
  role?: any
  firstnames?: string
  lastnames?: string
  country?: string
  city?: string
  address?: string
  holder?: User
  responsibilities?: string
  token: string

  constructor(
    id?: number,
    cc?: string,
    name?: string,
    email?: string,
    password?: string,
    role? : any,
    firstnames?: string,
    lastnames?: string,
    country?: string,
    city?: string,
    address?: string,
    holder?: User,
    responsibilities?: string,
    token?: string
  ) {
    this._id = id
    this.cc = cc
    this.name = name
    this.email = email
    this.password = password
    this.role = role
    this.firstnames = firstnames
    this.lastnames = lastnames
    this.country = country
    this.city = city
    this.address = address
    this.holder = holder
    this.responsibilities = responsibilities
    this.token = token
  }
}
