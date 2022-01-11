import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "@/pages/NotFound";
import CoachesList from "@/pages/coaches/CoachesList";
import CoachRegistration from "@/pages/coaches/CoachRegistration";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import CoachDetail from "@/pages/coaches/CoachDetail";
import ContactCoach from "@/pages/requests/ContactCoach";
import UserAuth from "@/pages/auth/UserAuth";
import store from '../store/index';

const routes = [
  {
    path: '/', name: 'Home', // component: () => import('../views/Home'),
    redirect: '/coaches'
  },
  { path: '/coaches', name: 'coaches', component: CoachesList },
  {
    path: '/coaches/:id', name: 'coach', component: CoachDetail, props: true,
    children: [{path: 'contact', component: ContactCoach}]
  },
  { path: '/register', name: 'register', component: CoachRegistration, meta: { requiresAuth: true} },

  { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true} },

  { path: '/auth', component: UserAuth , meta: {requiresUnauth: true}},
  { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(function(to, from, next){
  if(to.meta.requiresAuth && !store.getters.isAuthenticated){
    next('/auth');
  } else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
    next('/coaches');
  }
  else {
    next();
  }
});

export default router
