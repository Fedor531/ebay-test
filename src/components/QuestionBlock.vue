<template>
    <transition name="question" mode="out-in">
        <div class="questions-content content-container" :key="currentQuestion.id">
            <h2 class="questions-content__title">
                {{ currentQuestion.title }}
            </h2>
            <div class="questions-content__btns">
                <button
                    v-for="item in currentQuestion.answer"
                    :key="item.id"
                    class="questions-content__btn question-btn"
                    @click="answerQuestion(item)"
                >
                    {{ item.title }}
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        questions: Array,
    },
    data() {
        return {
            currentQuestion: {},
            activeQuestion: 0,
        };
    },
    mounted() {
        this.currentQuestion = this.questions[0];
    },
    methods: {
        ...mapMutations(['nextPage']),

        async answerQuestion(item) {
            if (this.activeQuestion !== this.questions.length - 1) {
                this.activeQuestion += 1
                this.currentQuestion = this.questions[this.activeQuestion];
            }
            else {
                this.nextPage('resultsPage');
            }
        },
    },
};
</script>

<style lang="scss">
.questions-content {
    color: #365001;

    &._text-white {
        color: #fff;
    }

    &__title {
        font-size: 26px;
        margin-bottom: 20px;
    }

    &__btns {
        display: flex;
        flex-direction: column;
        margin-right: auto;
    }

    &__btn {
        margin-right: auto;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    @media all and (max-width: 699px) {
        &__title {
            font-size: 24px;
        }
    }
}
</style>
