<template>
	<div class="background nav-spacing">
		<div class="container">
			<form class="upload-form" action="#" @submit.prevent="validateBeforeSubmit()">
					<h1>Create a New Project</h1>

						<div class="form-section">

							<div class="form-label">Title</div>
							<input class="title-input" type="text" name="title" placeholder="E.g. Denim Lunch Box" maxlength = "60" v-model="item.title" required>
							<div class="help-text">Enter a title for your creation.</div>
							<div class="form-hints" v-show='item.title !== "" && ProjectTitleValidate.errors.length > 0'>
								<p class="error-text" v-for='error in ProjectTitleValidate.errors' v-bind:key="error">{{error}}</p>
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
							<textarea class="description" name="description" v-model="item.description" placeholder="Describe your creation." />
							<div class="help-text">What was the original form of your creation? What is it now?</div>
							</div>
						</div>

						<div class="form-section">
							<div class="form-label">Materials Used</div>
							<div class="checkboxes">
								<div class="checkbox" v-for="option in materialOptions" v-bind:key="option.value">
									<input type="checkbox"
									name="material"
									:checked="option.checked"
									v-model="item.material"/>
									{{option.name}}
								</div>
							</div>
							<div class="help-text">Select at least one material.</div>
						</div>

						<router-link to="/user"><button class="button-dark spacing-not-last-child" value="Submit">Publish</button></router-link>
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
			ProjectTitleRule: [
				{ msg:'Project Title must contain at least 5 characters.', regex: /^.{5,}$/ },
				{ msg:'Only alphanumerical characters are allowed.', regex: /^[a-zA-Z0-9]*$/ },
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
			}]
		}
	},
	methods: {
		validateBeforeSubmit(){
			this.$validator
					.validateAll()
					.then(function(response) {
					})
					.catch(function(e) {
					})
		},
		showHints(){
			this.isHintsVisible = true;
		},
		hideHints(){
			this.isHintsVisible = false;
		}

	},
	computed:{
		ProjectTitleValidate(){
			let errors = []
			for (let condition of this.ProjectTitleRule) {
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
@import "@/scss/_forms.scss";
@import "../SiteNavUser/_userform.scss";
</style>

