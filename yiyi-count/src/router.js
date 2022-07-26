import {createRouter,createWebHashHistory } from "vue-router"

import Jia from "./components/jia"
import Jie from "./components/jie"
import Chen from "./components/chen"
import Chu from "./components/chu"
import Tests from "./components/tests"


const router =createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Tests
        },
        {
            path:"/jia",
            component:Jia
        },
        {
            path:"/jie",
            component:Jie
        },
        {
            path:"/chen",
            component:Chen
        },
        {
            path:"/chu",
            component:Chu
        },

    ]

})

export default  router;
