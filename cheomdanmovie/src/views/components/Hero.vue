<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-top">
            <div class="col px-0">
                
  <b-dropdown id="dropdown-1" text="지역별" class="m-md-2">
    <b-dropdown-item><router-link to="/서울시" title="Profile Page">서울시</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/경기도" title="Profile Page">경기도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/강원도" title="Profile Page">강원도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/충청북도" title="Profile Page">충청북도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/충청남도" title="Profile Page">충청남도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/경상북도" title="Profile Page">경상북도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/경상남도" title="Profile Page">경상남도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/전라북도" title="Profile Page">전라북도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/전라남도" title="Profile Page">전라남도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/제주도" title="Profile Page">제주도</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/부산시" title="Profile Page">부산시</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/대구시" title="Profile Page">대구시</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/대전시" title="Profile Page">대전시</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/울산시" title="Profile Page">울산시</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/인천시" title="Profile Page">인천시</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/광주시" title="Profile Page">광주시</router-link></b-dropdown-item>
    <b-dropdown-item><router-link to="/세종시" title="Profile Page">세종시</router-link></b-dropdown-item>
   

    
  </b-dropdown>
  <b-dropdown id="dropdown-2" text="월별" class="m-md-2">
      <div class="col-md-4">
    <base-input addon-left-icon="ni ni-calendar-grid-58">
                <flat-picker slot-scope="{focus, blur}"
                             @on-open="focus"
                             @on-close="blur"
                             :config="{allowInput: true}"
                             class="form-control datepicker"
                             v-model="dates.simple">
                </flat-picker>
            </base-input>
      </div>
  
  </b-dropdown>
  
    
         <div class="column">
                     <div class="col-lg-4 col-sm-6">
 <base-input placeholder="Search"
    addon-left-icon="ni ni-zoom-split-in">
                    </base-input>
                </div>
            </div>
            </div>
                
           
       

</div>
              
                <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Star us on</span>
                        <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a href="https://www.creative-tim.com" target="_blank" title="Creative Tim - Premium Bootstrap Themes and Templates">
                            <img src="img/brand/creativetim-white-slim.png" class="ml-3" style="height: 30px;">
                        </a>
                    </div>
                </div>
         
    </section>
</template>
<script>

import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: {
    flatPicker
  },
  data() {
    return {
      dates: {
        simple: "2018-07-17",
        range: "2018-07-17 to 2018-07-19"
      }
    };
  }
};
</script>
<style>
</style>
