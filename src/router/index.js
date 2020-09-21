import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import firebase from "firebase"

Vue.use(VueRouter);

const routes = [
  {
    path: "/"

    // component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
//    const currentUser = firebase.auth().currentUser;

//     if (requiresAuth && !currentUser) {
//       next("/da");
//     } else if (requiresAuth && currentUser) {
//       next();
//    } else {
//      next();
//     }
//   });

export default router;
