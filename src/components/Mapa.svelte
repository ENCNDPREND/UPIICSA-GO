<script>
  import { onMount } from 'svelte';
  let svgElement;
  let panZoomInstance;

  onMount(() => {
    panZoomInstance = svgPanZoom(svgElement, {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
    });
  });

  function resetZoom() {
    if (panZoomInstance) {
      panZoomInstance.resetZoom();
      panZoomInstance.center();
    }
  }
</script>

<div class="flex flex-col items-center">
  <div class="my-4">
    <button on:click={resetZoom} class="bg-blue-500 text-white px-4 py-2 rounded">
      Restablecer Zoom
    </button>
  </div>
  <div class="w-full h-full">
    <svg bind:this={svgElement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class="w-full h-auto">
      <img src="./Mapa.svg" alt="">
  </div>
</div>

<style>
  svg {
    border: 1px solid #ccc;
  }
</style>