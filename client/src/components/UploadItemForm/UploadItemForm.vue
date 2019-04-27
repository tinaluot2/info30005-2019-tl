<template>
	<div class="background nav-spacing">
		<div class="container">
			<div id="upload-form">
				<h1>Create a New Project</h1>
				<div class="inputs">
					<div class="form">
						<label>Title</label>
						<input class="input" type="text" placeholder="E.g: Denim Lunch Box" v-model="item.itemTitle" required>
					</div>
					<div class="image-upload">
						<label>Images</label>
						<p>Select images to showcase the transformation of your item.</p>
						<input type="file" name="image01" accept="image/*">
						<input type="file" name="image02" accept="image/*">
						<input type="file" name="image03" accept="image/*">
						<input type="file" name="image04" accept="image/*">
						<input type="file" name="image05" accept="image/*">
					</div>

					<div class="form">
						<label>Description</label>
						<div class="control">
							<textarea class="textarea" placeholder="Describe your creation"></textarea>
						</div>
					</div>

					<label>Materials Used</label>
						<div class="checkboxes">
							<div v-for="option in categoryOptions" v-bind:key="option.value">
								<input class="checkbox" type="checkbox"
								name="material"
								:checked="option.checked"
								v-model="option.checked" v-validate="'required|minLength:1'"/>
								{{option.name}}
							</div>
						</div>
					<router-link to="/user"><button class="button-dark spacing-not-last-child" value="Submit">Post</button></router-link>
					<button class="button-light">Save Draft</button>
				</div>
			</div>
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
@import "@/components/UploadItemForm/UploadItemForm.scss";
</style>

