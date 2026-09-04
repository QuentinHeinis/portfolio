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
let initDone = false;

gsap.registerPlugin(ScrollTrigger, SplitText);

const init = () => {
  if (initDone || !text.value) return;

  const paragraphs = text.value.querySelectorAll("p");
  if (paragraphs.length === 0) return;

  initDone = true;
  mm = gsap.matchMedia();
  mm.add(
    {
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)",
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;

      paragraphs.forEach((p) => {
        if (isDesktop) {
          gsap.set(p, { opacity: 1 });

          const split = SplitText.create(p, { type: "lines" });

          gsap.set(split.lines, { y: 60, autoAlpha: 0 });
          gsap.to(split.lines, {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: p,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          });
        } else if (isMobile) {
          gsap.set(p, { clearProps: "opacity" });
        }
      });

      ScrollTrigger.refresh();
    }
  );
};

const tryInit = () => {
  if (text.value?.querySelectorAll("p").length) {
    init();
  }
};

onMounted(() => {
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
      init();
    });
  } else {
    init();
  }
  window.addEventListener("load", tryInit);
});

watch(
  () => props.description,
  () => nextTick(tryInit),
  { deep: true }
);

onBeforeUnmount(() => {
  window.removeEventListener("load", tryInit);
  mm?.revert();
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
        overflow: hidden;
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
