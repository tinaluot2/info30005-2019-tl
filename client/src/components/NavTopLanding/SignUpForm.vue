<template>
   <transition name="modal-fade">
        <div class="modal-backdrop" @click="$emit('close')">
            <div class="container nav-spacing">
                <div class="outer">
                    <div class="middle">
                        <div id="login-container" @click.stop>
                            <div class="close-dialog" @click="$emit('close')">X</div>
                            <div class="form-header">
                                Join us today!
                            </div>

                            <div class="form-label">First Name <span class="req">*</span></div>
                            <input class="form" type="form" name="name" required v-model="userDetails.name.firstName" />

                            <div class="form-label">Email Address <span class="req">*</span></div>
                            <input class="form" type="form" name="name" required v-model="userDetails.email" />

                            <div class="form-label">Password <span class="req">*</span></div>
                            <input class="form" type="password" name="name" required v-model="userDetails.password" />

                            <div class="form-label">Confirm Password <span class="req">*</span></div>
                            <input class="form" type="password" name="name" required v-model="userDetails.confirmPassword" />

                            <button class="button-dark user-submit">Sign Up</button>
                            <p class="help-text">Already have an account? Login here.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
	name: 'SignUpForm',
	data: function(){
			return {
				showNav: false,
                currentUser: 1003,
                showError: false,
                userDetails: {
                    name: {firstName: '', lastName: ''},
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
			}
        },
    methods: {
        close(event){
            this.$emit('close');
        }
    },
    computed: {
        matchPasswords(){
           console.log(this.userDetails.password.value === this.userDetails.confirmPassword.value)
        }
    }
}
</script>

<style scoped lang="scss">
@import "./_userform.scss";
@import "@/components/ModalDialog/_modal.scss";
@import "@/scss/_forms.scss";
</style>

