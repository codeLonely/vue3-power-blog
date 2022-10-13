const Home = () => import('Views/home/Home.vue')

export default {
  path: '/home',
  name: 'home',
  alias: '/',
  component: Home
}
