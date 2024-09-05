<script>
  import OTP from './lib/OTP.svelte';
  import Generate from './lib/Generate.svelte';
  let user_password = []; // Array para almacenar la contraseña introducida por el usuario
  let showPassword = false; // Variable para controlar si se muestra la contraseña

  function handleKeydown(event) {
    if (user_password.length < length) {
      const key = event.key;

      // Asegurarse de que la tecla presionada es un número (0-9)
      if (!isNaN(key) && key !== " ") {
        user_password = [...user_password, Number(key)];
      }
    }
  }

  function handleSubmit() {
    // Aquí puedes manejar la lógica de envío
    alert(`Contraseña enviada: ${user_password.join('')}`);
  }

  function handleMouseDown() {
    showPassword = true; // Mostrar los números reales cuando se presiona el botón del ojo
  }

  function handleMouseUp() {
    showPassword = false; // Volver a los asteriscos cuando se suelta el botón del ojo
  }

  // Escuchar eventos de teclado
  window.addEventListener('keydown', handleKeydown)
</script>

<svelte:window />

<div>
  <OTP {user_password} {showPassword} />

  <div class="button-container">
    <button 
      on:click={handleSubmit} 
      disabled={user_password.length < length}>
      Enviar
    </button>

    <!-- Botón con ícono de ojo -->
    <button 
      class="eye-button" 
      on:mousedown={handleMouseDown} 
      on:mouseup={handleMouseUp} 
      aria-label="Mostrar u ocultar contraseña"
    >
      <svg
        class="eye-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path 
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          stroke-width="2"
        />
        <path 
          d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
          stroke-width="2"
        />
      </svg>
    </button>
    <Generate />
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .button-container {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .eye-button {
    background-color: #2d2d2d; /* Fondo gris oscuro */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .eye-icon {
    width: 24px;
    height: 24px;
    color: white; /* Línea del ojo blanca */
  }

  .eye-button:hover .eye-icon {
    color: #4CAF50; /* Cambiar el color del ojo al pasar el ratón */
  }
</style>
