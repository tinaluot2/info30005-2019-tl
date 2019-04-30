
<template>
    <body>
        <div class="mission">
            <h1>About Reform</h1>
            <p>What we do/Mission statement</p>
        </div>

        <div class="member">
            <h1>Our Team</h1>

            <div class="columns">
                <div class="column">
                    <h2>Back-end Designers</h2>
                    <div class="column">
                        <h3>Tina Luo</h3>
                        <h3>Mark Wang</h3>
                    </div>
                </div>
                <div class="column">
                    <h2>Front-end Designers</h2>
                    <div class="column">
                        <h3>Marin Iida</h3>
                        <h3>Gigi Leung</h3>
                    </div>
                </div>
            </div>

        </div>
    </body>

</template>

<script>
    export default {
        name: 'Mission'
    }
</script>

<style scoped lang="scss">
    @import "../../scss/global.scss";
    @import "mission.scss";
</style>

