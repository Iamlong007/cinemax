<template>
  <div id="app">
    <div class="topNav">
      <div class="logo_cont">
        <img src="./assets/Logo.svg" alt="" class="logo" />
      </div>
      <nav class="nav">
        <a href="" class="active">Home</a>
        <a href="">Features</a>
        <a href="">How it works</a>
        <a href="">FAQs</a>
      </nav>
      <button class="download">Download Now</button>
    </div>
    <div class="body">
      <div
        class="headerCont  animate__animated animate__fadeIn animate__delay-0.4s"
      >
        <span class="header">GET SOCIAL</span>
        <span class="subHeader"
          >Get in touch with friends and families instantly and share amazing
          moments together.</span
        >
        <div class="btCont">
          <button class="primaryBt">
            <svg
              class="icon"
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.133789 1.30287V12.7848C0.133866 12.8097 0.141296 12.8341 0.155147 12.8548C0.168998 12.8755 0.188654 12.8916 0.211649 12.9012C0.234645 12.9108 0.259957 12.9134 0.284411 12.9086C0.308865 12.9039 0.331373 12.892 0.349112 12.8745L6.32761 7.04414L0.349112 1.21318C0.331373 1.19569 0.308865 1.18383 0.284411 1.17908C0.259957 1.17433 0.234645 1.17691 0.211649 1.18648C0.188654 1.19606 0.168998 1.21222 0.155147 1.23292C0.141296 1.25363 0.133866 1.27796 0.133789 1.30287Z"
                fill="#FD9739"
              />
              <path
                d="M8.83408 4.64829L1.33781 0.518297L1.33313 0.515668C1.204 0.445549 1.08129 0.620262 1.18705 0.721934L7.0633 6.34078L8.83408 4.64829Z"
                fill="#FD9739"
              />
              <path
                d="M1.18788 13.366C1.08154 13.4677 1.20424 13.6424 1.33396 13.5723L1.33864 13.5697L8.83433 9.43966L7.06354 7.74658L1.18788 13.366Z"
                fill="#FD9739"
              />
              <path
                d="M11.8605 6.31351L9.76712 5.16064L7.79883 7.04392L9.76712 8.92631L11.8605 7.77432C12.4299 7.45966 12.4299 6.62817 11.8605 6.31351Z"
                fill="#FD9739"
              />
            </svg>
            <span class="buttonTxt">Get on Playstore</span>
          </button>
          <button class="secondaryBt">
            <svg
              class="icon2"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.19952 8.85004L9.88249 2.19719C9.93312 2.10556 9.98376 2.01515 10.0296 1.92051C10.0712 1.83492 10.1061 1.74872 10.129 1.65529C10.1772 1.45878 10.164 1.25384 10.0892 1.06638C10.0162 0.88194 9.88501 0.726379 9.71552 0.623334C9.54895 0.522313 9.35286 0.481265 9.15976 0.506998C8.96687 0.532918 8.79026 0.623937 8.65101 0.766193C8.58471 0.832498 8.53046 0.907845 8.48043 0.988015C8.42497 1.07602 8.37494 1.16764 8.32431 1.25926L8.09164 1.6794L7.85836 1.25866C7.80773 1.16764 7.7577 1.07602 7.70224 0.988015C7.65352 0.907972 7.59633 0.833401 7.53166 0.76559C7.39581 0.624859 7.21666 0.533799 7.02291 0.506998C6.83001 0.481455 6.63417 0.522494 6.46775 0.623334C6.29829 0.726413 6.16708 0.881962 6.09403 1.06638C6.01868 1.25384 6.00542 1.45878 6.05425 1.65529C6.07715 1.74872 6.11211 1.83492 6.1531 1.92051C6.19892 2.01515 6.24955 2.10556 6.30018 2.19719L7.05245 3.55585L4.12174 8.84944H2.11268C2.01202 8.84944 1.91075 8.84944 1.81009 8.85547C1.71847 8.86089 1.62926 8.87235 1.54005 8.89827C1.35318 8.95252 1.18923 9.06704 1.07108 9.22859C0.953543 9.38953 0.889648 9.58604 0.889648 9.78797C0.889648 9.9899 0.953543 10.1864 1.07048 10.3473C1.18923 10.5089 1.35258 10.6228 1.54005 10.6777C1.62926 10.7036 1.71847 10.715 1.81009 10.7205C1.91075 10.7265 2.01202 10.7265 2.11329 10.7265H10.0079C10.0181 10.7042 10.0434 10.6481 10.0681 10.5637C10.3183 9.71021 9.69683 8.84944 8.84149 8.84944L6.19952 8.85004ZM2.7661 11.0333L2.2887 11.9375C2.23927 12.0315 2.18924 12.1243 2.14463 12.2214C2.10332 12.3087 2.071 12.4 2.04819 12.4938C1.99997 12.6958 2.01323 12.9061 2.08676 13.0984C2.1597 13.2901 2.28809 13.4498 2.45265 13.5535C2.61661 13.6572 2.80769 13.6994 2.99575 13.6723C3.18503 13.6457 3.35742 13.5529 3.49365 13.407C3.55875 13.3377 3.61179 13.2612 3.66122 13.1792C3.71547 13.0888 3.7643 12.9947 3.81372 12.9007L4.50631 11.5891C4.45206 11.4986 3.93548 10.703 2.7661 11.0333ZM15.1749 9.22136C15.0586 9.06398 14.8935 8.94953 14.7053 8.89585C14.6172 8.87155 14.5266 8.8572 14.4353 8.85306C14.334 8.84703 14.2333 8.84703 14.1321 8.84703H12.1302L9.48405 4.13632C9.13686 4.50083 8.9104 4.96344 8.83546 5.46123C8.73856 6.08387 8.85451 6.72099 9.16458 7.26956L12.3436 12.9315C12.3943 13.0219 12.4443 13.1123 12.4998 13.1991C12.5504 13.2774 12.6046 13.3516 12.6703 13.4185C12.8096 13.5583 12.9862 13.6476 13.1797 13.6735C13.3726 13.6988 13.5673 13.659 13.7354 13.5589C13.9046 13.4578 14.036 13.3041 14.1098 13.1213C14.1851 12.9363 14.1978 12.7343 14.1496 12.5402C14.1258 12.4497 14.0925 12.362 14.0501 12.2786C14.0049 12.1852 13.9537 12.096 13.903 12.0056L13.17 10.7H14.1321C14.2333 10.7 14.334 10.7 14.4353 10.6945C14.5269 10.6891 14.6161 10.6777 14.7053 10.6523C14.8938 10.5986 15.0591 10.4839 15.1755 10.3262C15.2933 10.1663 15.3567 9.97276 15.3563 9.7741C15.3567 9.57544 15.2933 9.3819 15.1755 9.22196L15.1749 9.22136Z"
                fill="white"
              />
            </svg>

            <span class="buttonTxt2">Get on Appstore</span>
          </button>
        </div>
      </div>

      <div
        class="mock animate__animated animate__fadeInRight animate__delay-1s"
      >
        <img src=".//assets/Top Mock.svg" alt="" class="image" />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("~@/assets/blob.svg");
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}
.body {
  display: flex;
}
.topNav {
  display: flex;
}
.logo_cont {
  padding-left: 2.5em;
  padding-top: 1.2em;
  width: 43%;
}
.logo {
  transform: scale(1.3);
}

