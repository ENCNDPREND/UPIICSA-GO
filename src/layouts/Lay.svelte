<script>
import { isLogged, Usuario } from '../UsuarioStore';


</script>
{#if $isLogged}
    <div
        class="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#7C001E] border-t border-[#7C001E]"
    >
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium justify-center">
            <a href="/" class="inline-flex flex-col items-center justify-center px-5 hover:bg-[#004C26] group"
            >
                <svg class="w-5 h-5 mb-2 text-[#ECECEC] group-hover:text-[#FFBB4C]" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"
                >
                    <path
                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                    ></path>
                </svg>
                <span
                    class="text-sm text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    >Inicio</span
                >
            </a>
            <a
                href="/qr"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-[#004C26] group"
            >
                <svg
                    class="w-5 h-5 mb-2 text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"
                    ></path>
                    <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"></path>
                </svg>
                <span
                    class="text-sm text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    >QR</span
                >
            </a>

            <a
                href="/mapa"
                type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-[#004C26] group"
            >
                <svg
                    class="w-5 h-5 mb-2 text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    ></path>
                </svg>

                <span
                    class="text-sm text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    >Mapa</span
                >
            </a>

            <a
                href="/horario"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-[#004C26] group"
            >
                <svg
                    class="w-5 h-5 mb-2 text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    ></path>
                </svg>

                <span
                    class="text-sm text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    >Horario</span
                >
            </a>

            <a
                href="/perfil"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-[#004C26] group"
            >
                <svg
                    class="w-5 h-5 mb-2 text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                    ></path>
                </svg>
                <span
                    class="text-sm text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    >Perfil</span
                >
            </a>
        </div>
        
    </div>
    {:else}
    <div
        class="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#7C001E] border-t border-[#7C001E]"
    >
        <div class="grid h-full max-w-lg grid-cols-2 mx-auto font-medium justify-center">
            <a href="/" class="inline-flex flex-col items-center justify-center px-5 hover:bg-[#004C26] group"
            >
                <svg class="w-5 h-5 mb-2 text-[#ECECEC] group-hover:text-[#FFBB4C]" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"
                >
                    <path
                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                    ></path>
                </svg>
                <span
                    class="text-sm text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    >Inicio</span
                >
            </a>
            

            <a
                href="/perfil"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-[#004C26] group"
            >
                <svg
                    class="w-5 h-5 mb-2 text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                    ></path>
                </svg>
                <span
                    class="text-sm text-[#ECECEC] group-hover:text-[#FFBB4C]"
                    >Iniciar Sesión</span
                >
            </a>
        </div>
        
    </div>
    {/if}