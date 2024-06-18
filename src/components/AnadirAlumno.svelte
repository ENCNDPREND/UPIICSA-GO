<script>
  import { onMount } from 'svelte';
  import { Usuario } from '../UsuarioStore';

  let carreras = [];
  let planes = [];
  let carrera = '';
  let planEstud = '';
  let correo = $Usuario?.email;

  // Obtener carreras de la base de datos al montar el componente
  onMount(async () => {
    const response = await fetch('https://upiicsa-go-back.onrender.com/carreras');
    carreras = await response.json();
  });

  // Actualizar planes de estudios al seleccionar una carrera
  async function seleccionarCarrera(event) {
    carrera = event.target.value;
    const response = await fetch(`https://upiicsa-go-back.onrender.com/planes-estudios/${carrera}`);
    planes = await response.json();
    planEstud = ''; // Reiniciar plan de estudios seleccionado
  }

  // Registrar alumno
  async function registrarAlumno(event) {
    event.preventDefault();
    const alumno = { correo, carrera, plan_estud: planEstud };

    const response = await fetch('https://upiicsa-go-back.onrender.com/registrar-alumno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alumno)
    });

    if (response.ok) {
      alert('Alumno registrado con éxito');
    } else {
      alert('Error al registrar al alumno');
    }
  }
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
<div class="flex flex-col justify-center items-center h-auto mx-4">
<form on:submit={registrarAlumno} class="space-y-4 p-4  shadow-md rounded-lg  ">
  <div>
    <label for="carrera" class="block text-sm font-medium text-white">Carrera:</label>
    <select id="carrera" bind:value={carrera} on:change={seleccionarCarrera} required class="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option value="" disabled selected>Selecciona una carrera</option>
      {#each carreras as carrera}
        <option value={carrera}>{carrera}</option>
      {/each}
    </select>
  </div>
  
  <div>
    <label for="planEstud" class="block text-sm font-medium text-white">Plan de estudios:</label>
    <select id="planEstud" bind:value={planEstud} required class="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option value="" disabled selected>Selecciona un plan de estudios</option>
      {#each planes as plan}
        <option value={plan}>{plan}</option>
      {/each}
    </select>
  </div>

  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00994C] hover:bg-[#205f3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrar alumno</button>
</form>

</div>