.nav {
  margin-top: 1.5rem;
}

.nav a {
  text-decoration: none;

  padding: 2em 2.5em 0.7em 2.5em;
  font-family: Raleway;
  font-weight: 620;
  font-size: 0.7rem;
  color: #938e8c;
}
.active {
  color: #fd9739 !important;
  background-color: #fff4f0 !important;
  border-bottom: 0.2rem solid #fd9739;
}
.download {
  margin-top: 0.9rem;
  margin-left: 10rem;
  font-family: Raleway;
  font-weight: 650;
  color: #fd9739;
  font-size: 0.7rem;
  padding: 0% 3rem 0 3rem;
  border: 0.1rem solid #fd9739;
  border-radius: 0.2rem;
}
.headerCont {
  padding: 4.3rem 3.3rem 1.3rem 1.8rem;
}
.header {
  width: 2rem;
  display: block;
  font-size: 4rem;
  font-weight: 400;
  font-family: Oleo Script;
  color: white;
  line-height: 110.7%;
  letter-spacing: -0.02em;
}
.subHeader {
  width: 20rem;
  display: block;
  font-size: 0.7rem;
  padding-top: 0.7rem;
  font-family: Raleway;
  font-weight: 600;
  color: white;
}
.btCont {
  display: flex;
}
.primaryBt {
  background-color: white;
  display: flex;
  padding: 0.7rem;
  margin-top: 2rem;
  border-radius: 0.2rem;
}

.secondaryBt {
  background-color: inherit;
  display: flex;
  margin-top: 2rem;
  margin-left: 1rem;
  padding: 0.6em 0.5em 0.5em 0.5em;
  border-radius: 0.2rem;
  border: 0.1rem solid white;
}

.buttonTxt {
  font-size: 0.7rem;
  font-family: Raleway;
  font-weight: 650;
  color: #fd9739;
  padding: 0 1rem 0 0.2rem;
}
.buttonTxt2 {
  font-size: 0.7rem;
  font-family: Raleway;
  font-weight: 650;
  color: white;
  padding: 0 1.1rem 0 0.2rem;
}

.icon {
  width: 1rem;
  height: 1rem;
  display: block;
  margin-left: 1rem;
  color: #fd9739;
}
.icon2 {
  width: 1rem;
  height: 1rem;
  display: block;
  margin-left: 1rem;
  color: #fd9739;
}
.mock {
  margin-left: 20%;
}
/* .image {
  animation-name: fade;
  animation-duration: 2s;
  opacity: 0;
} */
/* 
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(400px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-400px);
} */
.show {
  display: none;
  animation-name: display;
  animation-duration: 1s;
  animation-timing-function: ease-in;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
