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


   <div id="qr-reader"></div> 
   {#if qrCodeMessage === "Laboratorios ligeros"}
   <Ligeros />
   {/if}
   {#if qrCodeMessage === "Edificio de Formación Básica"}
   <Basicas />
   {/if}
   {#if qrCodeMessage === "Edificio de Estudios Profesionales Genéricos (Sociales)"}
   <Sociales />
   {/if}
   {#if qrCodeMessage === "Edificio de Gobierno"}
   <Gobierno />
   {/if}
   {#if qrCodeMessage === "Edificio de Actividades Culturales"}
   <Culturales />
   {/if}
   {#if qrCodeMessage === "Edificio de Desarrollo Profesional Específico (Ingeniería)"}
   <Ingenieria />
   {/if}
   {#if qrCodeMessage === "Gimnasio"}
   <Gimnasio />
   {/if}
   {#if qrCodeMessage === "Edificio de Competencias Integrales e Institucionales (Pesados)"}
   <Pesados />
   {/if}