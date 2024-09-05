<script>
  export let num;
</script>

<div>
  {num}
</div>

<style>
  div {
    border: 2px solid white;
    border-radius: 8px;
    padding: 10px;
    display: inline-block;
    color: white;
    background-color: #333;
    font-size: 1.5rem;
    text-align: center;
    width: 35px;  /* Ancho fijo */
    height: 50px; /* Alto fijo */
    line-height: 25px; /* Alineación vertical del texto, igual al alto */
    vertical-align: middle; /* Asegura la alineación vertical en línea con otros elementos */
    box-sizing: border-box; /* Incluye el padding y border en el cálculo del tamaño del div */
  }
</style>