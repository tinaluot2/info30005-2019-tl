<template>
    <transition name="modal-fade">
            <div class="modal-backdrop" @click="$emit('close')">
                <div class="container nav-spacing">
                    <div class="modal-container" @click.stop>
                        <div class="modal-title">
                            Delete your Project?
                        </div>

                        <div class="modal-body">
                            Are you sure you would like to delete your project? Your action cannot be undone.
                        </div>

                        <div class="modal-footer">
                            <button class="button-light spacing-not-last-child" @click="$emit('close')">No, I want to keep it.</button>
                            <router-link to="/user"><button class="button-dark">Yes, delete forever.</button></router-link>
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
        }
    }
}
</script>

<style scoped lang="scss">
@import "./_modal.scss";
</style>

