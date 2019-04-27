<template>
    <transition name="modal-fade">
            <div class="modal-backdrop">
                <div class="container nav-spacing">
                    <div class="modal-container">
                        <div class="modal-title">
                            Warning
                        </div>

                        <div class="modal-body">
                            Are you sure you want to delete your project? You will not be able to recover it.
                        </div>

                        <div class="modal-footer">
                            <button class="button-dark" @click="$emit('close')">No, I want to keep my project</button>
                            <router-link to="/user"><button class="button-light">Yes, delete forever.</button></router-link>
                        </div>
                    </div>
                </div>
            </div>
    </transition>
</template>

<script>
export default {
    name: 'modal-dialog',
    methods: {
        close(event) {
            this.$emit('close');
        },
    }
}
</script>

<style scoped lang="scss">
@import "./ModalDialog.scss";
</style>

