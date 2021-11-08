<template>
    <div class="main-content content-container">
        <h1 class="main-content__title">
            {{ title }}
        </h1>
        <button class="main-content__button button-default" @click="nextPage">
            {{ button }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        button: String,
    },
    methods: {
        nextPage() {
            this.$emit('nextPage');
        },
    },
};
</script>

<style lang="scss">
.main-content {
    max-width: 400px;

    &__title {
        font-weight: 900;
        font-size: 32px;
        line-height: 40px;
        color: #fff;
        margin-bottom: 20px;
    }

    &__button {
        margin-right: auto;
    }
}

@media all and (max-width: 699px) {
    .main-content {
        &__title {
            font-size: 24px;
            line-height: 30px;
        }
    }
}
</style>
