<template>
	<div class="background nav-spacing">
		<div class="container">
			<form class="upload-form">
				<h1>Create a New Project</h1>

					<div class="form-section">
						<div class="form-label">Title</div>
						<input class="title-input" type="text" name="title" placeholder="E.g. Denim Lunch Box" maxlength = "60" v-model="item.itemTitle" required>
						<div class="help-text">Enter a title for your creation.</div>
					</div>
					<div class="form-section">
						<div class="form-label">Images</div>
						<div class="help-text">Select up to 10 images that showcase your creation.</div>
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
	components: {
		'image-uploader': ImageUploader
	},
	name: 'CreateItem',
	data() {
		return {
			item:
			{
				itemTitle: "",
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
		closeModal(form) {
			this.showSignUp = false;
		}
	}
}
</script>

<style scoped lang="scss">
@import "@/scss/_forms.scss";
</style>

