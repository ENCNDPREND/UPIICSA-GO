<script>
    import { onMount } from 'svelte';
    import { Html5Qrcode } from 'html5-qrcode';
  import Ligeros from './-Ligeros.svelte';
  import Basicas from './-Basicas.svelte';
  import Sociales from './-Sociales.svelte';
  import Gobierno from './-Gobierno.svelte';
  import Culturales from './-Culturales.svelte';
  import Ingenieria from './-Ingenieria.svelte';
  import Gimnasio from './-Gimnasio.svelte';
  import Pesados from './-Pesados.svelte';
  
    let qrCodeMessage = '';
  
    onMount(() => {
      const html5QrCode = new Html5Qrcode("qr-reader");
  
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // Manejar el resultado decodificado aquí
        qrCodeMessage = decodedText;
      };
  
      const config = { fps: 10, qrbox: 250 };
  
      // Iniciar la cámara y escanear el código QR
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
        .catch(err => {
          console.error("Error al iniciar la cámara", err);
        });
  
      // Limpiar el recurso de la cámara cuando el componente se desmonta
      return () => {
        html5QrCode.stop().then(() => {
          console.log("Cámara detenida.");
        }).catch(err => {
          console.error("Error al detener la cámara", err);
        });
      };
    });
  </script>
  
  <style>
    #qr-reader {
      width: 100%;
      max-width: 400px;
      margin: auto;
    }
  </style>


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
   <div id="qr-reader"></div> 
   {#if qrCodeMessage === "https://upiicsago.netlify.app/ligeros/"}<!--Listo-->
   <Ligeros />
   {/if}
   {#if qrCodeMessage === "https://upiicsago.netlify.app/basicas/"}<!--Listo-->
   <Basicas />
   {/if}
   {#if qrCodeMessage === "https://upiicsago.netlify.app/sociales/"}<!--Listo-->
   <Sociales />
   {/if}
   {#if qrCodeMessage === "https://upiicsago.netlify.app/gobierno/"}<!--Listo-->
   <Gobierno />
   {/if}
   {#if qrCodeMessage === "https://upiicsago.netlify.app/culturales/"} <!--Listo-->
   <Culturales />
   {/if}
   {#if qrCodeMessage === "https://upiicsago.netlify.app/ingenieria/"}<!--Listo-->
   <Ingenieria />
   {/if}
   {#if qrCodeMessage === "https://upiicsago.netlify.app/gimnasio/"}<!--Listo-->
   <Gimnasio />
   {/if}
   {#if qrCodeMessage === "https://upiicsago.netlify.app/pesados/"}<!--Listo-->
   <Pesados />
   {/if}