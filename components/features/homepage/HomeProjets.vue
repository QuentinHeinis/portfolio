<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  sectionEl: {
    type: Object as () => HTMLElement | undefined,
    default: undefined,
  },
});

const { client } = usePrismic();

const { data: myprojects } = await useAsyncData("home-projects", () => {
  return client.getSingle("projectlist");
});


const featuredProjects = computed(() => {
  if (!myprojects.value) return [];
  return myprojects.value.data.project_list
    .filter((item) => item.project.tags.includes("visible") && item.project.tags.includes("selected"))
    .slice(0, 4)
    .map((project, i) => ({
      img: project.project_img.url,
      title: project.project_title[0].text,
      uid: project.project.uid,
      index: i,
    }));
});

onMounted(() => {
  const cards = gsap.utils.toArray(".project-stack__card");
  const pinTarget = props.sectionEl || document.querySelector("#mes-projets");

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;

      if (isDesktop) {
        const n = cards.length;
        const cardW = cards[0].offsetWidth;
        const vw = window.innerWidth;
        const spacing = Math.min(cardW * 0.45, vw * 0.15);
        const stackWidth = (n - 1) * spacing;

        gsap.set(cards, {
          position: "absolute",
          top: "40%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          x: (i) => vw / 2 + cardW / 2 + 100 + i * 40,
          y: 0,
          scale: 0.95,
          rotate: (i) => (i % 2 === 0 ? -3 : 3),
          transformOrigin: "center center",
          zIndex: (i) => i + 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinTarget,
            start: "top top",
            end: "+=" + cards.length * 250 + "px",
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
              x: (i * spacing) - stackWidth / 2,
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
              start: "top 85%",
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

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <div class="project-stack">
    <NuxtLink
      v-for="project in featuredProjects"
      :key="project.uid"
      :to="`/projets/${project.uid}`"
      class="project-stack__card"
      @mouseenter="emitHovered"
      @mouseleave="emitLeaveHovered"
      @click="emitLeaveHovered"
    >
      <div class="project-stack__img">
        <NuxtImg :src="project.img" :alt="project.title" />
      </div>
      <div class="project-stack__text">
        <h3>{{ project.title }}</h3>
        <span>Voir le projet →</span>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.project-stack {
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
    border: 1px solid #333;
    border-radius: rem(8);
    position: absolute;
    max-width: rem(450);
    width: 100%;
    background: #090a11;
    overflow: hidden;
    counter-increment: list-count 1;
    opacity: 0;
    transform-origin: center center;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &::after {
      content: counter(list-count, decimal-leading-zero);
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: rem(14);
      opacity: 0.5;
      z-index: 2;
    }

    &:hover {
      .project-stack__img img {
        filter: brightness(0.3);
        transform: scale(1.1);
      }

      .project-stack__text span {
        color: #f15a52;
      }
    }
  }

  &__img {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.5);
      transition: all 0.4s ease;
    }
  }

  &__text {
    padding: rem(20) rem(40);
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-family: "Asgard", sans-serif;
      font-weight: 900;
      text-transform: uppercase;
      font-size: rem(18);
      color: #fff;
    }

    span {
      font-size: rem(14);
      opacity: 0.6;
      transition: color 0.3s ease;
      white-space: nowrap;
    }
  }
}
</style>
