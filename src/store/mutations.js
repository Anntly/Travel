export default{
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city //存city在本地缓存
    } catch (e) {

    }
  }
}