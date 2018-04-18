const user = {
  state: {
    user: '',
    states: '',
    code: '',
    token: null,
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, code) => {
      state.token = token
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }

  },
  actions: {
    LoginIn( { commit }, userInfo) {
      const username = userInfo.username.trim()

    }
  }
}

export default user