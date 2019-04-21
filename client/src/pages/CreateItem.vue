<template>
	<UploadItemForm />
</template>

<script>
import UploadItemForm from '@/components/UploadItemForm/UploadItemForm.vue'

export default {
	name: 'Create Item',
		components: {
			UploadItemForm
		},
		data () {
			return{
				title: 'Upload a New Project'
			}
		}
}
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
</style>

