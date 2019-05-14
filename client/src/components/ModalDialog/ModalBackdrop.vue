<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
		</div>
	</transition>
</template>

<script>
import SignUpForm from '@/components/SiteNavUser/SignUpForm'

export default {
  name: 'ModalBackdrop',
  components: {
		'sign-up-form' : SignUpForm
	}
}
</script>

<style lang="scss">
@import "@/components/ModalDialog/_modal.scss";
</style>

