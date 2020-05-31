<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <div>
          <h4 class="is-size-4"> {{$t('messagerie.titre')}} </h4>
          <!-- <p class="is-size-6 has-text-default">Détail de votre enfant</p> -->
        </div>
      </div>
      <div class="level-right">
        <!-- <a class="button is-rounded is-primary is-width-100"  @click="$router.go(-1)">
          Retour
        </a> -->
      </div>
    </div>
    <div class="ml-40">
      <div class="columns is-multiline">
        <div class="column is-narrow">
          <div class="card box-shadow-0">
            <div class="card-content pa-10 is-height-70vh">
              <b-field class="input-search">
                <b-input
                  :placeholder="$t('messagerie.placeholder.recherche')"
                  type="search"
                  icon="magnify">
                </b-input>
              </b-field>
              <div class="is-height-100p-40px invisible-scrollbar is-overflow-y-auto">
                <div
                  v-for="(conver, n) in conversations"
                  :key="n"
                  class="py-5"
                  :class="{
                    'has-background-active': n === index
                  }"
                  @click="select(n)">
                  <article class="media align-items-start">
                    <figure class="media-left">
                      <avatar
                       :username="conver.name"
                       :src="conver.avatar"
                       :class="conver.is_connect ?
                         'has-badge-rounded has-badge-success avatar has-badge-small' : ''"
                       :data-badge="conver.is_connect ? '' : false">
                      </avatar>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p class="mb-0">
                          {{conver.name}}
                        </p>
                        <p class="has-text-trunc is-width-180 is-size-7">
                          {{conver.lastMsg}}
                        </p>
                      </div>
                    </div>
                    <div class="media-right is-size-7">
                      {{conver.lastTime}}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card box-shadow-0">
            <div class="card-content py-10 is-height-70vh content-messagerie">
              <div>
                <article class="media align-items-start">
                  <figure class="media-left">
                    <avatar
                      :username="currentConver.name"
                      :src="currentConver.avatar"
                      :class="currentConver.is_connect ?
                        'has-badge-rounded has-badge-success avatar has-badge-small' : ''"
                      :data-badge="currentConver.is_connect ? '' : false">
                    </avatar>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p class="mb-0">
                        {{currentConver.name}}
                      </p>
                      <p class="has-text-trunc is-width-180 is-size-7">
                        {{getStatus(currentConver.is_connect)}}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="flex-1 pa-10 invisible-scrollbar is-overflow-y-auto" id="content-convert">

                <div
                  v-for="(msg, i) in contentCurrentConver"
                  :key="i"
                  class="py-20"
                  :class="isCurrentUser(msg.user_id) ? 'has-text-right' : 'has-text-left'">
                  <div class="is-inline-block">
                    <article class="media align-items-end">
                      <figure class="media-left" v-if="!isCurrentUser(msg.user_id)">
                        <avatar
                          :username="msg.name"
                          :size="40">
                        </avatar>
                      </figure>
                      <div
                        class="media-content content-msg"
                        :class="isCurrentUser(msg.user_id) ? 'right' : 'left'">
                        <div class="content">
                          {{msg.msg}}
                        </div>
                      </div>
                      <figure class="media-right" v-if="isCurrentUser(msg.user_id)">
                        <avatar
                          :username="msg.name"
                          :size="40">
                        </avatar>
                      </figure>
                    </article>
                  </div>
                </div>

              </div>
              <div class="columns is-vcentered">
                <div class="column">
                  <b-field class="input-message">
                    <b-input
                      v-model="newMsg"
                      :placeholder="$t('messagerie.placeholder.newMsg')"
                      @keyup.enter.native="sendMsg"></b-input>
                  </b-field>
                </div>
                <div class="column is-narrow">
                  <a class="button is-border-0" @click="sendMsg">
                    <b-icon type="is-primary" icon="send"></b-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from '@/configuration/enfants';
import Avatar from 'vue-avatar';

export default {
  components: {
    Avatar,
  },
  data: () => ({
    config,
    conversations: [
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: true,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: true,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
      {
        name: 'Lino Versace',
        lastMsg: 'J\'arrive à valider mon paiement',
        lastTime: '11:02',
        avatar: '',
        is_connect: false,
      },
    ],
    index: null,
    currentConver: {
      name: 'Lino Versace',
      lastMsg: 'J\'arrive à valider mon paiement',
      lastTime: '11:02',
      avatar: '',
      is_connect: true,
    },
    contentCurrentConver: [
      {
        name: 'H. Mouhayad',
        avatar: '',
        msg: 'Salut',
        user_id: 12,
      },
      {
        name: 'Lino Versace',
        avatar: '',
        msg: 'Salut, comment vas tu?',
        user_id: 21,
      },
      {
        name: 'H. Mouhayad',
        avatar: '',
        msg: 'Je vais bien et toi?',
        user_id: 12,
      },
      {
        name: 'Lino Versace',
        avatar: '',
        msg: 'Je me porte bien aussi',
        user_id: 21,
      },
      {
        name: 'H. Mouhayad',
        avatar: '',
        msg: 'Super.',
        user_id: 12,
      },
      {
        name: 'H. Mouhayad',
        avatar: '',
        msg: 'As-tu validé ton paiement?',
        user_id: 12,
      },
      {
        name: 'Lino Versace',
        avatar: '',
        msg: 'Oui. Oui, c\'est fait',
        user_id: 21,
      },
      {
        name: 'H. Mouhayad',
        avatar: '',
        msg: 'Ok, Super.',
        user_id: 12,
      },
    ],
    idCurrentUser: 12,
    newMsg: '',
  }),
  computed: {},
  methods: {
    select(index) {
      this.index = index;
      this.currentConver = this.conversations[index];
    },
    getStatus(isConnect) {
      if (isConnect) return this.$t('messagerie.status.onLine');
      return this.$t('messagerie.status.offLine');
    },
    scrollBottom() {
      const element = document.getElementById('content-convert');
      element.scrollTop = element.scrollHeight;
    },
    isCurrentUser(id) {
      if (id === this.idCurrentUser) return true;
      return false;
    },
    sendMsg() {
      if (this.newMsg) {
        this.contentCurrentConver.push({
          name: 'H. Mouhayad',
          avatar: '',
          msg: this.newMsg,
          user_id: 12,
        });
        this.newMsg = '';
        this.$nextTick(() => {
          this.scrollBottom();
        });
      }
    },
  },
  mounted() {
    this.scrollBottom();
  },
};
</script>

<style lang="scss">
.input-search{
  input{
    border-top: 0 !important;
    border-right: 0 !important;
    border-left: 0 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    height: 30px !important;
  }
  .has-icons-left span.icon{
    height: 30px !important;
  }
}
.input-message{
  input{
    border: 0 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
}
[data-badge].avatar::after{
  top: 10px !important;
}
.content-msg{
  min-height: 50px;
  max-width: 250px;
  padding: 10px;
}
.content-msg.left{
  background-color: #72C5F4;
  border-radius: 15px 15px 15px 3px;
  color: #FFFFFF;
}
.content-msg.right{
  background-color: #F7F7F7;
  border-radius: 15px 15px 3px 15px;
  color: #4A4A4AD9;
}
</style>
