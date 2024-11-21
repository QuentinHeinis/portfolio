<script setup>
const footerId = useState("footerId");
footerId.value = "02";

const mail = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const mailsent = ref(false);
const body = computed(() => {
  return JSON.stringify(mail);
});
const sendMail = async () => {
  if (
    mail.name === "" ||
    mail.email === "" ||
    mail.subject === "" ||
    mail.message === ""
  ) {
    alert("Please fill all the fields");
  } else {
    mailsent.value = true;
    await useFetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then(async (response) => {
        if (response.data.value.statut === 200) {
          await navigateTo("/merci");
        }
      })
      .catch((error) => {
        alert("une erreur s'est produite");
      });
  }
};

const btnContent = computed(() =>
  mailsent.value === true ? "Message envoyé" : "Envoyer le message"
);

useSeoMeta({
  title: "Quentin Heinis - Contact",
  ogTitle: "Quentin Heinis - Contact",
  description:
    "Une question ? Un projet ? Utilisez le formulaire de contact ou bien contactez moi via mes réseaux ",
  ogDescription:
    "Une question ? Un projet ? Utilisez le formulaire de contact ou bien contactez moi via mes réseaux ",
  ogImage: "/favicon.png",
});
</script>

<template>
  <section class="hero">
    <h1>Contactez moi !</h1>
    <p><b>Une question ? Un projet ?</b></p>
    <p>
      Utilisez le formulaire de contact ou bien contactez moi via mes réseaux
    </p>
  </section>
  <MySection
    class="contact"
    id="01"
    section-name="Formulaire de contact"
    background-color="#a2c6b2"
    text-color="#000"
  >
    <form>
      <div class="flex">
        <label>
          Prénom - Nom :
          <input
            type="text"
            placeholder="Prénom - Nom"
            v-model="mail.name"
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            placeholder="Email"
            v-model="mail.email"
            required
          />
        </label>
      </div>
      <label>
        Sujet :
        <input
          type="text"
          placeholder="Sujet"
          v-model="mail.subject"
          required
        />
      </label>

      <div>
        <p>Message :</p>
        <textarea
          placeholder="Message"
          v-model="mail.message"
          required
        ></textarea>
      </div>
      <MyBtn
        @click.prevent="sendMail()"
        ref="btn"
        :disabled="mailsent"
        variant="third"
        class="btn"
        color="black"
      >
        {{ btnContent }}
      </MyBtn>
    </form>
  </MySection>
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
  h1,
  p b {
    font-family: "Gugi", sans-serif;
  }
  h1 {
    font-size: rem(32);
  }
}
.contact {
  form {
    max-width: $md;
    margin-inline: auto;
    font-family: "Gugi", sans-serif;
    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 20px;
    }
    input {
      height: 48px;
      border: #000 1px solid;
      background: transparent;
      color: #fff;
      border-radius: 40px;
      padding-inline: 20px;
      transition: all 0.3s ease;
      font-family: Arial, Helvetica, sans-serif;
      &:focus {
        outline: none;
        border: #ff9633 2px solid;
      }
    }
    textarea {
      width: 100%;
      min-height: 200px;
      max-height: 500px;
      resize: vertical;
      margin-bottom: 20px;
      font-family: Arial, Helvetica, sans-serif;
      border: #000 1px solid;
      background: transparent;
      color: #fff;
      border-radius: 20px;
      padding-inline: 20px;
      padding-top: 16px;
      &:focus {
        outline: none;
        border: #ff9633 2px solid;
      }
    }
    .flex {
      display: flex;
      width: 100%;
      column-gap: 50px;
      flex-wrap: wrap;
      label {
        @include small-up {
          width: calc(50% - 25px);
        }
      }
    }
    .btn {
      width: fit-content;
      margin-inline: auto;
    }
  }
}
</style>
