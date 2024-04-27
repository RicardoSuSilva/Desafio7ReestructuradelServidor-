import bcrypt from 'bcrypt'
import varenv from '../dotenv.js'

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(varenv.salt))

//const passwordE = createHash("coderhouse")
//console.log(createHash(passwordE))

export const validatePassword = (passwordSend, passwordBdd) => bcrypt.compareSync(passwordSend, passwordBdd)

//console.log(validatePassword("coderhouse", passwordE))