import { writable } from 'svelte/store';

// Inicializa stores independientes para la longitud y la contraseña
export const passwordLengthStore = writable(6); // Store para la longitud de la contraseña
export const passwordStore = writable([]); // Store para la contraseña