import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import SSS from "./지역별/서울시.vue";
import GGD from "./지역별/경기도.vue";
import GWD from "./지역별/강원도.vue";
import CCBD from "./지역별/충청북도.vue";
import CCND from "./지역별/충청남도.vue";
import GSBD from "./지역별/경상북도.vue";
import GSND from "./지역별/경상남도.vue";
import JRBD from "./지역별/전라북도.vue";
import JRND from "./지역별/전라남도.vue";
import JJD from "./지역별/제주도.vue";
import BSS from "./지역별/부산시.vue";
import DGS from "./지역별/대구시.vue";
import DJS from "./지역별/대전시.vue";
import WSS from "./지역별/울산시.vue";
import ICS from "./지역별/인천시.vue";
import GJS from "./지역별/광주시.vue";
import SJS from "./지역별/세종시.vue";


Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [{
            path: "/",
            name: "components",
            components: {
                header: AppHeader,
                default: Components,
                footer: AppFooter
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            }
        },
        {
            path: "/서울시",
            name: "서울시",
            components: {
                header: AppHeader,
                default: SSS,
                footer: AppFooter
            }
        },
        {
            path: "/경기도",
            name: "경기도",
            components: {
                header: AppHeader,
                default: GGD,
                footer: AppFooter
            }
        },
        {
            path: "/강원도",
            name: "강원도",
            components: {
                header: AppHeader,
                default: GWD,
                footer: AppFooter
            }
        },
        {
            path: "/충청북도",
            name: "충청북도",
            components: {
                header: AppHeader,
                default: CCBD,
                footer: AppFooter
            }
        },
        {
            path: "/충청남도",
            name: "충청남도",
            components: {
                header: AppHeader,
                default: CCND,
                footer: AppFooter
            }
        },
        {
            path: "/경상북도",
            name: "경상북도",
            components: {
                header: AppHeader,
                default: GSBD,
                footer: AppFooter
            }
        },
        {
            path: "/경상남도",
            name: "경상남도",
            components: {
                header: AppHeader,
                default: GSND,
                footer: AppFooter
            }
        },
        {
            path: "/전라북도",
            name: "전라북도",
            components: {
                header: AppHeader,
                default: JRBD,
                footer: AppFooter
            }
        },
        {
            path: "/전라남도",
            name: "전라남도",
            components: {
                header: AppHeader,
                default: JRND,
                footer: AppFooter
            }
        },
        {
            path: "/제주도",
            name: "제주도",
            components: {
                header: AppHeader,
                default: JJD,
                footer: AppFooter
            }
        },
        {
            path: "/부산시",
            name: "부산시",
            components: {
                header: AppHeader,
                default: BSS,
                footer: AppFooter
            }
        },
        {
            path: "/대구시",
            name: "대구시",
            components: {
                header: AppHeader,
                default: DGS,
                footer: AppFooter
            }
        },
        {
            path: "/대전시",
            name: "대전시",
            components: {
                header: AppHeader,
                default: DJS,
                footer: AppFooter
            }
        },
        {
            path: "/울산시",
            name: "울산시",
            components: {
                header: AppHeader,
                default: WSS,
                footer: AppFooter
            }
        },
        {
            path: "/인천시",
            name: "인천시",
            components: {
                header: AppHeader,
                default: ICS,
                footer: AppFooter
            }
        },
        {
            path: "/광주시",
            name: "광주시",
            components: {
                header: AppHeader,
                default: GJS,
                footer: AppFooter
            }
        },
        {
            path: "/세종시",
            name: "세종시",
            components: {
                header: AppHeader,
                default: SJS,
                footer: AppFooter
            }
        }

    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});