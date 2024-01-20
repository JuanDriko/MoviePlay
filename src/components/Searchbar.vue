<template>
    <div class="flex bg-gray-500 rounded-full m-5 p-2">
        
            <input type="text"
                   class="bg-gray-500 px-5 w-full h-10 mr-3 focus:outline-none text-white"
                   v-model="querySearch"                   
                   placeholder="Buscar...">
        <router-link :to="{ name: 'SearchResults', params: { querySearch: querySearch }}" @keyup.enter="resetInput" @click.preventDefault="resetInput" class="bg-gray-500 rounded-full p-2">
            <i class="fas fa-search text-white"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            querySearch: ' '
        };
    },
    methods: {
        resetInput() {
            this.querySearch = ' ';
        },
        preventDefault(event) {
            event.preventDefault();
        },
    },
};
</script>

<style scoped>
</style>
