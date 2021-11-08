<template>
    <div class="results-diagram">
        <img src="../images/diagram.svg" alt="diagram"/>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.results-diagram {
    height: 64%;
    width: 100%;
    margin-left: -8%;

    img {
        width: 100%;
        height: 100%;
    }

    @media all and (max-width: 699px) {
        height: 88%;
    }
}
</style>
