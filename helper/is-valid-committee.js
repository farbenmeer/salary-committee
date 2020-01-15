import { isLongerThenAYear } from './is-longer-then-a-year.js'

const isValidCommittee = (selectedColleagues, female = 1, male = 1, longTermColleague = 1) => {
  const conditions = { female, male, longTermColleague }
  const counter = { female: 0, male: 0, longTermColleague: 0 }

  selectedColleagues.forEach((colleague) => {
    const { sex, joinedAt } = colleague

    if (sex === "male") { counter.male = counter.male + 1 }
    else if (sex === "female") { counter.female = counter.female + 1 }
    if (isLongerThenAYear(joinedAt)) { counter.longTermColleague = counter.longTermColleague + 1 }
  })


  // validate conditions
  return (counter.female >= conditions.female &&
    counter.male >= conditions.male &&
    counter.longTermColleague >= conditions.longTermColleague)

}

export { isValidCommittee }
