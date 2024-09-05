<script>
  import { passwordStore, passwordLengthStore } from "./stores/passwordStore";

  // Función para generar un array de números aleatorios y actualizar el store de contraseña
  function generatePassword() {
    passwordLengthStore.subscribe(length => {
      const newPassword = Array.from({ length }, () => Math.floor(Math.random() * 10));
      passwordStore.set(newPassword); // Actualiza el store de contraseña con la nueva contraseña
      alert(`Se ha generado la siguiente clave para usted: ${newPassword.join('')}`);
    });
  }
</script>

<button on:click={generatePassword}>Generar clave</button>