<script lang="ts" setup>
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text = ref<HTMLElement>();

let mm: ReturnType<typeof gsap.matchMedia> | null = null;

gsap.registerPlugin(ScrollTrigger, SplitText);

const init = () => {
  if (!text.value) return;

  mm = gsap.matchMedia();
  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;
      const paragraphs = text.value.querySelectorAll("p");

      if (isDesktop) {
        gsap.set(paragraphs, { opacity: 1 });

        paragraphs.forEach((p) => {
          const split = SplitText.create(p, { type: "lines" });

          gsap.from(split.lines, {
            y: 60,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: p,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });
        });
      } else if (isMobile) {
        gsap.set(paragraphs, { clearProps: "opacity" });
      }

      ScrollTrigger.refresh();
    }
  );
};

onMounted(() => {
  if (document.fonts?.ready) {
    document.fonts.ready.then(init);
  } else {
    init();
  }
});

onBeforeUnmount(() => {
  mm?.revert();
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>


<template>
  <div class="about">
    <div class="about__txt" ref="text">
      <p>Bonjour !</p>
      <p>
        Je suis Quentin, développeur fullstack basé en Franche-Comté. Diplômé
        d'un BUT Métiers du Multimédia et de l'Internet, j'ai construit mon
        expérience en alternance puis en agence, sur des projets variés — du
        site vitrine à l'application web complexe.
      </p>
      <p>
        Aujourd'hui lead développeur à temps partiel pour une agence à
        Lons-Le-Saunier et freelancer en parallèle, j'accompagne entreprises
        et particuliers dans la réalisation de leurs projets numériques.
      </p>
      <p>
        Au-delà du web, je suis aussi passionné par la création de jeux vidéo
        et d'applications.
      </p>
      <p>
        Vous avez un projet en tête ou simplement envie d'échanger ?
        N'hésitez pas à me contacter.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: space-around;
  gap: rem(30) 0;
  flex-wrap: wrap;

  &__txt {
    display: flex;
    color: #fff;
    flex-direction: column;
    gap: rem(28);
    font-size: rem(20);
    width: 100%;

    @include small-up {
      width: 40%;
    }

    p {
      @media screen and (min-width: 800px) {
        max-width: 768px;
        opacity: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
