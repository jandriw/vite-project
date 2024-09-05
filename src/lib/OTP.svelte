<script>
  import { passwordLengthStore } from './stores/passwordStore';
  import Number from './Number.svelte';

  export let length = $passwordLengthStore
  export let user_password = [];
  export let showPassword = false; // Variable que controla si se muestran los números reales
</script>

<div>
  {#each Array(length) as _, index}
    <!-- Mostrar el número si showPassword es true, de lo contrario, mostrar * o espacio vacío -->
    <Number num={index < user_password.length ? (showPassword ? user_password[index] : '*') : ' '} />
  {/each}
</div>