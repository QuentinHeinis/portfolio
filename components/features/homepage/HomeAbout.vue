<script lang="ts" setup>
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text = ref<HTMLElement>();

gsap.registerPlugin(ScrollTrigger, SplitText);

onMounted(() => {
  gsap.fromTo(".about__txt p", { opacity: 0 }, { opacity: 1 });

  let mm = gsap.matchMedia();
  mm.add("screen and (min-width: 768px)", () => {
    if (!text.value) return;

    // Split chaque paragraphe en lettres
    const paragraphs = text.value.querySelectorAll("p");
    paragraphs.forEach((p) => {
      const split = SplitText.create(p, {
        type: "words, lines", // on split en mots et lignes
        mask: "lines", // ajoute un masque autour de chaque ligne
        linesClass: "line++", // ajoute .line1, .line2, etc.
      });

      // Animation par ligne et mot
      gsap.from(split.words, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.02,
          from: "start",
        },
        scrollTrigger: {
          trigger: p,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });
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
      }
    }
  }
}
</style>
