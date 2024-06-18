<script>
  import { onMount } from 'svelte';
  import { Usuario } from '../UsuarioStore';

  let materias = [];
  let tieneCarrera = false;

  const desiredColumns = ['SECUENCIA', 'NOMBRE_MATERIA', 'NOMBRE_PROFESOR', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'];

  const eliminarMateria = async (idMateria) => {
    try {
      const response = await fetch('https://upiicsa-go-back.onrender.com/eliminar-materia-alumno', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: $Usuario.email, idMateria })
      });

      if (response.ok) {
        // Remove the deleted materia from the local list
        materias = materias.filter(materia => materia._id !== idMateria);
      } else {
        console.error('Error al eliminar materia', await response.text());
      }
    } catch (error) {
      console.error('Error al eliminar materia', error);
    }
  };

  onMount(async () => {
    try {
      const response = await fetch(`https://upiicsa-go-back.onrender.com/alumno-materias?email=${$Usuario?.email}`);
      const data = await response.json(); // Suponiendo que la respuesta es un array de materias del alumno
      materias = data;

      // Consultar si el alumno tiene carrera
      const infoResponse = await fetch(`https://upiicsa-go-back.onrender.com/alumno-info?email=${$Usuario?.email}`);
      const infoData = await infoResponse.json();
      tieneCarrera = infoData.tieneCarrera;
    } catch (error) {
      console.error('Error al obtener información del alumno', error);
    }
  });
</script>

<nav class=" border-gray-200 bg-[#7C001E]">
  <div
    class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
  >
    <a
      href="/"
      class="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img src="/logo.svg" class="h-8" alt="Logo" />
      
    </a>
  </div>
</nav>
{#if !tieneCarrera}
  <div class="flex flex-col justify-center items-center h-[25vh] mx-4 custom-scrollbar">
    <a href="/anadirAlumno" type="button" class="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-[#00994C] rounded-lg hover:bg-[#004C26] focus:ring-4 focus:outline-none focus:bg-[#80CCA6] ">
      <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
      </svg>
      Añadir información del alumno
    </a>
  </div>
{:else}
  <div class="flex flex-col justify-center items-center h-[25vh] mx-4 custom-scrollbar">
    <a href="/anadirMateria" type="button" class="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-[#00994C] rounded-lg hover:bg-[#004C26] focus:ring-4 focus:outline-none focus:bg-[#80CCA6] ">
      <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
      </svg>
      Añadir materia
    </a>
  </div>

  <div class="flex justify-center items-start h-[65vh] mx-4 custom-scrollbar">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg [max-width:920px] mx-auto my-4 custom-scrollbar">
      <table class="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead class="text-xs text-gray-400 uppercase bg-gray-700 ">
          <tr>
            {#each desiredColumns as column}
              <th scope="col" class="px-6 py-3">{column}</th>
            {/each}
            <th scope="col" class="px-6 py-3">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {#each materias as materia}
            <tr class="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
              {#each desiredColumns as column}
                <td>{materia[column] ?? ""}</td>
              {/each}
              <td>
                <button on:click={() => eliminarMateria(materia._id)} class="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
{/if}

<style>
  /* Add any additional styles if needed */
</style>
