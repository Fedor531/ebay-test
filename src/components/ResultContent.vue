<template>
    <div class='results-content content-container'>
        <h2 class='results-content__title'>{{ title }}</h2>
        <p class='results-content__subtitle'>{{ subtitle }}</p>
        <button class='results-content__reset button-default' @click='toMainPage'>
            Пройти еще раз
        </button>
        <button class='results-content__active question-btn'>
            {{ activeButton }}
        </button>
        <div class='results-content__to-share'>
            <span class='results-content__to-share-title'>Поделиться:</span>
            <a
                v-for='item in socials'
                :key='item.id'
                class='results-content__to-share-link'
                :href='item.link'
            >
                <img :src='getImgUrl(item.img)' :alt='item.alt'/>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        activeButton: String,
        socials: Array
    },
    data() {
        return {};
    },
    methods: {
        getImgUrl(pic) {
            return require(`../images/icons/${ pic }`);
        },
        toMainPage() {
            this.$emit('toMainPage');
        }
    }
};
</script>

<style lang='scss'>
.results-content {
    &__title {
        font-weight: 900;
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 10px;
    }

    &__subtitle {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 20px;
    }

    &__reset {
        width: 180px;
        margin-bottom: 10px;
        margin-right: auto;
    }

    &__active {
        width: 180px;
        margin-right: auto;
    }

    .button-default {
        font-weight: 400;
        color: #111259;
    }

    .question-btn {
        color: #111259;
    }

    &__to-share {
        margin-top: 70px;
        display: flex;
        align-items: center;

        &-title {
            margin-right: 10px;
        }

        &-link {
            width: 30px;
            height: 30px;

            &:not(:last-child) {
                margin-right: 10px;
            }
        }
    }

    @media all and (max-width: 699px) {
        &__title {
            margin-bottom: 5px;
            font-size: 24px;
            line-height: 30px;
        }
        &__subtitle {
            font-size: 14px;
            line-height: 20px;
        }
        &__to-share {
            margin-top: 40px;
        }
    }
}
</style>
