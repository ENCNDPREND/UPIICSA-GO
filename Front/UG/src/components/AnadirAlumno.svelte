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
    const response = await fetch('http://localhost:3000/carreras');
    carreras = await response.json();
  });

  // Actualizar planes de estudios al seleccionar una carrera
  async function seleccionarCarrera(event) {
    carrera = event.target.value;
    const response = await fetch(`http://localhost:3000/planes-estudios/${carrera}`);
    planes = await response.json();
    planEstud = ''; // Reiniciar plan de estudios seleccionado
  }

  // Registrar alumno
  async function registrarAlumno(event) {
    event.preventDefault();
    const alumno = { correo, carrera, plan_estud: planEstud };

    const response = await fetch('http://localhost:3000/registrar-alumno', {
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


<form on:submit={registrarAlumno}>
  <label for="carrera">Carrera:</label>
  <select id="carrera" bind:value={carrera} on:change={seleccionarCarrera} required>
    <option value="" disabled selected>Selecciona una carrera</option>
    {#each carreras as carrera}
      <option value={carrera}>{carrera}</option>
    {/each}
  </select>

  <label for="planEstud">Plan de estudios:</label>
  <select id="planEstud" bind:value={planEstud} required>
    <option value="" disabled selected>Selecciona un plan de estudios</option>
    {#each planes as plan}
      <option value={plan}>{plan}</option>
    {/each}
  </select>

  <button type="submit">Registrar alumno</button>
</form>
