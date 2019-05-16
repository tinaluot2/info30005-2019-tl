<template>
    <div>
        <a :href="fbURL" target="_blank"><img src="https://cdn0.iconfinder.com/data/icons/celebration-and-party-2-1/97/68-512.png"></a>

        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.3"></script>
        <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>

    </div>
</template>

<script>
    export default {
        name: 'share',
        data: function () {
            return {
                fbURL: '',
            }
        },
        methods: {
            createSNSURL: function () {
                // encode current URL
                var url = encodeURIComponent(location.href);

                // URL for Facebook
                this.fbURL = 'https://www.facebook.com/sharer/sharer.php?u=' + url;

            },
            mounted() {
                this.createSNSURL();
            }
        },
    }

</script>

<style>

</style>

