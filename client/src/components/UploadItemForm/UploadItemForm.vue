<template>
	<div class="upload-page-body">
		<div class="container">
			<div class="upload-form">
				<h1>Create a New Project</h1>
				<div class="image-upload">
					<input type="file" name="image01" accept="image/*">
					<input type="file" name="image02" accept="image/*">
					<input type="file" name="image03" accept="image/*">
					<input type="file" name="image04" accept="image/*">
					<input type="file" name="image05" accept="image/*">
				</div>
				<div class="inputs">
					<div class="form">
						<form-label>Title</form-label>
						<input class="input" type="text" placeholder="E.g: Denim Lunch Box">
					</div>

					<div class="form">
						<form-label>Description</form-label>
						<div class="control">
							<textarea class="textarea" placeholder="Describe your creation"></textarea>
						</div>
					</div>

					<form-label>Materials Used</form-label>
						<div class="checkboxes">
							<label class="checkbox">
								<input type="checkbox" name="paper">
								Paper
							</label>

							<label class="checkbox" name="glass">
								<input type="checkbox">
								Glass
							</label>

							<label class="checkbox" name="textiles">
								<input type="checkbox">
								Textiles
							</label>

							<label class="checkbox" name="plastic">
								<input type="checkbox">
								Plastic
							</label>

							<label class="checkbox" name="metal">
								<input type="checkbox">
								Aluminium
							</label>
						</div>
					</div>
				<button class="button-dark spacing-not-last-child">Post</button>
				<button class="button-light">Save Draft</button>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'Create Item'
	}
</script>

<style scoped lang="scss">
@import "@/components/UploadItemForm/UploadItemForm.scss";
</style>

