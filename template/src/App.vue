<template>
<ion-app>
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </ion-app>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>

<style>
  ion-page{ 
    flex: 1;
  }
</style>
