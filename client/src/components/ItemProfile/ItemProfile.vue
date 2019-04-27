<template>
<div class="medium-card">
    <div class="card-header">
        <div class="card-header-icon">
            <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-header-title">
            <div>
                <p class="title is-4">Jane Doe</p>
                <p class="subtitle is-6">@janedoe</p>
            </div>
        </div>
        <div class="time">
            <time datetime="2018-4-1">00/00/00</time>
        </div>

    </div>

    <div class="card-image">
        <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </div>

    <div class="card-content">
        <h1 class="title is-5">Title</h1>
        <a href="#">#Category</a>
        <p>Description about an item</p>
    </div>

    <div class="buttons">
        <a class="button is-success is-outlined">
             <span class="icon is-small">
                 <i class="fas fa-star"></i>
             </span>
            <span>Like</span>
        </a>

        <a class="button is-success is-outlined">
                <span class="icon is-small">
                    <i class="fas fa-book"></i>
                </span>
            <span>Bookmark</span>
        </a>

        <a class="button is-success is-outlined">
                <span class="icon is-small">
                    <i class="fas fa-share"></i>
                </span>
            <span>Share</span>
        </a>
    </div>


    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </p>
        </figure>
        <div class="media-content">
            <div class="field">
                <p class="control">
                    <textarea class="textarea" placeholder="Add a comment..."></textarea>
                </p>
            </div>

                <button class="button is-rounded is is-capitalized">Post comment</button>
        </div>
    </article>
</div>
</template>

<script>
export default {
	name: 'Item',
	data (){
		return{
			title:'Welcome to Reform'
	}
  }
}
</script>

<style scoped lang="scss">
@import "./ItemProfile.scss";
</style>

