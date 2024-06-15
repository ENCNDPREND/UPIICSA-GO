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

  const handlePan = (e) => {
    panX.update(px => px + e.movementX / $zoom);
    panY.update(py => py + e.movementY / $zoom);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    zoom.update(z => z + e.deltaY * -0.01);
  };

  let container;

  onMount(() => {
    container.addEventListener('mousedown', handlePan);
    container.addEventListener('mouseup', handlePan);
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('mousedown', handlePan);
      container.removeEventListener('mouseup', handlePan);
      container.removeEventListener('wheel', handleWheel);
    };
  });
</script>

<div
  class="relative w-full h-[500px] overflow-hidden"
  bind:this={container}
>
  <svg
    viewBox="-100 -100 200 200"
    class="w-full h-full"
    style="transform: translate({$panX}px, {$panY}px) scale({$zoom}); transform-origin: center center;"
  >
    <g>
      <path d="M-50,-50 L50,-50 L50,50 L-50,50 Z" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1" />
      <path d="M-25,-25 L25,-25 L25,25 L-25,25 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1" />
      <path d="M-10,-10 L10,-10 L10,10 L-10,10 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1" />
    </g>
  </svg>
  <div class="absolute top-4 right-4 flex gap-2">
    <button class="text-white focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700" on:click={handleZoomIn}>
      <PlusIcon class="h-4 w-4" />
    </button>
    <button class="text-white focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700" on:click={handleZoomOut}>
      <MinusIcon class="h-4 w-4" />
    </button>
    <button class="text-white focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700" on:click={handleResetZoom}>
      <ExpandIcon class="h-4 w-4" />
    </button>
  </div>
</div>

<style>
  .btn {
    @apply px-2 py-1 border rounded;
  }
</style>
