<template>
    <transition name="modal-fade">
            <div class="modal-backdrop white-backdrop" @click="$emit('close')">
                <div class="container nav-spacing">
                    <div class="modal-container">
                        <div class="modal-title">
                            Success!
                        </div>

                        <div class="modal-body">
                            Your project has been published.
                        </div>

                        <div class="modal-footer">
                            <router-link to="/user"><button class="button-dark">Go to Profile.</button></router-link>
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
@import "./_modal.scss";
</style>

