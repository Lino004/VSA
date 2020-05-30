<template>
  <b-field>
    <b-upload v-model="dropFiles"
      drag-drop
      class="is-profil"
      :loading="isLoad"
      @input="saveImageUrl">
      <section>
        <figure class="image" :style="`width: ${size}px; height: ${size}px;`">
          <img class="is-rounded" :src="value" @load="imageLoad" v-if="value">
          <img class="is-rounded" src="@/assets/images/general/default-user-avatar.png" v-else>
        </figure>
      </section>
      <a class="button is-rounded is-primary is-wh-50px is-btn-edit">
        <b-icon
          pack="fas"
          icon="pencil-alt">
        </b-icon>
      </a>
    </b-upload>
  </b-field>
</template>

<script>
export default {
  components: {},
  props: {
    value: String,
    size: {
      type: Number,
      default: 220,
    },
  },
  data: () => ({
    dropFiles: null,
    imageUrl: null,
    elementImg: null,
    file: null,
    typeImgAccept: [
      'jpg',
      'jpeg',
      'png',
    ],
    isLoad: false,
  }),
  watch: {
    async elementImg(img) {
      const canvas = document.createElement('canvas');
      const MAX = 600;
      let { width, height } = img;
      let sx = 0;
      let sy = 0;
      if (width > height) {
        if (height > MAX) {
          height = MAX;
          sy = (img.height - height) / 2;
        }
        width = height;
        sx = (img.width - width) / 2;
      } else {
        if (width > MAX) {
          width = MAX;
          sx = (img.width - width) / 2;
        }
        height = width;
        sy = (img.height - height) / 2;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, sx, sy, width, height, 0, 0, width, height);
      this.imageUrl = canvas.toDataURL(this.file.type);
      this.$emit('input', this.imageUrl);
    },
  },
  computed: {},
  methods: {
    saveImageUrl(e) {
      if (this.typeImgAccept.includes(e.type.split('/')[1])) {
        this.isLoad = true;
        this.file = e;
        this.$emit('fileChange', e);
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target.result;
          this.elementImg = img;
        };
      } else {
        this.dropFiles = null;
        this.$emit('error');
      }
    },
    imageLoad() {
      this.isLoad = false;
    },
  },
};
</script>

<style lang="scss">
.profil-edit-enfant{
  width: 220px;
  height: 220px;
}
.is-profil{
  .upload-draggable{
    position: relative;
    border: none !important;
    .is-btn-edit{
      position: absolute;
      bottom: 10px;
      right: 10px;
      border: 2px solid white;
    }
  }
}
</style>
