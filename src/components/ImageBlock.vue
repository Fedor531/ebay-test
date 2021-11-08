<template>
    <div class="image-block">
        <div v-if="imgArray.length === 1"
             class="image-block-1"
             :style="{ backgroundColor: imgArray[0].backgroundColor }"
        >
            <img :src="getImgUrl(imgArray[0].img)"
                 alt="img"
                 :style="getStyle(imgArray[0].styleImg)"
            />
        </div>
        <div v-else-if="imgArray.length === 2" class="image-block-2">
            <div v-for="item in imgArray"
                 :key="item.id"
                 :style="{ backgroundColor: item.backgroundColor }"
            >
                <img :src="getImgUrl(item.img)"
                     alt="img"
                     :style="getStyle(item.styleImg)"
                />
            </div>
        </div>
        <div v-else-if="imgArray.length === 3" class="image-block-3">
            <div class="image-block-3-container"
                 v-for="item in imgArray"
                 :key="item.id"
                 :style="{ backgroundColor: item.backgroundColor }"
            >
                <img :src="getImgUrl(item.img)"
                     alt="img"
                     :style="getStyle(item.styleImg)"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgArray: Array,
    },
    data() {
        return {};
    },
    methods: {
        getImgUrl(pic) {
            return require(`../images/${ pic }`);
        },
        getStyle(style) {
            return style;
        },
    },
};
</script>

<style lang="scss">
@keyframes appearanceLeft {
    from {
        right: 100%;
    }
    to {
        right: 0;
    }
}

@keyframes appearanceTop {
    0% {
        top: -100%;
    }
    100% {
        top: 0;
    }
}

@keyframes disk {
    from {
        transform: scale(0) rotate(720deg);
    }
    to {
        transform: scale(1) rotate(0);
    }
}

.image-block {
    height: 50%;

    img {
        position: relative;
    }

    &-1 {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    &-3 {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        &-container {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            &:nth-child(1) {
                grid-column-start: 1;
                grid-column-end: 2;
                grid-row-start: 1;
                grid-row-end: 3;
            }
        }
    }
}
</style>
