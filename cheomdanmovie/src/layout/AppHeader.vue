<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">exam</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                    world's most popular framework for building responsive sites.</p>
                            </div>
                        </a>
                        
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Components</h5>
                                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                    compiling Scss, change brand colors and more.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/components" class="dropdown-item" title="Profile Page">컴포즈</router-link>
                    <router-link to="/SSS" class="dropdown-item" title="Profile Page">서울시</router-link>
                    <router-link to="/GGD" class="dropdown-item" title="Profile Page">경기도</router-link>
                    <router-link to="/GWD" class="dropdown-item" title="Profile Page">강원도</router-link>
                    <router-link to="/CCBD" class="dropdown-item" title="Profile Page">충청북도</router-link>
                    <router-link to="/CCND" class="dropdown-item" title="Profile Page">충청남도</router-link>
                    <router-link to="/GSBD" class="dropdown-item" title="Profile Page">경상북도</router-link>
                    <router-link to="/GSND" class="dropdown-item" title="Profile Page">경상남도</router-link>
                    <router-link to="/JRBD" class="dropdown-item" title="Profile Page">전라북도</router-link>
                    <router-link to="/JRND" class="dropdown-item" title="Profile Page">전라남도</router-link>
                    <router-link to="/JJD" class="dropdown-item" title="Profile Page">제주도</router-link>
                    <router-link to="/BSS" class="dropdown-item" title="Profile Page">부산시</router-link>
                    <router-link to="/DGS" class="dropdown-item" title="Profile Page">대구시</router-link>
                    <router-link to="/DJS" class="dropdown-item" title="Profile Page">대전시</router-link>
                    <router-link to="/WSS" class="dropdown-item" title="Profile Page">울산시</router-link>
                    <router-link to="/ICS" class="dropdown-item" title="Profile Page">인천시</router-link>
                    <router-link to="/GJS" class="dropdown-item" title="Profile Page">광주시</router-link>
                    <router-link to="/SJS" class="dropdown-item" title="Profile Page">세종시</router-link>
                </base-dropdown>
            </ul>

            <div class="col-sm">
                    <div align="right">
                      <div class="col-lg-4 col-sm-6">
                        <base-input placeholder="Search"
                                    addon-left-icon="ni ni-zoom-split-in">
                        </base-input>
                      </div>
                    </div>
            </div>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
            </ul>

            
            
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
