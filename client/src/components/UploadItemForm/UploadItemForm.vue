<template>
	<div class="background nav-spacing">
		<div class="container">
			<form class="upload-form">
					<h1>Create a New Project</h1>

						<div class="form-section">

							<div class="form-label">Title <span class="req">*</span></div>
							<input class="title-input" type="text" name="title" placeholder="E.g. Denim Lunch Box" maxlength = "60" v-model="item.title" required>
							<div class="help-text">Enter a title for your creation. Ensure your title is at least 3 characters long.</div>
							<div class="form-hints" v-show='item.title !== "" && titleValidate.errors.length > 0'>
								<p class="error-text" v-for='error in titleValidate.errors' v-bind:key="error">{{error}}</p>
							</div>
						</div>

						<div class="form-section">
							<div class="form-label">Images</div>
							<div class="help-text">Select 1 to 10 images that showcase your creation.</div>
							<image-uploader></image-uploader>
						</div>

						<div class="form-section">
							<div class="form-label">Description</div>
							<div class="control">
							<textarea class="description" name="description" placeholder="Describe your creation." v-model="item.description"></textarea>
							<div class="help-text">What was the original form of your creation? What is it now?</div>
							</div>
						</div>

						<div class="form-section">
							<div class="form-label">Materials Used <span class="req">*</span></div>

							<div class="materials-list">
								<div class="checkbox" v-for="option in materialOptions" :key="option.value">
									<input type="checkbox" v-model=item.material :value="option">
									<label>{{option.name}}</label>
								</div>
							</div>

							<div class="form-hints" v-show='item.material.length === 0'>
								<div class="help-text">Select at least one material.</div>
							</div>
						</div>

						<button class="button-dark spacing-not-last-child" value="Submit"
								:disabled="
								!titleValidate || item.title === '' || item.title.length < 3 || item.material.length === 0">
								Publish</button>

						<button class="button-light">Save Draft</button>
				</form>

		</div>
	</div>

</template>

<script>
import ImageUploader from '@/components/ImageUploader/ImageUploader'

export default {
	name: 'CreateItem',
	data() {
		return {
			isHintsVisible: false,
			titleRule: [
				{ msg:'A title cannot begin with a space character.', regex: /^[^\s].*/  }
			],
			item:
			{
				title: "",
				images: [],
                material: [],
                description: ""
			},
			materialOptions:[
			{
				name: "Paper",
				value: "paper",
				checked: false
			},
			{
				name: "Card",
				value: "card",
				checked: false
			},
			{
				name: "Glass",
				value: "glass",
				checked: false
			},
			{
				name: "Textiles",
				value: "textiles",
				checked: false
			},
			{
				name: "Plastic",
				value: "plastic",
				checked: false
			},
			{
				name: "Metal",
				value: "metal",
				checked: false
			},
			{
				name: "Aluminium",
				value: "Aluminium",
				checked: false
			}]
		}
	},
	methods: {

	},
	computed:{
		titleValidate(){
			let errors = []
			for (let condition of this.titleRule) {
				if (!condition.regex.test(this.item.title)) {
					errors.push(condition.msg)
				}
			}
			if (errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		}
	},
	components: {
		'image-uploader': ImageUploader
	}
}
</script>

<style scoped lang="scss">
@import "../../scss/_forms.scss";
@import "../SiteNavUser/_userform.scss";
@import "/UploadItemForm.scss";
</style>

