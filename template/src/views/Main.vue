<template>
  <ion-page class="show-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>\{{headerTitle}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content" padding>
      <img src="./assets/ivue.png">
      <h2>Lista Pokemon</h2>
      <ion-list>
        <ion-item>
          <ion-label v-for="pokemon in listPokemon" :key="pokemon.id">
            \{{ pokemon.name }}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
    name:'Main',
    data() {
      return {
        headerTitle: "iVue = Ionic4 + VueJS App",
        listPokemon: []
      }
    },
    methods: {
      Init() {
        this.listPokemon = [
          {name:"Pokemon Yellow", id:'123'},
          {name:"Pokemon Red", id:'124'},
          {name:"Pokemon White", id:'125'},
          {name:"Pokemon Black", id:'126'}
          ]
      }
    },
    created(){
      this.Init()
    }
}
</script>
<style lang="scss" scoped>
</style>
