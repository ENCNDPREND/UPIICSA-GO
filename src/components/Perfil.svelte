<script>
  import { onMount } from 'svelte';
  import { auth } from '../firebase';
  import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
  import { isLogged, Usuario } from '../UsuarioStore';
  
  // Asignar funciones login y logout
  let login;
  let logout;

  onMount(() => {
    login = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, provider);
        Usuario.set(cred.user); // Usar set para actualizar la store
        isLogged.set(true); // Usar set para actualizar la store
        console.log($Usuario);
        console.log($isLogged);
      } catch (error) {
        console.error(error);
      }
    };

    logout = async () => {
      try {
        await signOut(auth);
        console.log(isLogged);
        isLogged.set(false); // Usar set para actualizar la store
        Usuario.set({}); // Usar set para actualizar la store
        console.log($Usuario);
        console.log($isLogged);
      } catch (error) {
        console.error(error);
      }
    };

    // Escuchar cambios en el estado de autenticación
    onAuthStateChanged(auth, (authUser) => {
      Usuario.set(authUser || {}); // Usar set para actualizar la store
      isLogged.set(!!authUser); // Usar set para actualizar la store
    });
  });
</script>


<div class="flex flex-col justify-center items-center h-[80vh] mx-4 custom-scrollbar">
  {#if !$isLogged}
    <button class="btn-google" on:click={login}>
      <span class="logo-google"></span>
      <span class="text-button">Iniciar sesión con Google</span>
    </button>
  {:else}
    <div class="flex flex-col justify-center items-center h-[80vh] mx-4 custom-scrollbar ">
      <div class="w-full max-w-sm m-10  border rounded-lg shadow bg-[#7C001E] border-gray-700">
        <div class="flex justify-end px-4 pt-4"></div>
        <div class="flex flex-col items-center pb-10">
          <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={$Usuario?.photoURL ?? " "} alt="{$Usuario?.displayName} image"/>
          <h5 class="mb-1 text-xl font-medium text-white">{$Usuario?.displayName}</h5>
          <span class="text-sm text-gray-400">{$Usuario?.email}</span>
          <div class="flex mt-4 md:mt-6">
            <a href="/horario" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#00994C] rounded-lg hover:bg-[#004C26] focus:ring-4 focus:outline-none focus:ring-[#80CCA6] ">Ver horario</a>
            <botton on:click={logout} class="py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-[#FFBB4C] rounded-lg   hover:bg-gray-100 hover:text-[#FFBB4C] focus:z-10 focus:ring-4 focus:ring-[#FFBB4C]">Cerrar sesión</botton>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .btn-google {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-google:hover {
    background-color: #f2f2f2;
  }

  .logo-google {
    width: 24px;
    height: 24px;
    display: inline-block;
    background-image: url("/google.svg");
    background-size: cover;
    background-position: center;
    margin-right: 10px;
  }

  .text-button {
    font-size: 16px;
    font-weight: bold;
    color: #4285f4;
  }
</style>