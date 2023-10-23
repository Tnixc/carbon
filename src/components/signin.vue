<script setup lang="ts">
import { ref } from 'vue'
import { useSignIn } from 'vue-clerk'

const { isLoaded, signIn, setActive } = useSignIn()

const email = ref('')
const password = ref('')

async function submit() {
  await signIn
    .value
    .create({
      identifier: email.value,
      password: password.value,
    })
    .then((result) => {
      if (result.status === 'complete') {
        console.log(result)
        setActive({ session: result.createdSessionId })
      }
      else {
        console.log(result)
      }
    })
    .catch(err => console.error('error', err.errors[0].longMessage))
}
</script>

<template>
  <form v-if="isLoaded" @submit.prevent="submit">
    <div>
      <label for="email">Email</label>
      <input v-model="email" type="email">
    </div>
    <div>
      <label for="password">Password</label>
      <input v-model="password" type="password">
    </div>
    <div>
      <button>Sign in</button>
    </div>
  </form>
</template>