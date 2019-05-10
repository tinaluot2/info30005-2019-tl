<template>
<div>
	<div class="add-image">
		<div class="image-upload" v-for="(image, index) in images" v-bind:key="image.imageID">
			<input type="file" name="image01" accept="image/*" @change="onFileChange">
		<span class="close-button" @click="deleteImage(index)">X</span>
		</div>
	</div>
	<button class="button-dark" type="button" @click="addNewImage" v-if="this.images.length < 10">Add Image</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'ImageUpload',
	data() {
		return {
			images: [
				{
					'imageFile': null
				}
			]
		}
	},
	methods:{
		addNewImage(){
			this.images.push({
				'imageFile': null
			})
		},
		deleteImage(index){
			this.images.splice(index, 1)
		},
		onFileChange(event){
			this.images.imageFile = event.target.files[0]
		},
		onUpload(){
			axios.post()
		}
	}
}
</script>

<style lang="scss">
@import "./ImageUploader.scss";

</style>

