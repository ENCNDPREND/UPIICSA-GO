<script>
import { isLogged, Usuario } from '../UsuarioStore';


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
{#if $isLogged}
<div class="flex flex-col justify-center items-center h-[80vh] mx-4 custom-scrollbar">
  <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">Bienvenido a UPIICSA GO</h1>
  <p class="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 ">{$Usuario?.displayName}</p>
</div>
{:else}
<div class="flex flex-col justify-center items-center h-[80vh] mx-4 custom-scrollbar">
  <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">Bienvenido a UPIICSA GO</h1>
  <p class="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 "> Iniciar sesión para acceder a tu horario.</p>
  <a href="/perfil"  class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none">Iniciar sesión</a> </div>
{/if}

