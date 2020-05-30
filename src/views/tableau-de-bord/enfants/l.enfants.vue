<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <div>
          <h4 class="is-size-4"> Mes enfants </h4>
          <p class="is-size-6 has-text-default">Liste de vos enfants</p>
        </div>
      </div>
      <div class="level-right">
        <a
          class="button is-rounded is-primary"
          @click="$router.push({ name: 'tdb-ajouter-enfant'})">
          <b-icon icon="plus" class="mr-5"></b-icon>
          Ajouter un enfant
        </a>
      </div>
    </div>
    <div class="ml-40">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="buttons">
            <a class="button is-medium" @click="view = 0">
              <b-icon
                icon="th-large"
                size="is-medium"
                pack="fas"
                :type="view === 0 ? 'is-primary' : 'is-grey'">
              </b-icon>
            </a>
            <a class="button is-medium" @click="view = 1">
              <b-icon
                icon="bars"
                size="is-medium"
                pack="fas"
                :type="view === 1 ? 'is-primary' : 'is-grey'">
              </b-icon>
            </a>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <b-select
              placeholder="Âge"
              rounded
              class="select-liste-enfant"
              v-model="ageSelect">
              <option
                v-for="(age, i) in ages"
                :key="i"
                :value="age">
                {{age}}
              </option>
            </b-select>
          </div>
          <div class="level-item">
            <b-select
              placeholder="Sexe"
              rounded
              class="select-liste-enfant"
              v-model="sexSelect">
              <option
                v-for="(sexe, i) in config.SEXE"
                :key="i"
                :value="sexe.value">
                {{sexe.libelle}}
              </option>
            </b-select>
          </div>
        </div>
      </div>
      <div>
        <div v-if="view === 0">
          <ViewGrid :liste="liste"/>
        </div>
        <div v-if="view === 1">
          <ViewList :liste="liste"/>
        </div>
      </div>
      <div class="level my-20">
        <div class="level-left"></div>
        <div class="level-right">
          <b-pagination
            :total="data.length"
            :current.sync="currentPage"
            :range-before="3"
            :range-after="1"
            order="is-centered"
            :per-page="perPage">
            <b-pagination-button
              slot="previous"
              slot-scope="props"
              :page="props.page">
              Précèdent
            </b-pagination-button>
            <b-pagination-button
              slot="next"
              slot-scope="props"
              :page="props.page">
              Suivant
            </b-pagination-button>
          </b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from '@/configuration/enfants';
import ViewGrid from '@/components/tableau-de-bord/l.enfants/ViewGrid.vue';
import ViewList from '@/components/tableau-de-bord/l.enfants/ViewList.vue';

export default {
  components: {
    ViewGrid,
    ViewList,
  },
  data: () => ({
    config,
    view: 0,
    ageSelect: null,
    sexSelect: null,
    data: config.LISTE_DEFAUT,
    currentPage: 1,
  }),
  computed: {
    ages() {
      const ages = [];
      this.data.map((el) => el.age).forEach((el) => {
        if (!ages.includes(el)) ages.push(el);
      });
      return ages;
    },
    liste() {
      let tab = this.data;
      if (this.ageSelect) tab = tab.filter((el) => el.age === this.ageSelect);
      if (this.sexSelect) tab = tab.filter((el) => el.sexe === this.sexSelect);
      // tab.sort((a, b) => a);
      return this.paginate(tab, this.perPage, this.currentPage);
    },
    perPage() {
      if (this.view) return 10;
      return 9;
    },
  },
  methods: {
    paginate(array, size, page) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice((page - 1) * size, page * size);
    },
  },
};
</script>

<style>

</style>
