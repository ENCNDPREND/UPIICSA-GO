<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import ExpandIcon from './ExpandIcon.svelte';
  import MinusIcon from './MinusIcon.svelte';
  import PlusIcon from './PlusIcon.svelte';

  const zoom = writable(1);
  const panX = writable(0);
  const panY = writable(0);

  const handleZoomIn = () => {
    zoom.update(z => z * 1.25);
  };

  const handleZoomOut = () => {
    zoom.update(z => z * 0.75);
  };

  const handleResetZoom = () => {
    zoom.set(1);
    panX.set(0);
    panY.set(0);
  };

  let isPanning = false;
  let startX, startY;

  const handlePanStart = (e) => {
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
  };

  const handlePanMove = (e) => {
    if (!isPanning) return;
    panX.update(px => px + (e.clientX - startX) / $zoom);
    panY.update(py => py + (e.clientY - startY) / $zoom);
    startX = e.clientX;
    startY = e.clientY;
  };

  const handlePanEnd = () => {
    isPanning = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    zoom.update(z => z * (e.deltaY > 0 ? 0.9 : 1.1));
  };

  let container;

  onMount(() => {
    container.addEventListener('mousedown', handlePanStart);
    container.addEventListener('mousemove', handlePanMove);
    container.addEventListener('mouseup', handlePanEnd);
    container.addEventListener('mouseleave', handlePanEnd);
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('mousedown', handlePanStart);
      container.removeEventListener('mousemove', handlePanMove);
      container.removeEventListener('mouseup', handlePanEnd);
      container.removeEventListener('mouseleave', handlePanEnd);
      container.removeEventListener('wheel', handleWheel);
    };
  });
</script>

<nav class=" border-gray-200 bg-[#7C001E]">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.svg" class="h-8" alt="Logo" />
    </a>
  </div>
</nav>
<div class="relative w-full h-[500px] overflow-hidden" bind:this={container}>
  <div style="transform: translate({$panX}px, {$panY}px) scale({$zoom}); transform-origin: top left;">
    <img src="/Mapa.png" alt="Mapa" class="w-full h-auto" />
  </div>
  <div class="absolute top-4 right-4 flex gap-2">
    <button class="text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700" on:click={handleZoomIn}>
      <PlusIcon class="h-4 w-4" />
    </button>
    <button class="text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700" on:click={handleZoomOut}>
      <MinusIcon class="h-4 w-4" />
    </button>
    <button class="text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700" on:click={handleResetZoom}>
      <ExpandIcon class="h-4 w-4" />
    </button>
  </div>
</div>

<style>
  .btn {
    @apply px-2 py-1 border rounded;
  }
</style>
