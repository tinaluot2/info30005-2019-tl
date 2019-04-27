<template>
	<div class="background nav-spacing">
		<div class="container">
			<form class="upload-form">
				<h1>Create a New Project</h1>

					<div class="form-section">
						<div class="form-label">Title</div>
						<input class="title-input" type="text" name="title" placeholder="E.g. Denim Lunch Box" maxlength = "60" required>
						<div class="help-text">Enter a title for your creation.</div>
					</div>

					<div class="form-section">
						<div class="form-label">Images</div>
						<div class="image-upload">
							<input type="file" name="image01" accept="image/*">
							<input type="file" name="image02" accept="image/*">
							<input type="file" name="image03" accept="image/*">
							<input type="file" name="image04" accept="image/*">
							<input type="file" name="image05" accept="image/*">
						</div>
						<div class="help-text">Select images that showcase your creation.</div>
					</div>

					<div class="form-section">
						<div class="form-label">Description</div>
						<div class="control">
							<textarea class="description" name="description" v-bind:value="item.itemDescription" placeholder="Describe your creation.">
							</textarea>
							<div class="help-text">What was the original form of your creation? What is it now?</div>
						</div>
					</div>

					<div class="form-section">
						<div class="form-label">Materials Used</div>
						<div class="checkboxes">
							<div class="checkbox" v-for="option in categoryOptions" v-bind:key="option.value">
								<input type="checkbox"
								name="material"
								:checked="option.checked"
								v-model="option.checked"/>
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

export default {
	name: 'CreateItem',
	data() {
		return {
			item:
			{
				itemTitle: "",
				itemImageURL01: "",
				itemImageURL02: "",
				itemImageURL03: "",
				itemImageURL04: "",
				itemImageURL05: "",
                itemCategory: [],
                itemDescription: ""
			},
			categoryOptions:[
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
	methods:{
	}
}
</script>

<style scoped lang="scss">
@import "@/scss/_forms.scss";
</style>

