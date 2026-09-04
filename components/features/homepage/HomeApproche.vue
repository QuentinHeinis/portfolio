<script setup lang="ts">
const openIndex = ref<number | null>(null);
const list = ref<HTMLElement>();
const effect = ref<HTMLElement>();

const steps = [
  {
    num: "01",
    title: "Écoute & Analyse",
    text: "Je commence par comprendre vos besoins, votre secteur et vos objectifs pour poser les bases d'un projet réussi.",
    img: "/graphics/76.png",
  },
  {
    num: "02",
    title: "Conception",
    text: "Je conçois l'architecture et le design de votre projet, en validant chaque étape avec vous avant de passer au développement.",
    img: "/graphics/54.png",
  },
  {
    num: "03",
    title: "Développement",
    text: "Je développe votre projet avec des technologies modernes et performantes, en assurant qualité et maintenance du code.",
    img: "/graphics/11.png",
  },
  {
    num: "04",
    title: "Livraison & Suivi",
    text: "Je vous accompagne après la mise en ligne : formation, ajustements et support pour garantir le bon fonctionnement.",
    img: "/graphics/55.png",
  },
];

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const handleEffect = (e: MouseEvent) => {
  if (!list.value || !effect.value) return;

  const myList = list.value.getBoundingClientRect();
  const mouseY = e.clientY - myList.top;

  for (const item of list.value.children) {
    const title = item.children[0] as HTMLElement;
    const desc = item.children[1] as HTMLElement;
    const itemTop = title.getBoundingClientRect().top - myList.top;
    const itemBottom = desc.getBoundingClientRect().bottom - myList.top;

    if (mouseY >= itemTop && mouseY < itemBottom) {
      effect.value.style.top = itemTop + "px";
      return;
    }
  }

  effect.value.style.top = "0px";
};
</script>

<template>
  <div class="process">
    <span class="process__effect" ref="effect"></span>
    <ul
      class="process__list"
      ref="list"
      @mousemove="handleEffect"
      @click="(e) => { handleEffect(e); }"
    >
      <li
        v-for="(step, i) in steps"
        :key="step.num"
        :class="['process__item', { '-open': openIndex === i }]"
      >
        <div class="process__item-title" @click="toggle(i)">
          <span class="process__item-num">{{ step.num }}</span>
          <p>{{ step.title }}</p>
          <span class="process__item-chevron">
            <span></span>
          </span>
        </div>
        <div class="process__item-desc">
          <div class="process__item-desc-content">
            <div class="process__item-inner">
              <div class="process__item-text">
                <p>{{ step.text }}</p>
              </div>
              <div class="process__item-video">
                <NuxtImg :src="step.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.process {
  position: relative;
  max-width: $xl;
  margin-inline: auto;

  &__effect {
    height: 80px;
    width: 100%;
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    opacity: 0;
    background: rgb(0, 0, 0);
    transition: all 0.3s ease;
  }

  &:hover &__effect {
    opacity: 1;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    width: 100%;
    border-bottom: 1px solid rgb(0, 0, 0);
    color: #000000;

    &-title {
      position: relative;
      transition: all 0.3s ease;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      font-family: "Asgard", sans-serif;
      gap: rem(16);
      padding-right: rem(60);

      &:hover {
        color: #e3d7c0;
        padding-left: rem(12);
      }

      &:hover .process__item-chevron {
        scale: 1;
        rotate: 0deg;
        background: #f15a52;

        span {
          border-color: #000;
        }
      }
    }

    &-num {
      font-family: "Asgard", sans-serif;
      font-weight: 900;
      font-size: rem(14);
      opacity: 0.5;
    }

    &-desc {
      display: grid;
      grid-template-rows: 0fr;
      transition: 250ms grid-template-rows ease;
      width: 100%;

      &-content {
        overflow: hidden;

        & > div {
          padding: 20px;
        }
      }
    }

    &-inner {
      display: flex;
      gap: rem(30);
      align-items: center;
      justify-content: space-between;
    }

    &-video {
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

    &-text {
      max-width: $sm;
      p {
        border-left: 1px solid #000;
        padding-left: rem(16);
        font-size: rem(16);
        color: #333;
        line-height: 1.6;
      }
    }

    &-chevron {
      position: absolute;
      right: rem(20);
      width: rem(36);
      height: rem(36);
      display: grid;
      place-items: center;
      background: #000;
      border-radius: 50%;
      scale: 0.2;
      rotate: 45deg;
      transition: all 0.3s cubic-bezier(0.3, 0.2, 0.2, 1.8);
      pointer-events: none;

      span {
        transition: all 0.5s ease;
        display: block;
        width: rem(12);
        height: rem(12);
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        rotate: 45deg;
        translate: 0 -2px;
      }
    }

    &.-open > .process__item-desc {
      grid-template-rows: 1fr;
    }

    &.-open > .process__item-title {
      color: #000000;
      padding-left: rem(12);
    }

    &.-open:hover > .process__item-title {
      color: #e3d7c0;
      padding-left: rem(12);
    }

    &.-open > .process__item-title .process__item-chevron {
      scale: 1;
      rotate: 180deg;
      background: #f15a52;

      span {
        border-color: #000;
      }
    }
  }
}
</style>
