<template>
	<div class="background nav-spacing">
		<div v-for="item in itemsList" v-bind:key="item._id">
			<div v-if="itemid == item._id">
				<div class="container">
					<form class="white-card-bg" id="edit-form">
						<h1 class="page-header">Edit Your Project</h1>

							<div class="form-section">
								<div class="form-label">Title</div>
								<input class="title-input" type="text" name="title" :value="item.itemTitle" maxlength = "60" required>
								<div class="help-text">Click to edit the title.</div>
							</div>

							<div class="form-section">
								<div class="form-label">Images</div>
									<div v-for="(image, index) in item.images" v-bind:key="index">
											<figure class="image is-4by3 preview-images">
													<img :src="'/api' + '/items/' + image">
											</figure>
									</div>
								<div class="help-text">Users should be able to remove and add images but we haven't figured how to do it yet.</div>
							</div>

							<div class="form-section">
								<div class="form-label">Description</div>
								<div class="control">
									<textarea class="description" name="description" v-bind:value="item.description">{item.description}
									</textarea>
								</div>
							</div>

							<div class="materials-list">
								<div class="checkbox" v-for="option in materialOptions" :key="option">
									<input type="checkbox" v-model=newItem.material :value="option">
									<label class="checkbox-label">{{option}}</label>
								</div>
							</div>

							<div class="button-menu">
								<button class="button-dark spacing-not-last-child" value="Submit">Update</button>
								<button class="button-light spacing-not-last-child">Hide Project</button>
								<button class="button-red" @click="showModal" type="button">Delete</button>
							</div>
					</form>
					<modal-dialog v-show="isModalVisible" @close="closeModal" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ModalDialog from '@/components/ModalDialog/DeleteWarning'
import apiService from '@/apiService'

export default {
	name: 'EditItem',
	components: {
		'modal-dialog': ModalDialog,
		},
		data (){
		return {
			itemid: this.$route.params.itemid,
			itemsList:[],
			isModalVisible: false
			}
		},
		mounted() {
			apiService.getItemProfile().then((data) => {
				this.itemsList = data
			})
		},
		methods: {
			showModal() {
				this.isModalVisible = true;
			},
			closeModal() {
				this.isModalVisible = false;
			}
		}
}
</script>

<style scoped lang="scss">
@import "@/scss/_forms.scss";
</style>

