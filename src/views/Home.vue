<template>
  <div class="home">
    <Button type="primary">按钮</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'vant'

export default defineComponent({
  name: 'Home',
  components: {
    Button
  },
});
</script>
