import fs from 'fs'

import { getRandomColleagues } from './helper/get-random-colleagues.js'
import { validatePerson } from './helper/validate-person.js'
import { isValidCommittee } from './helper/is-valid-committee.js'

const { colleagues } = JSON.parse(fs.readFileSync('./colleagues.json'));

// Validate all colleagues
colleagues.forEach(colleague => validatePerson(colleague))

// Start lottery
let randomPeople = []
while (!isValidCommittee(randomPeople)) {
  randomPeople = getRandomColleagues(colleagues)
}

console.log("The colleagues in the committee are: \n", randomPeople)
