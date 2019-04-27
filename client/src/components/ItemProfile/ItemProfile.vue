<template>
<div class="background nav-spacing">
  <div class="container">
      <div class="medium-card">
        <div class="card-header">
            <div class="card-header-icon">
                <figure class="image is-48x48">
                    <img src="https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg" alt="Smol_Dog">
                </figure>
            </div>
            <div class="card-header-title">
                <div>
                    <p class="title is-4">Denim Pencil Holders</p>
                    <p class="subtitle is-6">@mariniida</p>
                </div>
            </div>
            <div class="time">
                <time datetime="2018-4-1">27/04/19</time>
            </div>

        </div>

        <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://i.imgur.com/iPylcyU.jpg" alt="Denim_Pencil_Holders">
            </figure>
        </div>

        <div class="card-content">
            <h1 class="title is-5">Denim Pencil Holders</h1>
            <a href="#">#Textiles</a>
            <p>This was made with secondhand jeans from Salvos, in the span of 2 days. Was a super rewarding experience
            being able to reuse and recycle items into something I liked!</p>
        </div>

        <div class="buttons">
            <a class="button is-success is-outlined is-rounded">
                <span>Like</span>
            </a>

            <a class="button is-success is-outlined is-rounded">
                <span>Bookmark</span>
            </a>

            <a class="button is-success is-outlined is-rounded">
                <span>Share</span>
            </a>
        </div>


        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img class="is-rounded" src="https://cdn0.iconfinder.com/data/icons/celebration-and-party-2-1/97/68-512.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="field">
                    <p class="control">
                        <textarea class="textarea" placeholder="Add a comment..."></textarea>
                    </p>
                </div>
                    <button class="button is-rounded is-capitalized">Post comment</button>
            </div>
        </article>
    </div>
  </div>
</div>
</template>

<script>
export default {
	name: 'ItemProfile',
	data (){
		return{

	}
  }
}
</script>

<style scoped lang="scss">
@import "./ItemProfile.scss";
</style>
