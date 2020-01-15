const validatePerson = ({ name, sex, joinedAt }) => {
  if (!name) {
    console.error(`There is no name set for "${name, sex, joinedAt}"`)
    process.exit(9)
  }
  if (!sex || !(sex === "male" || sex === "female")) {
    console.error(`${name}'s sex is "${sex}". Valid is only "male" or "female", please refactor code and committee conditions if there joins a "diverse" person!`)
    process.exit(9)
  }
  if (!joinedAt) {
    console.error(`There is no date set for "${name}"`)
    process.exit(9)
  } if (!/\d{1,2}\/\d{1,2}\/\d{4}/.test(joinedAt)) {
    console.error(`Date is invalid for "${name}". Format should be in format "mm/dd/yyyy"`)
    process.exit(9)
  }
}

export { validatePerson }
