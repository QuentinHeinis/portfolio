<script setup>
const footerId = useState("footerId");
footerId.value = "02";

const { client } = usePrismic();

const { data: myprojects } = await useAsyncData("home", () => {
  const response = client.getSingle("projectlist");
  if (response) {
    return response;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
const selectedProject = computed(() =>
  myprojects.value.data.project_list.filter((item) =>
    item.project.tags.includes("visible")
  )
);
let projects = ref([]);
selectedProject.value.forEach((project) => {
  let img = project.project_img.url;
  let title = project.project_title[0].text;
  let uid = project.project.uid;
  projects.value.push({ img, title, uid });
});

useSeoMeta({
  title: "Quentin Heinis - Portfolio",
  ogTitle: "Quentin Heinis - Portfolio",
  description: "Présentation de mes projets",
  ogDescription: "Présentation de mes projets",
  ogImage: "/favicon.png",
});
</script>

<template>
  <section class="hero">
    <h1>Découvrez mes projets</h1>
  </section>
  <ProjectList :projects="projects" />
</template>

<style lang="scss" scoped>
.hero {
  height: 60vh;
  background-image: url("/img/projectsTemplate/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  h1 {
    font-family: "Gugi", sans-serif;
    font-size: rem(32);
  }
}
</style>
