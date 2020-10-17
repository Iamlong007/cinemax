<template>
  <div id="app">
    <div class="nav">
      <img src=".//assets/CinemaxLogo.svg" alt="" />
      <span class="active_link">Home</span>
      <span class="link">Features</span>
      <span class="link">About</span>
      <v-btn class="downloadBt1" color="#0F149D">Download Now</v-btn>
      <v-btn class="menuBt" icon @click="menu = !menu">
        <v-icon color="#0F149D">{{ menu ? "mdi-close" : "mdi-menu" }}</v-icon>
      </v-btn>
    </div>
    <transition name="slide-in">
      <div v-if="menu" class="menu">
        <div class="navElement"><span class="active">Home</span></div>
        <div class="navElement"><span>Features</span></div>
        <div class="navElement"><span>About</span></div>
        <!-- <div class="btElement">
          <v-btn color="#0f149d" small block class="downloadBt">Download</v-btn>
        </div> -->
      </div>
    </transition>
    <div class="container">
      <div class="headerCont">
        <span class="headerTxt">Enjoy Cinematic experience on mobile</span>
        <span class="subText"
          >Stream unlimited quality movies on your phone, tablet, laptop and
          TV.</span
        >
        <v-btn
          outlined
          color="#0f149d"
          class="downloadBt animate__animated animate__fadeInUp animate__delay-2s"
          >Download App</v-btn
        >
      </div>
      <div
        class="mockCont animate__animated animate__fadeInRight animate__delay-3s"
      >
        <img src="./assets/white.svg" class="mock " alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: false
    };
  },
  methods: {}
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(~@/assets/Vector.svg);
  background-size: 30%;
  background-position-x: right;
  background-position-y: bottom;
}
.nav{
  display:flex;
}
.menuBt{
  right: 0%;
  display: none !important;
}
.active_link{
  padding: 1rem;
  margin-left: 52%;
  font-family: Roboto;
  font-weight: 600;
  color: #0f149d;
}
.downloadBt1{
  text-transform: capitalize !important;
  color: white !important;
  margin-top: .3rem;
  width: 13rem;
  margin-left: 6rem;
}
.link{
  padding: 1rem;
  font-family: Roboto;
  font-weight: 500;
  color: #535353;
}
img {
  transform: scale(0.7);
}
@media (max-width: 720px) {
  #app{
   background-image: none;
    
  }
  
  .menuBt{
    display: block !important;
  }
  .active_link, .link, .downloadBt1{
    display: none !important;
  }
  .mock{
    display: none;
  }
  .menu{
    right: 0%;
  }
}
.menu {
  overflow: hidden;
  width: 10rem;
  position: absolute;
  right: 0%;
  background:white;
  z-index: 1;
 
  margin-right: 0.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}
.navElement {
  width: 100%;
  padding: 0.6rem;
}
span {
  font-family: Roboto;
  font-size: 0.8rem;
  color: #313131;
  font-weight: 500;
}
.active {
  color: #0f149d;
  font-weight: 550;
}
.btElement {
  padding-bottom: 3rem !important;
}
.container {
  display: flex;
  margin-left: 0.5% !important;
}
.mockCont {
  width: 40%;
  margin-left: 35%;
}
.mock {
  transform: scale(1);

  top: 0%;
}
.headerCont {
  width: 40%;
  padding-top: 1.5rem;
  left: 0% !important;
}
.headerTxt {
  font-size: 3rem;
  font-weight: 650;
  font-family: Playfair Display;
}

.subText {
  font-size: small;
  font-weight: 500;
  color: #535353;
  font-family: Roboto;
  padding-top: 0.7rem;
  display: block;
}
.downloadBt {
  color: #0f149d !important;
  width: 13rem;
  text-transform: capitalize !important;
  left: 0% !important;
  font-size: 0.7rem;
  font-family: Roboto;
  margin-top: 1rem;
  float: left !important;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
.slide-in-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.8s ease;
}

.slide-in-leave-to {
  opacity: 1;
  transform: translateY(-290px);
}
</style>
