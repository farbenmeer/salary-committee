const isLongerThenAYear = (joinedAt) => {
  const dateString = new Date(joinedAt)
  dateString.setFullYear(dateString.getFullYear() + 1);
  return dateString < Date.now()
}

export { isLongerThenAYear }
