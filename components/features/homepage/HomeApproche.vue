<script lang="ts" setup></script>

<template>
  <ul class="approche">
    <li class="approche__card">
      <MyGridBg background="rgb(36, 22, 28)" />
      <div class="approche__video">
        <video src="/video/circularFluid.mp4" muted playsinline autoplay loop />
      </div>
      <div class="approche__text">
        <h3>Approche personnalisée :</h3>
        <p>
          Je suis à l'écoute de vos besoins et m'engage à créer une solution qui
          vous ressemble.
        </p>
      </div>
    </li>
    <li class="approche__card">
      <MyGridBg background="rgb(36, 22, 28)" />
      <div class="approche__video">
        <video
          src="/video/circularFluid-blue.mp4"
          muted
          playsinline
          autoplay
          loop
        />
      </div>
      <div class="approche__text">
        <h3>Design sur mesure :</h3>
        <p>
          Je conçois le design de votre site pour qu'il reflète parfaitement
          votre vision.
        </p>
      </div>
    </li>
    <li class="approche__card">
      <MyGridBg background="rgb(36, 22, 28)" />
      <div class="approche__video">
        <video
          src="/video/circularFluid-purple.mp4"
          muted
          playsinline
          autoplay
          loop
        />
      </div>
      <div class="approche__text">
        <h3>Choix de template :</h3>
        <p>
          Vous avez également la possibilité d'opter pour un template que nous
          personnaliserons ensemble, assurant ainsi un rendu professionnel et
          rapide.
        </p>
      </div>
    </li>
    <li class="approche__card">
      <MyGridBg background="rgb(36, 22, 28)" />
      <div class="approche__video">
        <video src="/video/circularFluid.mp4" muted playsinline autoplay loop />
      </div>
      <div class="approche__text">
        <h3>Votre design, votre choix :</h3>
        <p>
          Si vous avez déjà une idée précise, n'hésitez pas à me proposer votre
          propre design ; je me ferai un plaisir de l'intégrer.
        </p>
      </div>
    </li>
    <li class="approche__card">
      <MyGridBg background="rgb(36, 22, 28)" />
      <div class="approche__video">
        <video
          src="/video/circularFluid-blue.mp4"
          muted
          playsinline
          autoplay
          loop
        />
      </div>
      <div class="approche__text">
        <h3>Collaboration avec des experts :</h3>
        <p>
          Pour des demandes très spécifiques, je peux faire appel à un freelance
          expert en webdesign, garantissant un résultat à la hauteur de vos
          attentes.
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.approche {
  list-style: none;
  padding: 0;
  display: flex;
  max-width: $lg;
  margin-inline: auto;
  gap: rem(30);
  flex-wrap: wrap;
  justify-content: center;
  &__card {
    display: flex;
    flex-direction: column;
    border: 1px solid #fff;
    border-radius: rem(8);
    position: relative;
    overflow: hidden;
    counter-increment: list-count 1;
    max-width: rem(450);
    &::after {
      content: counter(list-count, decimal-leading-zero);
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }

  &__text {
    padding: rem(20) rem(40);
    border-top: 1px solid #fff;
    h3 {
      margin-bottom: rem(20);
      font-weight: 900;
      text-transform: uppercase;
    }
  }
  &__video {
    display: grid;
    place-items: center;
    video {
      mix-blend-mode: screen;
      height: 70%;
    }
  }
}
</style>
