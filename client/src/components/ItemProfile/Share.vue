<template>
    <div class="sharebuttons">

        <a class="icon-button-wrapper"
            :href="fbUrl"
            target="_blank"
            title="Share on Facebook" @click="createSnsUrl">
            <i class="fab fa-facebook-square"></i>
        </a>

        <a class="icon-button-wrapper"
            :href="twUrl"
            target="_blank"
            title="Share on Twitter" @click="createSnsUrl">
            <i class="fab fa-twitter-square"></i>
        </a>


    </div>
</template>

<script>
    export default{
        name: 'Share',
    data : function(){
        return {
            fbUrl : '',
            twUrl:'',
        }
    },
    methods : {
        createSnsUrl : function(){
            var url = encodeURIComponent(location.href);

            //fb
            this.fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;

            //twitter
            var txt = 'Reform lab';
            //var txt = encodeURIComponent(document.querySelector("meta[name='description']").getAttribute('content'));;
            var hashtags ='reformlab, upcycle';
            this.twUrl = 'https://twitter.com/intent/tweet?txt=' + txt + '&hashtags=' + hashtags + '&url=' + url;
        }
    }
 }
</script>

<style scoped lang="scss">
    @import "../../scss/global.scss";

    .fab{
        font-size:25px;
    }
    .sharebuttons{
    float:left;
    }

</style>

