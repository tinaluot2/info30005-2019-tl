<template>
    <div class="background">
        <div class="content-wrapper">
            <div class="errorimage">
                <img src="../../public/assets/error.png" />
            </div>
            <h1>This page does not exist.</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Error'
    }
</script>

<style scoped lang="scss">
    @import "../scss/global.scss";

    .errorimage {
        width: 50%;
        height: auto;
        display:block;
        margin-left:auto;
        margin-right:auto;
        padding-top:200px;
    }
    h1{
        font-weight:bold;
        font-family: $body-family;
        font-size:$body-size;
        padding:60px;
        text-align:center;
    }

</style>

