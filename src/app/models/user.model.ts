export class User {
  _id?: number
  cc?: string
  firstnames?: string
  lastnames?: string
  email: string
  password: string
  country?: string
  city?: string
  address?: string
  holder?: User
  responsibilities?: string
  token: string

  constructor(
    id?: number,
    cc?: string,
    firstnames?: string,
    lastnames?: string,
    email?: string,
    password?: string,
    country?: string,
    city?: string,
    address?: string,
    holder?: User,
    responsibilities?: string,
    token?: string
  ) {
    this._id = id
    this.cc = cc
    this.firstnames = firstnames
    this.lastnames = lastnames
    this.email = email
    this.password = password
    this.country = country
    this.city = city
    this.address = address
    this.holder = holder
    this.responsibilities = responsibilities
    this.token = token
  }
}
