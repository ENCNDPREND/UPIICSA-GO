<script>
    import { onMount } from 'svelte';
    import { Usuario } from '../UsuarioStore';
    import { writable } from 'svelte/store';
  
    let query = '';
    let resultados = writable([]);
    let mensajeExito = writable(null);
    const desiredColumns = ['SECUENCIA', 'NOMBRE_MATERIA', 'NOMBRE_PROFESOR', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'];
  
    const buscarMaterias = async () => {
      try {
        const response = await fetch(`https://upiicsago.netlify.app/buscar-materias?q=${query}&email=${$Usuario.email}`);
        const data = await response.json();
        resultados.set(data);
      } catch (error) {
        console.error('Error al buscar materias', error);
      }
    };
  
    const agregarMateria = async (idMateria) => {
      try {
        const response = await fetch('https://upiicsago.netlify.app/agregar-materia-alumno', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: $Usuario.email, idMateria })
        });
  
        if (response.ok) {
          mensajeExito.set('Materia registrada exitosamente');
          buscarMaterias(); // Update search results after successful registration
          setTimeout(() => mensajeExito.set(null), 3000); // Clear message after 3 seconds
        } else {
          console.error('Error al agregar materia', await response.text());
        }
      } catch (error) {
        console.error('Error al agregar materia', error);
      }
    };
  
    onMount(buscarMaterias); // Initial search when component mounts
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
<div class="flex flex-col justify-center items-center h-full mx-4">
  <input type="text" class="my-4 p-2 border rounded" placeholder="Buscar materias..." bind:value={query} on:input={buscarMaterias} />

  {#if $resultados.length > 0}
    <div class="relative overflow-y-auto shadow-md sm:rounded-lg w-full h-[65vh] custom-scrollbar">
      <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs  uppercase bg-gray-700 text-gray-400">
          <tr>
            {#each desiredColumns as column}
              <th scope="col" class="px-6 py-3">{column}</th>
            {/each}
            <th scope="col" class="px-6 py-3">Añadir</th>
          </tr>
        </thead>
        <tbody>
          {#each $resultados as materia}
            <tr class="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
              {#each desiredColumns as column}
                <td class="px-6 py-3">{materia[column] ?? ""}</td>
              {/each}
              <td class="px-6 py-3">
                <button on:click={() => agregarMateria(materia._id)} class="text-blue-600 hover:underline">Añadir</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
  
  {#if $mensajeExito}
    <div class="mt-4 text-green-500">{$mensajeExito}</div>
  {/if}
</div>
  
<style>
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #4A5568 #E2E8F0;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #E2E8F0;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #4A5568;
    border-radius: 4px;
  }
</style>
