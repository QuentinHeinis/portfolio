<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const cards = gsap.utils.toArray(".approche__card");
  const section = document.querySelector(".approche");

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;

      if (isDesktop) {
        // Animation desktop
        gsap.set(cards, {
          position: "absolute",
          top: "50%",
          left: "0",
          xPercent: 0,
          yPercent: -50,
          opacity: 0,
          x: (i) => 300 + i * 40,
          y: 0,
          scale: 0.95,
          rotate: (i) => (i % 2 === 0 ? -5 : 5),
          transformOrigin: "center center",
          zIndex: (i) => i + 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=" + cards.length * 400 + "px",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        cards.forEach((card, i) => {
          tl.to(
            card,
            {
              opacity: 1,
              x: i * 90,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            i
          );

          if (i > 0) {
            tl.to(
              cards[i - 1],
              {
                scale: 0.96,
                duration: 0.4,
              },
              i
            );
          }
        });
      }

      if (isMobile) {
        // Mobile : empilement vertical + reveal au scroll
        gsap.set(cards, {
          position: "relative",
          top: 0,
          left: 0,
          x: 0,
          y: 50,
          scale: 1,
          rotate: 0,
          opacity: 0,
          zIndex: 1,
        });

        cards.forEach((card) => {
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // quand la card arrive dans la viewport
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        });
      }
    }
  );
});
</script>


<template>
  <ul class="approche">
    <li class="approche__card">
      <MyGridBg background="#090a11" />
      <div class="approche__video">
        <video src="/video/circularFluid.mp4" muted playsinline autoplay loop />
      </div>
      <div class="approche__text">
        <h3>Approche personnalisée :</h3>
        <p>
          Je suis à l'écoute de vos besoins et m'engage à créer une solution qui
          vous ressemble.
        </p>
      </div>
    </li>

    <li class="approche__card">
      <MyGridBg background="#090a11" />
      <div class="approche__video">
        <video src="/video/circularFluid-blue.mp4" muted playsinline autoplay loop />
      </div>
      <div class="approche__text">
        <h3>Design sur mesure :</h3>
        <p>
          Je conçois le design de votre site pour qu'il reflète parfaitement
          votre vision.
        </p>
      </div>
    </li>

    <li class="approche__card">
      <MyGridBg background="#090a11" />
      <div class="approche__video">
        <video src="/video/circularFluid-purple.mp4" muted playsinline autoplay loop />
      </div>
      <div class="approche__text">
        <h3>Choix de template :</h3>
        <p>
          Vous pouvez aussi opter pour un template que nous personnaliserons
          ensemble.
        </p>
      </div>
    </li>

    <li class="approche__card">
      <MyGridBg background="#090a11" />
      <div class="approche__video">
        <video src="/video/circularFluid.mp4" muted playsinline autoplay loop />
      </div>
      <div class="approche__text">
        <h3>Votre design, votre choix :</h3>
        <p>
          Si vous avez déjà une idée précise, je peux intégrer votre propre
          design.
        </p>
      </div>
    </li>

    <li class="approche__card">
      <MyGridBg background="#090a11" />
      <div class="approche__video">
        <video src="/video/circularFluid-blue.mp4" muted playsinline autoplay loop />
      </div>
      <div class="approche__text">
        <h3>Collaboration avec des experts :</h3>
        <p>
          Pour des demandes spécifiques, je peux faire appel à des freelances
          spécialisés.
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.approche {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  max-width: $lg;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: rem(20);

  @include medium-up {
    height: 100vh;
    flex-direction: row;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: rem(8);
    position: absolute;
    max-width: rem(450);
    background: #090a11;
    overflow: hidden;
    counter-increment: list-count 1;
    opacity: 0;
    transform-origin: center center;

    &::after {
      content: counter(list-count, decimal-leading-zero);
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: rem(14);
      opacity: 0.5;
    }
  }

  &__text {
    padding: rem(20) rem(40);
    border-top: 1px solid #fff;

    h3 {
      margin-bottom: rem(20);
      font-weight: 900;
      text-transform: uppercase;
      font-family: "Asgard", sans-serif;
    }
  }

  &__video {
    display: grid;
    place-items: center;
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;

    @include medium-up {
      overflow: hidden;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: screen;
    }
  }

}
</style>
