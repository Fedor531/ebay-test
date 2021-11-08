<template>
    <div class='app'>
        <transition name='fade'>
            <component v-bind:is='currentComponent'></component>
        </transition>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Main from './views/Main.vue';
import Questions from './views/Questions.vue';
import Results from './views/Results.vue';

export default {
    name: 'app',
    components: {
        mainPage: Main,
        questionsPage: Questions,
        resultsPage: Results
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['activePage']),
        currentComponent() {
            return this.activePage;
        }
    },
    methods: {
    }
};
</script>

<style lang='scss'>
@import './styles/default';

@keyframes nextPage {
    from {
        left: 100%;
    }
    to {
        left: 0;
    }
}

.app {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
</style>>
