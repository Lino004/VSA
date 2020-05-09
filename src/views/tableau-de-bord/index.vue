<template>
  <div class="is-full has-background-color-background">
    <div class="sidebar-page">
      <section class="sidebar-layout">
        <BarMenuLargeScreen/>
        <BarMenuOver v-model="showsildebar"/>
        <div class="p-1 pr-50 is-width-100p has-text-black" id="content-tableau-de-bord">
          <NavBar v-model="showsildebar"/>
          <div>
            <router-view/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BarMenuLargeScreen from '@/components/tableau-de-bord/BarMenu.vue';
import BarMenuOver from '@/components/tableau-de-bord/BarMenuOver.vue';
import NavBar from '@/components/tableau-de-bord/NavBar.vue';

export default {
  components: {
    BarMenuLargeScreen,
    NavBar,
    BarMenuOver,
  },
  data() {
    return {
      showsildebar: false,
    };
  },
};
</script>

<style lang="scss">

</style>
