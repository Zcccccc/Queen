import Vue from 'vue';
import Router from "vue-router";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import BrandNew from "./pages/BrandNew";
import Brand from "./pages/Brand";
import Me from "./pages/Me";
import App from './App';
Vue.use(Router);
new Vue({
  el: '#app',
  router : new Router({
  	mode : "history",//确保服务端开放了路径访问权限
  	routes : [
  		{
  			path : "/apply",
  			component : Apply
  		},
      {
        path : "/",
        component : Home
      },
      {
        path : "/brandnew",
        component : BrandNew
      },
      {
        path : "/brand",
        component :Brand
      },
      {
        path : "/me",
        component : Me
      }
  	]
  }),
  render: h => h(App)
});
