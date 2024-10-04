<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  gsap.fromTo(".project-description__text p", { opacity: 0 }, { opacity: 1 });
  for (let paragraph of text.value.children) {
    stringListToHTML(stringSplitter(paragraph.innerText, 40), paragraph);
  }
  gsap.set(".project-description__text p span", { translateY: 50, opacity: 0 });

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
</script>

<template>
  <MySection className="project-description" id="02" sectionName="Description">
    <aside>
      <div>
        <h3>Client</h3>
        <p>Client name</p>
        <h3>Année</h3>
        <p>2024</p>
      </div>
      <div>
        <h3>Stacks</h3>
        <p>Stacks 1</p>
        <p>Stacks 2</p>
        <p>Stacks 3</p>
      </div>
    </aside>
    <div class="project-description__text" ref="text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure
        consequatur debitis dolore facilis dolores! Optio hic magni aperiam
        aliquid neque mollitia odio quas porro harum, tenetur nesciunt,
        doloremque laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure
        consequatur debitis dolore facilis dolores! Optio hic magni aperiam
        aliquid neque mollitia odio quas porro harum, tenetur nesciunt,
        doloremque laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure
        consequatur debitis dolore facilis dolores! Optio hic magni aperiam
        aliquid neque mollitia odio quas porro harum, tenetur nesciunt,
        doloremque laborum.
      </p>
    </div>
  </MySection>
</template>

<style lang="scss">
.project-description {
  padding-bottom: rem(120);
  display: flex;
  justify-content: space-around;
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
      display: flex;
      width: 500px;
      flex-direction: column;
      opacity: 0;
    }
  }
  aside {
    width: 500px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
