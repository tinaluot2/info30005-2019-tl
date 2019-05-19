<template>
	<div class="background nav-spacing">
		<div class="container">
			<form class="upload-form" @submit.prevent="submit" enctype="multipart/form-data">
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
							<div class="help-text">Select up to {{maxImages}} images that showcase your creation.</div>

							<div class="image-upload">
								<input
									multiple
									id="image"
									type="file"
									accept="image/*"
									@change="onFileChange"
									ref="images"
									class="hide-default"/>

									<label v-if="newItem.images.length < maxImages" for="image" class="custom-uploader">
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
							<p v-if="newItem.images.length > maxImages" class="error-text">You may only upload a maximum of {{maxImages}} files. Please remove {{newItem.images.length-maxImages}} files. </p>
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
								<div class="checkbox" v-for="option in materialOptions" :key="option">
									<input type="checkbox" v-model=newItem.material :value="option">
									<label class="checkbox-label">{{option}}</label>
								</div>
							</div>

							<div class="form-hints" v-show='newItem.material.length === 0'>
								<div class="help-text">Select at least one material.</div>
							</div>
						</div>

						<button @click="submit" type="button" class="button-dark spacing-not-last-child" value="Submit"
							:disabled=" !titleValidate || newItem.title == '' || newItem.title.length < 3 || newItem.material.length == 0 || newItem.images.length == 0 || newItem.images.length >= maxImages">
							Publish</button>

				</form>

		</div>
	</div>

</template>

<script>
import apiService from '@/apiService'

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
			maxImages: 5,
			materialOptions:["Paper", "Cardboard", "Plastic", "Metal", "Aluminium", "Textiles", "Glass"]
		}
	},
	methods: {
		addNewImage(){
			this.newItem.images.push({})
		},
		deleteImage(index){
			this.newItem.images.splice(index, s1)
		},
		onFileChange(){
			const newImg = this.$refs.images.files
			this.newItem.images = [...this.newItem.images, ...newImg]
		},
		submit() {
			const newItem = new FormData();
			for (var i=0; i < this.newItem.images.length; i++){
				let file = this.newItem.images[i]
				newItem.append('images', file)
			}
			newItem.append('itemTitle', this.newItem.title)
			newItem.append('material', this.newItem.material)
			newItem.append('description', this.newItem.description)
			newItem.append('creatorName', this.currentUser.username)

			apiService.postItems(newItem, {headers: {'Content-Type': 'multipart/form-data'}})
			.then((response) => {
				this.$router.push(this.$route.query.redirect || '/user/' + this.currentUser.username);
			})
			.catch((error) => {
				console.log(error);
			});
		}
	},
	computed:{
		currentUser() {
      return this.$store.state.currentUser
    },
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
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../scss/_forms.scss";
@import "../SiteNavUser/_userform.scss";
@import "/UploadItemForm.scss";
</style>
