<template>
	<div class="background nav-spacing">
		<div class="container">
			<form class="upload-form">
				<h1>Edit Your Project</h1>

					<div class="form-section">
						<div class="form-label">Title</div>
						<input class="title-input" type="text" name="title" v-bind:value="item.itemTitle" maxlength = "50" required>
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
					</div>

					<div class="form-section">
						<div class="form-label">Description</div>
						<div class="control">
							<textarea class="description" name="description" v-bind:value="item.itemDescription">					{item.itemDescription}
							</textarea>
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
					</div>
					<div class="button-menu">
						<router-link to="/user"><button class="button-dark spacing-not-last-child" value="Submit">Update</button></router-link>
						<button class="button-light spacing-not-last-child">Hide Project</button>
						<button class="button-red" @click="showModal" type="button">Delete</button>
					</div>
			</form>
			<modal-dialog v-show="isModalVisible" @close="closeModal" />
		</div>
	</div>
</template>

<script>
import ModalDialog from '@/components/ModalDialog/ModalDialog'

export default {
	name: 'CreateItem',
	components: {
		'modal-dialog': ModalDialog
		},
	data() {
		return {
			isModalVisible: false,
			item:
			{
				itemTitle: "Denim Lunch Box",
				itemImageURL01: "",
				itemImageURL02: "",
				itemImageURL03: "",
				itemImageURL04: "",
				itemImageURL05: "",
                itemCategory: [],
                itemDescription: "I made this from old jeans. My daughter brings this to school everyday."
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
				checked: true
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
		showModal() {
			this.isModalVisible = true;
			console.log("Hello")
		},
		closeModal() {
			this.isModalVisible = false;
		}
	}
}
</script>

<style scoped lang="scss">
@import "./EditItem.scss";
</style>

