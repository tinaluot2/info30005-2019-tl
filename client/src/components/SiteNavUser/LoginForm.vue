<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="container nav-spacing">
				<div id="login-container" @click.stop>
					<div class="close-dialog" @click="$emit('close') + resetValues()">X</div>
					<div class="form-header">
							Welcome back!
					</div>

					<form action="#" @submit.prevent="login()">

						<div class="form-input">
							<div class="form-label">Email Address</div>
							<input class="form" type="email" name="email" v-model.lazy="userDetails.email"/>
						</div>

						<div class="form-input">
							<div class="form-label">Password</div>
							<input class="form" type="password" name="password" v-model="userDetails.password"/>
						</div>

						<button class="button-dark user-submit" :disabled="userDetails.email == ''||userDetails.password == ''">Log In</button>

					</form>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
  name: 'LoginForm',
  data: function(){
		return {
			userDetails: {
				email: '',
				password: ''
			},
			authenticated: false,
			users: [
				{
					email: 'gleung@student.unimelb.edu.au',
					password: 'hello123'
				},
				{
					email: 'gigiscleung@gmail.com',
					password: 'hello789'
				}
			]
		}
  },
	methods: {
		close(event){
				this.$emit('close');
		},
		resetValues() {
			var self = this;
			Object.keys(this.userDetails).forEach(function(key) {
					self.userDetails[key] = '';
			})
		}
	}
}
</script>

<style lang="scss">
@import "./_userform.scss";
@import "@/components/ModalDialog/_modal.scss";
@import "@/scss/_forms.scss";
</style>

