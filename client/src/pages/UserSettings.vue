<template>
	<AccountSettings />
</template>

<script>
import AccountSettings from '@/components/AccountSettings/Acc-Set.vue'

export default {
  name: 'UserSettings',
		components: {
			AccountSettings
		},
		data () {
			return{
				title: 'Change Account Settings'
			}
		}
}
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
</style>
