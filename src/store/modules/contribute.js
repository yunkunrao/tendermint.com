import axios from 'axios'
let url = 'https://api.github.com/repos/tendermint/tendermint/issues?state=open&labels=help+wanted&per_page=100'

const state = {
  issues: []
}

const mutations = {
  async initializeContribute (state) {
    state.issues = (await axios.get(url)).data
  }
}

export default { state, mutations }
