<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stringListToHTML, stringSplitter } from "~/utils/stringSplitter";

const text = ref();

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.fromTo(".about__txt p", { opacity: 0 }, { opacity: 1 });

  let mm = gsap.matchMedia();
  mm.add("screen and (min-width: 768px)", () => {
    for (let paragraph of text.value.children) {
      stringListToHTML(stringSplitter(paragraph.innerText, 45), paragraph);
    }
    gsap.set(".about__txt p span", {
      translateY: 50,
      opacity: 0,
    });

    const spans = gsap.utils.toArray<HTMLElement>(".about__txt p span");
    spans.forEach((span) => {
      gsap.to(span, {
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: span,
          start: "top bottom-=50px",
        },
      });
    });
  });
});
</script>

<template>
  <div class="about">
    <div class="about__img">
      <NuxtImg src="/img/me.jpg" alt="Photo de Quentin Heinis" loading="lazy" />
    </div>
    <div class="about__txt" ref="text">
      <p>Bonjour !</p>
      <p>
        Je suis Quentin, un développeur fullstack passionné de 22 ans. Diplômé
        d'un BUT Métiers du Multimédia et de l'Internet, j'ai acquis une
        expérience précieuse en alternance en tant que développeur web,
        travaillant à la fois sur des projets internes pour une entreprise et en
        agence pour divers clients.
      </p>
      <p>
        Actuellement, je suis lead développeur à temps partiel pour une agence à
        Lons-Le-Saunier où je supervise les projets web. En parallèle, je me
        suis lancé en freelance en septembre 2024, offrant mes services en
        développement web pour aider des entreprises et particulier à
        concrétiser leurs idées.
      </p>
      <p>
        Bien que le développement web soit au cœur de mon activité, je suis
        également passionné par la création de jeux vidéo. Actuellement, je
        travaille sur un projet personnel appelé Suihira, où je développe non
        seulement le jeu, mais compose aussi la musique. De plus, je suis en
        train de développer un moteur de jeu 2D, ce qui enrichit encore mes
        compétences techniques et ma compréhension du processus de création de
        jeux.
      </p>
      <p>
        Je suis toujours à la recherche de nouveaux défis et de collaborations
        enrichissantes. N’hésitez pas à me contacter si vous souhaitez discuter
        de projets passionnants ou simplement échanger des idées !
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  gap: rem(30);
  flex-wrap: wrap;
  &__img {
    width: 100%;
    @include small-up {
      width: 30%;
    }
  }

  &__txt {
    display: flex;
    color: #000;
    flex-direction: column;
    gap: rem(28);
    font-size: rem(20);
    width: 100%;
    @include small-up {
      width: 40%;
    }
    p {
      @media screen and (min-width: 800px) {
        display: flex;
        width: 500px;
        flex-direction: column;
        opacity: 0;
      }
    }
  }
}
</style>
