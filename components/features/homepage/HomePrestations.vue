<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let items = gsap.utils.toArray(".list-item");

  items.forEach((item, i) => {
    gsap.fromTo(
      item,
      {
        y: 200,
      },
      {
        scrollTrigger: {
          trigger: item,
        },
        y: 0,
      }
    );
  });
});
</script>

<template>
  <MyList>
    <MyListItem class="list-item"
      >Site vitrine

      <template #description>
        <div class="desc">
          <div class="text">
            <p>
              Pour vos sites vitrine ou pages d'atterrissage, je crée des
              maquettes fonctionnelles avec Nuxt.js, un framework JavaScript
              français qui garantit des applications web rapides et bien
              référencées sur les moteurs de recherche.
            </p>
            <p class="mt-4">
              Pour des projets plus complexes, je collabore avec des designers
              talentueux afin de donner vie à vos idées. Si vous avez besoin
              d’un système de gestion de contenu, j’utilise Prismic, un CMS
              flexible qui facilite la gestion et la mise à jour de votre
              contenu.
            </p>
          </div>
          <div class="img">
            <NuxtImg src="/graphics/76.png" alt="" />
          </div>
        </div>
      </template>
    </MyListItem>
    <MyListItem class="list-item"
      >E-Commerce
      <template v-slot:description>
        <div class="desc">
          <div class="text">
            <p>
              Pour vos projets de e-commerce, je combine la puissance de Nuxt.js
              avec WordPress en mode headless. Cela vous permet de bénéficier de
              l’expertise de WordPress pour la gestion de contenu tout en
              offrant une expérience utilisateur fluide et rapide.
            </p>
          </div>
          <div class="img">
            <NuxtImg src="/graphics/54.png" alt="" />
          </div>
        </div>
      </template>
    </MyListItem>
    <MyListItem class="list-item"
      >Web app
      <template v-slot:description>
        <div class="desc">
          <div class="text">
            <p>
              Souhaitez-vous développer une application web ? J'utilise Vue.js
              pour créer des applications performantes et réactives. Cette
              technologie permet de concevoir des interfaces utilisateur
              dynamiques tout en offrant une expérience fluide et intuitive sur
              tous les navigateurs. Votre application pourra être accessible à
              un large public ou conçue pour un usage interne, garantissant une
              interaction optimale selon vos besoins spécifiques.
            </p>
          </div>
          <div class="img">
            <NuxtImg src="/graphics/11.png" alt="" />
          </div>
        </div>
      </template>
    </MyListItem>
    <MyListItem class="list-item"
      >Applications mobiles
      <template v-slot:description>
        <div class="desc">
          <div class="text">
            <p>
              Vous souhaitez développer une application mobile ? J'utilise Ionic
              pour créer des applications cross-platform. Cela signifie que
              votre application sera accessible sur tous les appareils, tout en
              offrant une expérience utilisateur harmonieuse.
            </p>
          </div>
          <div class="img">
            <NuxtImg src="/graphics/55.png" alt="" />
          </div>
        </div>
      </template>
    </MyListItem>
    <MyListItem class="list-item"
      >Maintenance et formation
      <template v-slot:description>
        <div class="desc">
          <div class="text">
            <p>
              Une fois votre site ou application en ligne, je propose un service
              de maintenance pour garantir son bon fonctionnement. Je m'assure
              que votre site reste sécurisé, rapide et à jour, en effectuant des
              sauvegardes régulières et en appliquant les dernières mises à jour
              de sécurité.
            </p>
            <p class="mt-4">
              Je propose également des sessions de formation pour vous aider à
              prendre en main votre site ou application. Vous apprendrez à gérer
              votre contenu, à effectuer des mises à jour et à optimiser votre
              présence en ligne.
            </p>
          </div>
          <div class="img">
            <NuxtImg src="/graphics/49.png" alt="" />
          </div>
        </div>
      </template>
    </MyListItem>
  </MyList>

  <p class="contact-me">
    N’hésitez pas à me contacter pour discuter de votre projet et voir comment
    je peux vous aider à réaliser vos objectifs !
  </p>
  <MyBtn class="btn" variant="third" color="black" href="/contact"
    >Me contacter</MyBtn
  >
</template>

<style lang="scss" scoped>
.desc {
  display: flex;
  gap: rem(30);
  align-items: center;
  justify-content: space-between;
  .text {
    max-width: $sm;
    p {
      border-left: 1px solid #000;
      padding-left: rem(16);
      &.mt-4 {
        margin-top: rem(16);
      }
    }
  }
  .img {
    display: none;
    height: 100%;
    padding-right: rem(16);
    @include medium-up {
      display: block;
    }
    img {
      width: 100%;
      height: auto;
      max-width: rem(300);
      max-height: rem(300);
      object-fit: contain;
    }
  }
}

.contact-me {
  margin-top: rem(60);
  margin-inline: rem(20);
  text-align: center;
}

.btn {
  margin-top: rem(30);
  max-width: fit-content;
  margin-inline: auto;
  color: #000;
  &:hover {
    color: #fff;
    border-color: #ff9633;
    border-width: 2px;
    transition: all 0.1s ease;
  }
}
</style>
