<script>
export default {
    name: "CardComp",
    props: {
        dettagliProdotto: Object
    }
}
</script>

<template>
    <!-- Series -->
    <div class="series">

        <img :src="dettagliProdotto.thumb" :alt="dettagliProdotto.series">
        <h4>{{ dettagliProdotto.series }}</h4>
    </div>
</template>
<style lang="scss" scoped></style>