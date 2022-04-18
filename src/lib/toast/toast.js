import { writable } from 'svelte/store';

const newToast = () => {
    const { subscribe, update } = writable([]);

    function send(message, { duration = 2000, type = "INFO" } = {}) {
        const id = Math.floor(Math.random() * 9999);
        const newMessage = {
            id,
            duration,
            type,
            message
        };
        update((store) => {
            return [...store, newMessage]
        });
    }

    function remove(id) {
        update((store) => {
            let newStore = store.filter((item) => item.id !== id);
            return [...newStore];
        })
    }

    return { subscribe, send, remove };
}

export const toast = newToast();