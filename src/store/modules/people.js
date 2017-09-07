import employees from '../json/employees.json'
import advisors from '../json/advisors.json'

const state = {
  all: employees.concat(advisors)
}

export default {
  state
}
