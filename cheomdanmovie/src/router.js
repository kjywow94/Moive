import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Home from "./views/Home.vue";
import SSS from "./region/SSS.vue";
import GGD from "./region/GGD.vue";
import GWD from "./region/GWD.vue";
import CCBD from "./region/CCBD.vue";
import CCND from "./region/CCND.vue";
import GSBD from "./region/GSBD.vue";
import GSND from "./region/GSND.vue";
import JRBD from "./region/JRBD.vue";
import JRND from "./region/JRND.vue";
import JJD from "./region/JJD.vue";
import BSS from "./region/BSS.vue";
import DGS from "./region/DGS.vue";
import DJS from "./region/DJS.vue";
import WSS from "./region/WSS.vue";
import ICS from "./region/ICS.vue";
import GJS from "./region/GJS.vue";
import SJS from "./region/SJS.vue";


Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [{
            path: "/",
            name: "home",
            components: {
                header: AppHeader,
                default: Home,
                footer: AppFooter
            }
        },
        {
            path: "/components",
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
            path: "/SSS",
            name: "SSS",
            components: {
                header: AppHeader,
                default: SSS,
                footer: AppFooter
            }
        },
        {
            path: "/GGD",
            name: "GGD",
            components: {
                header: AppHeader,
                default: GGD,
                footer: AppFooter
            }
        },
        {
            path: "/GWD",
            name: "GWD",
            components: {
                header: AppHeader,
                default: GWD,
                footer: AppFooter
            }
        },
        {
            path: "/CCBD",
            name: "CCBD",
            components: {
                header: AppHeader,
                default: CCBD,
                footer: AppFooter
            }
        },
        {
            path: "/CCND",
            name: "CCND",
            components: {
                header: AppHeader,
                default: CCND,
                footer: AppFooter
            }
        },
        {
            path: "/GGBD",
            name: "GGBD",
            components: {
                header: AppHeader,
                default: GSBD,
                footer: AppFooter
            }
        },
        {
            path: "/GSND",
            name: "GSND",
            components: {
                header: AppHeader,
                default: GSND,
                footer: AppFooter
            }
        },
        {
            path: "/JRBD",
            name: "JRBD",
            components: {
                header: AppHeader,
                default: JRBD,
                footer: AppFooter
            }
        },
        {
            path: "/JRND",
            name: "JRND",
            components: {
                header: AppHeader,
                default: JRND,
                footer: AppFooter
            }
        },
        {
            path: "/JJD",
            name: "JJD",
            components: {
                header: AppHeader,
                default: JJD,
                footer: AppFooter
            }
        },
        {
            path: "/BSS",
            name: "BSS",
            components: {
                header: AppHeader,
                default: BSS,
                footer: AppFooter
            }
        },
        {
            path: "/DGS",
            name: "DGS",
            components: {
                header: AppHeader,
                default: DGS,
                footer: AppFooter
            }
        },
        {
            path: "/DJS",
            name: "DJS",
            components: {
                header: AppHeader,
                default: DJS,
                footer: AppFooter
            }
        },
        {
            path: "/WSS",
            name: "WSS",
            components: {
                header: AppHeader,
                default: WSS,
                footer: AppFooter
            }
        },
        {
            path: "/ICS",
            name: "ICS",
            components: {
                header: AppHeader,
                default: ICS,
                footer: AppFooter
            }
        },
        {
            path: "/GJS",
            name: "GJS",
            components: {
                header: AppHeader,
                default: GJS,
                footer: AppFooter
            }
        },
        {
            path: "/SJS",
            name: "SJS",
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