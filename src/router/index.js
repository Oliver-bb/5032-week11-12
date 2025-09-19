import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import FirebaseSigninView from "../views/FirebaseSigninView.vue"
import FirebaseRegisterView from "../views/FirebaseRegisterView.vue"
import { isAuthenticated } from "../store/auth"
import AddBookView from "../views/AddBookView.vue"
import BookList from "../components/BookList.vue" 


const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/FireLogin", name: "FireLogin", component: FirebaseSigninView },
  { path: "/FireRegister", name: "FireRegister", component: FirebaseRegisterView },
  { path: "/about", name: "about", component: AboutView, meta: { requiresAuth: true } },
  { path: "/addbook", name: "AddBook", component: AddBookView },
  { path: "/booklist", name: "BookList", component: BookList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next("/FireLogin")
  } else {
    next()
  }
})

export default router