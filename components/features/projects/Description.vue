<script setup>
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  description: {
    value: [Number, String, Array],
  },
  stacks: Array,
  clientName: String,
  date: String,
  link: String,
});

const text = ref();

let mm;

gsap.registerPlugin(ScrollTrigger, SplitText);
onMounted(() => {
  gsap.fromTo(".project-description__text p", { opacity: 0 }, { opacity: 1 });
  mm = gsap.matchMedia();
  mm.add("screen and (min-width: 768px)", () => {
    for (let paragraph of text.value.children) {
      const split = SplitText.create(paragraph, {
        type: "lines",
      });

      gsap.from(split.lines, {
        translateY: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: paragraph,
          start: "top bottom-=50px",
          toggleActions: "play none none reverse",
        },
      });
    }
  });
});

onBeforeUnmount(() => {
  mm?.revert();
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <MySection
    className="project-description"
    id="01"
    sectionName="Description"
    backgroundColor="#090a11"
  >
    <div class="project-description__text" ref="text">
      <p v-for="(paragraph, index) in description" :key="index">
        {{ paragraph.text }}
      </p>
    </div>
    <aside>
      <div>
        <h3 v-if="clientName">Client</h3>
        <p v-if="clientName">{{ clientName }}</p>
        <h3>Année</h3>
        <p>{{ date }}</p>
        <h3
          @mouseenter="emitHovered"
          @mouseleave="emitLeaveHovered"
          @click="emitLeaveHovered"
          v-if="link"
          class="link"
        >
          <NuxtLink :to="link" target="_blank">Visiter le site</NuxtLink>
        </h3>
      </div>
      <div v-if="stacks">
        <h3>Stacks</h3>
        <p v-for="(stack, index) in stacks" :key="index">
          {{ stack.text }}
        </p>
      </div>
    </aside>
  </MySection>
</template>

<style lang="scss">
.project-description {
  padding-bottom: rem(120);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (min-width: 800px) {
    flex-wrap: nowrap;
  }
  h3 {
    color: #dccce0;
    font-size: rem(14);
    a {
      color: #dccce0;
      text-decoration: underline;
    }
  }
  .link {
    position: absolute;
    top: 20px;

    right: rem(20);
    @include small-up {
      right: rem(80);
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: rem(50);
    font-size: rem(28);
    p {
      @media screen and (min-width: 800px) {
        width: 500px;
        opacity: 0;
      }
    }
  }
  aside {
    width: 500px;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    @media screen and (min-width: 800px) {
      margin-top: 0;
    }
  }
}
</style>
