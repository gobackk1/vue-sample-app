<template>
  <!-- 画面に表示されているボタン部分 -->
  <!-- <v-container>
    <v-layout justify-center>
      <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
    </v-layout>
  </v-container> -->

  <!-- 左に隠れているドロワー部分 -->
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img v-if="photoURL" :src="photoURL">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ userName }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <!-- itemsの配列内を展開している場所 -->
      <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
        <v-list-tile-action>
          <!-- v-iconにアイコン名を指定することでアイコンを表示することが出来る -->
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      items: [//メニューの情報は配列データになっている
        { title: '連絡先一覧', icon: 'list' , link: {name : 'addresses'}}
      ]
    }
  },
  computed:{
    ...mapGetters(['userName','photoURL'])
  }
}
</script>
