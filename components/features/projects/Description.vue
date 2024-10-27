<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  description: String,
  stacks: String,
  clientName: String,
  date: String,
});

const text = ref();
const stringSplitter = (myString, chunkSize) => {
  let splitString = [];
  let start = 0;
  while (start < myString.length) {
    // Trouver la fin du chunk
    let end = start + chunkSize;
    // Si on dépasse la longueur de la chaîne, on ajuste
    if (end >= myString.length) {
      splitString.push(myString.slice(start));
      break;
    }
    // Trouver le dernier espace avant la limite de chunkSize
    let lastSpace = myString.lastIndexOf(" ", end);
    // Si aucun espace n'est trouvé, on coupe quand même
    if (lastSpace === -1 || lastSpace < start) {
      lastSpace = end; // coupe à l'endroit prévu si pas d'espace
    }
    // Ajouter le morceau à l'array
    splitString.push(myString.slice(start, lastSpace));
    // Mettre à jour le début pour le prochain chunk
    start = lastSpace + 1; // +1 pour sauter l'espace
  }
  return splitString;
};

const stringListToHTML = (listString, parent) => {
  parent.innerText = "";
  listString.forEach((string) => {
    const span = document.createElement("span");
    span.textContent = string; // Utilise textContent pour éviter l'injection
    parent.appendChild(span);
  });
};

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  let mm = gsap.matchMedia();
  gsap.fromTo(".project-description__text p", { opacity: 0 }, { opacity: 1 });
  mm.add("screen and (min-width: 768px)", () => {
    for (let paragraph of text.value.children) {
      stringListToHTML(stringSplitter(paragraph.innerText, 38), paragraph);
    }
    gsap.set(".project-description__text p span", {
      translateY: 50,
      opacity: 0,
    });

    const spans = gsap.utils.toArray(".project-description__text p span");
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
  <MySection className="project-description" id="01" sectionName="Description">
    <aside>
      <div>
        <h3 v-if="clientName">Client</h3>
        <p>{{ clientName }}</p>
        <h3>Année</h3>
        <p>{{ date }}</p>
      </div>
      <div v-if="stacks">
        <h3>Stacks</h3>
        <p v-for="(stack, index) in stacks" :key="index">
          {{ stack.text }}
        </p>
      </div>
    </aside>
    <div class="project-description__text" ref="text">
      <p v-for="(paragraph, index) in description" :key="index">
        {{ paragraph.text }}
      </p>
    </div>
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
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: rem(50);
    font-size: rem(28);
    p {
      @media screen and (min-width: 800px) {
        display: flex;
        width: 500px;
        flex-direction: column;
        opacity: 0;
      }
    }
  }
  aside {
    width: 500px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
