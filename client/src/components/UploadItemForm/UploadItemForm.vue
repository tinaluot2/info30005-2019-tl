<template>
	<div class="background nav-spacing">
		<div class="container">
			<form class="upload-form">
					<h1>Create a New Project</h1>

						<div class="form-section">
							<div class="form-label">Title <span class="req">*</span></div>
							<input class="title-input" type="text" name="title" placeholder="E.g. Denim Lunch Box" maxlength = "60" v-model="newItem.title" required>
							<div class="help-text">Enter a title for your creation. Ensure your title is at least 3 characters long.</div>
							<div class="form-hints" v-show='newItem.title !== "" && titleValidate.errors.length > 0'>
								<p class="error-text" v-for='error in titleValidate.errors' v-bind:key="error">{{error}}</p>
							</div>
						</div>

						<div class="form-section">
							<div class="form-label">Images <span class="req">*</span></div>
							<div class="help-text">Select up to 10 images that showcase your creation.</div>

							<div class="image-upload">
								<input
									multiple
									id="image"
									type="file"
									accept="image/*"
									@change="onFileChange"
									ref="images"
									class="hide-default"/>

									<label for="image" class="custom-uploader">
										<span class="icon-wrap">
											<i class="material-icons">cloud_upload</i>
										</span>
										<span class="button-text">Browse files...</span>
									</label>

							</div>

							<div class="file-list" v-for="(image, index) in newItem.images" v-bind:key="index">
								<span class="file-title">{{image.name}}</span>
								<span class="delete-button" @click="deleteImage(index)">X</span>
							</div>
						</div>

						<div class="form-section">
							<div class="form-label">Description</div>
							<div class="control">
							<textarea class="description" name="description" placeholder="Describe your creation." v-model="newItem.description"></textarea>
							<div class="help-text">What was the original form of your creation? What is it now?</div>
							</div>
						</div>

						<div class="form-section">
							<div class="form-label">Materials Used <span class="req">*</span></div>

							<div class="materials-list">
								<div class="checkbox" v-for="option in materialOptions" :key="option.value">
									<input type="checkbox" v-model=newItem.material :value="option">
									<label class="checkbox-label">{{option.name}}</label>
								</div>
							</div>

							<div class="form-hints" v-show='newItem.material.length === 0'>
								<div class="help-text">Select at least one material.</div>
							</div>
						</div>


						<router-link to="/discover"><button @click="submit" class="button-dark spacing-not-last-child" value="Submit"
							:disabled=" !titleValidate || newItem.title == '' || newItem.title.length < 3 || newItem.material.length == 0 || newItem.images.length == 0 || checkImages">
              Publish</button></router-link>


						<button class="button-light">Save Draft</button>
				</form>

		</div>
	</div>

</template>

<script>

import ImageUploader from '@/components/ImageUploader/ImageUploader'
import axios from 'axios'
import {bus} from '@/main'

export default {
	name: 'CreateItem',
	data() {
		return {
			isHintsVisible: false,
			titleRule: [
				{ msg:'A title cannot begin with a space character.', regex: /^[^\s].*/  }
			],
			newItem:
			{
				title: "",
				images: [],
				material: [],
				description: ""
			},
			maxImages: 10,
			materialOptions:[
			{ name: "Paper", value: "paper", checked: false },
			{ name: "Card", value: "card", checked: false },
			{ name: "Glass", value: "glass", checked: false },
			{ name: "Textiles", value: "textiles", checked: false },
			{ name: "Plastic", value: "plastic", checked: false },
			{ name: "Metal", value: "metal", checked: false },
			{ name: "Aluminium", value: "Aluminium", checked: false }]
		}
	},
	methods: {

		addNewImage(){
			this.newItem.images.push({})
		},
		deleteImage(index){
			this.newItem.images.splice(index, 1)
		},
		onFileChange(){
			const newImg = this.$refs.images.files
			this.newItem.images = [...this.newItem.images, ...newImg]
			// var n = this.maxImages || -1

			// if (isEmpty(this.newItem.images[0])) {
			// 	this.newItem.images = []
			// }

			// if (n && this.newItem.images.length < n) {
			// 	this.newItem.images.push(uploadedImg)
			// }
		},
		submit() {
			const newItem = {
				title: this.newItem.title,
				images: this.newItem.images,
				material: this.newItem.material,
				description: this.newItem.description
			}
			axios.post("http://localhost:3000/items", newItem)
				.then((response) => {
          console.log(response);
          // this.$router.push(this.$route.query.redirect || '/discover');

				})
				.catch((error) => {
					console.log(error);
				});
		}


	},
	computed:{
		titleValidate(){
			let errors = []
			for (let condition of this.titleRule) {
				if (!condition.regex.test(this.newItem.title)) {
					errors.push(condition.msg)
				}
			}
			if (errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		},
		checkImages() {
			for (var i in this.newItem.images) {
				if (this.newItem.images[i] !== null && this.newItem.images[i] != "")
					return false
			}
			return true;
		}
	}
}
</script>

<style lang="scss">
@import "../../scss/_forms.scss";
@import "../SiteNavUser/_userform.scss";
@import "/UploadItemForm.scss";
</style>
