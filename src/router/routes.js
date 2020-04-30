
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'welcome', component: () => import('pages/Index.vue') },
      { path: 'input', name: 'inputJadwal', component: () => import('pages/Input.vue') },
      { path: 'about', name: 'About', component: () => import('pages/About.vue') },
      { path: 'keluar', name: 'Keluar', component: () => import('pages/Logout.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
