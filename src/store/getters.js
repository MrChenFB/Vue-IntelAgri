const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  roles: state => state.uesr.roles
}

export default getters
