<script lang="ts" setup>
import gsap from "gsap";

const loaderAnime = useState("loaderAnime");

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".logo > div:first-child img", {
        opacity: 0,
        scale: 0.7,
        duration: 0.8,
    },{
        opacity: 1,
        scale: 1,
    })
        .fromTo(
            ".text .line:first-child img",
            {
                y: 40,
                opacity: 0,
                duration: 0.6,
            },{
              y: 0,
              opacity: 1,
            }
        , "-=0.3") 
        
        .fromTo(
            ".text .line:last-child",
            {
                y: 40,
                opacity: 0,
                duration: 0.6,
            },{
              y: 0,
              opacity: 1,
            }
        , "-=0.3")  
        .to(".preloader", {
            yPercent: -100,
            duration: 1,
            ease: "power2.inOut",
            delay: 0.4,
            onComplete: () => { loaderAnime.value = true }
        });
});

</script>

<template>
    <div class="preloader">
        <div class="logo">
            <div>
                <img src="/logo-dark.svg" alt="">
            </div>
            <div class="text">
                <div class="line">
                    <img src="/studio.svg" alt="">
                    <img src="/o.svg" alt="" class="o">

                </div>
                <img src="/heinis.svg" alt="" class="line">
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
  .preloader {
    position: fixed;
    z-index: 1000;
    height: 100vh;
    width: 100vw;
    background: #d2be9f;
    display: grid;
    place-content: center;
    .logo {
      display: flex;
      gap: 40px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @include medium-up {
        flex-direction: row;
      }

      & > div:first-child img{
        opacity:0;
      }
    }
    .line {
      display: flex;
      align-items: baseline;
      gap: rem(6);
      height: 50px;
      img {
        height: 50px;
        &.o {
          height: 40px;
        }
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .line:last-child, .line:first-child img{
        opacity : 0;
      }
    }
  }
</style>
