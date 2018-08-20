import Vue from 'vue'
import Router from 'vue-router'

import page1 from "../views/page1.vue"
import page2 from "../views/page2.vue"
import page3 from "../views/page3.vue"
Vue.use(Router)
const routes = {
    routes: [
        {
            path: '/',
            name: 'page1',
            component: page1,
           
        },
        {
            path: '/page2',
            name: 'page2',
            component: page2,
           
        },
        {
            path: '/page3',
            name: 'page3',
            compenent: page3
        }
    ]
}
export default new Router(routes)