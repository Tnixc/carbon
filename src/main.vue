<template>
  <main>
    <Nav/>
    <article>
      <signin/>
    </article>
  </main>
</template>

<script lang="ts">
import Nav from "./components/nav.vue";
import signin from "./components/signin.vue";

export default{
  name: "Main",
  components: {
    signin,
    Nav
  }
};
</script>
