<script lang="ts" setup></script>

<template>
  <div class="phone">
    <div class="phone__img">
      <NuxtImg src="/img/phoneBG.jpg" alt="image de fond" />
    </div>
    <span class="phone__name">
      <span>H</span>
      <span>E</span>
      <span>I</span>
      <span>N</span>
      <span>I</span>
      <span>S</span>
    </span>
    <span class="phone__burger">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="phone__text">
      <MyGridBg :gradient="true" />
      <h1>Développeur <br />Fullstack</h1>
      <p>Jeune développeur passionné de développement depuis 2019.</p>
      <p>Basé en Franche-Comté ainsi qu'en Alsace.</p>
    </div>
    <div class="phone__chevron">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="phone__socials">
      <NuxtLink to="https://github.com/QuentinHeinis" externals target="_blank">
        <svg
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
            transform="scale(64)"
            fill="#f15a52"
          />
        </svg>
      </NuxtLink>
      <NuxtLink
        to="https://instagram.com/studio_heinis"
        externals
        target="_blank"
      >
        <svg
          fill="#f15a52"
          width="800px"
          height="800px"
          viewBox="0 0 19.2 19.2"
          data-name="Instagram w/circle"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"
          />
        </svg>
      </NuxtLink>
      <NuxtLink
        to="https://fr.linkedin.com/in/quentin-heinis-731ab8223"
        externals
        target="_blank"
      >
        <svg
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 291.319 291.319"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #f15a52"
              d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
		S65.21,0,145.659,0z"
            />
            <path
              style="fill: #ffffff"
              d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
		c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
		s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
		c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"
            />
          </g>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.phone {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 800px) {
    position: absolute;
    z-index: 10;
    min-height: unset;
    height: 775px;
    width: 375px;
    max-width : calc(80vh/2);
    max-height : 80vh;
    top: 50%;
    translate: 0 calc(-50%);
    left: 45%;
    outline: 7px solid rgb(20, 20, 20);
    outline-offset: 5px;
    border-radius: rem(45);
    background: rgb(235, 208, 220);
    &::after {
      content: "";
      position: absolute;
      top: 30%;
      left: calc(100% + 13px);
      background: rgb(20, 20, 20);
      border-bottom-right-radius: rem(4);
      border-top-right-radius: rem(4);
      width: rem(5);
      height: rem(100);
      display: block;
    }
  }
  @include large-up {
    left: 55%;
  }

  &__burger {
    display: none;
    position: absolute;
    top: rem(20);
    right: rem(20);
    width: rem(32);
    height: rem(32);

    flex-direction: column;
    gap: 4px;
    span {
      display: block;
      width: 100%;
      height: 4px;
      background: #f8bcbc;
      border-radius: 20px;
    }
    @media (min-width: 800px) {
      display: flex;
    }
  }
  &__img {
    overflow: hidden;
    height: 55vh;
    display: block;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    @media (min-width: 800px) {
      height: 55%;
      border-top-left-radius: rem(45);
      border-top-right-radius: rem(45);
    }
  }

  &__name {
    position: absolute;
    top: rem(12);
    left: rem(20);
    font-weight: 900;
    font-size: rem(32);
    line-height: 1;
    color: #f15a52;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__socials {
    display: flex;
    flex-direction: column;
    gap: rem(16);
    position: absolute;
    right: rem(20);
    top: rem(150);
    svg {
      width: rem(32);
      height: auto;
      background: white;
      border-radius: 50%;
      outline: #f15a52 2px solid;
      outline-offset: -1px;
    }
  }
  &__chevron {
    span {
      animation: ChevronWaves 2s alternate infinite linear;
      position: absolute;
      bottom: rem(90);
      left: rem(20);
      height: rem(15);
      width: rem(15);
      display: block;
      z-index: 2;
      border-bottom: rem(3) solid #f15a52;
      border-left: rem(3) solid #f15a52;
      border-radius: 2px;
      rotate: -45deg;
      @media (min-width: 800px) {
        bottom: rem(20);
      }
      &:nth-child(1) {
        border-color: #f15a52c5;
        animation-delay: 0.1s;
        bottom: rem(105);
        @media (min-width: 800px) {
          bottom: rem(35);
        }
      }
      &:nth-child(2) {
        border-color: #f15a52a8;
        bottom: rem(120);
        animation-delay: 0.2s;
        @media (min-width: 800px) {
          bottom: rem(50);
        }
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
        border-color: #f15a5277;
        bottom: rem(135);
        @media (min-width: 800px) {
          bottom: rem(65);
        }
      }
    }
  }

  h1 {
    color: #f15a52;
    font-size: rem(30);
    margin-top: rem(20);
    margin-bottom: rem(20);
    margin-left: rem(30);
    font-weight: 900;
  }
  p {
    margin-inline: rem(30);
    color: #d692a9;
    font-size: rem(20);
    font-weight: 500;
  }

  &__text {
    overflow: hidden;
    height: 45vh;
    border-bottom-left-radius: rem(45);
    border-bottom-right-radius: rem(45);
    position: relative;
    z-index: 1;
    
    padding-bottom: rem(150);
    
    @media (min-width: 800px) {
      height: 45%;
      padding-bottom: rem(0);
    }
  }
}

@keyframes ChevronWaves {
  to {
    translate: 0 4px;
  }
}
</style>
