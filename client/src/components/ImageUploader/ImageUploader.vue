<template>
<div>
	<div class="add-image">
		<div class="image-upload" v-for="(image, index) in images" v-bind:key="image.imageID">
			<input type="file" name="image01" accept="image/*">
		<span class="close-button" @click="deleteImage(index)">X</span>
		</div>
	</div>
	<button class="button-dark" type="button" @click="addNewImage" v-if="this.images.length < 10">Add Image</button>
</div>
</template>

<script>
export default {
	name: 'ImageUpload',
	data() {
		return {
			images: [
				{
					'id': 0,
					'imageURL': '',
					'caption': ''
				}
			]
		}
	},
	methods:{
		addNewImage() {
			this.images.push({
				'id': '',
				'imageURL': '',
				'caption': ''
			})
		},
		deleteImage(index) {
			this.images.splice(index, 1)
		}

	}
}
</script>

<style scoped lang="scss">
@import "./ImageUploader.scss";

</style>

