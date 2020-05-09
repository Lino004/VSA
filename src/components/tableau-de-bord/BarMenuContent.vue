<template>
  <div class="py-30 pl-30 pr-50 is-height-100p div-menu">
    <div>
      <img src="@/assets/images/general/logo.png" alt="Logo VSA"/>
    </div>
    <b-menu class="menu-sildebar">
      <b-menu-list>
        <b-menu-item
          v-for="(m, i) in menu"
          :key="i"
          class="menu-item-sildebar"
          :icon="m.icon"
          icon-pack="fas"
          :label="$t(`sildebar.menu.${m.label}`)"
          @click="$router.push(m.to)"></b-menu-item>
      </b-menu-list>
    </b-menu>
    <div>
      <article class="media">
        <figure class="media-left">
          <avatar username="Francisco M."></avatar>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong class="has-text-white">
                Francisco M.
              </strong> <br>
              <small>
                Support manager
              </small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <a>
            <b-icon
              pack="fas"
              icon="cog"
              size="is-medium"
              type="is-white-ter">
            </b-icon>
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar';
import { MENU } from '@/configuration/sildebar';

export default {
  components: {
    Avatar,
  },
  data: () => ({
    menu: MENU,
  }),
};
</script>

<style>

</style>
