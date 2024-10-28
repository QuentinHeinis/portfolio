<script setup>
const footerId = useState("footerId");
footerId.value = "04";

const { client } = usePrismic();
const route = useRoute();
const slug = route.params.slug;

const { data: project } = await useAsyncData(slug, async () => {
  const document = await client.getByUID("project", slug);

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});

const { data: prev } = await useAsyncData("prev", async () => {
  const document = await client.getByUID(
    "project",
    project.value.data.prev.uid
  );
  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
const { data: next } = await useAsyncData("next", async () => {
  const document = await client.getByUID(
    "project",
    project.value.data.next.uid
  );
  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
const date = project.value.data.project_date;
const clientName = project.value.data.project_client;
const stacks = project.value.data.project_stack;
const title = project.value.data.project_name[0].text;
const smallDescription = project.value.data.project_smalldesc[0].text;
const imgs = project.value.data.project_images;
const description = computed(() => {
  return project.value.data.project_desc;
});
useSeoMeta({
  title: "Quentin Heinis - " + project.value.data.project_name[0].text,
  ogTitle: "Quentin Heinis - " + project.value.data.project_name[0].text,
  description: description.value.slice(0, 155),
  ogDescription: description.value.slice(0, 155),
  ogImage: project.value.data.project_img.url,
});
</script>

<template>
  <Hero :title :description="smallDescription" />
  <Description :date :clientName :stacks :description />
  <Images :imgs />
  <ProjectNav :next :prev />
</template>

<style lang="scss" scoped></style>
