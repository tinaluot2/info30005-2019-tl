<template>
	<div class="container">
		<div id="search-container">
			<input class="search-bar" type="search" placeholder="Browse ideas...">
			<span class="search-icon-wrapper">
					<i class="material-icons">search</i>
			</span>
		</div>

		<div id="filter-container">
			<div class="filter-button">
					All Materials
					<span class="dropdown">
						<i class="material-icons">keyboard_arrow_down</i>
					</span>
			</div>
		</div>
				<!-- <div class="dropdown-menu" id="dropdown-menu4" role="menu">
						<div class="dropdown-content">
								<div class="checkboxes">

									<input class="checkbox" type="checkbox" id="Paper" value="Paper">
									<label for="Paper">Paper</label>

									<input class="checkbox" type="checkbox" id="Glass" value="Glass">
									<label for="Glass">Glass</label>

									<input class="checkbox" type="checkbox" id="Textiles" value="Textiles">
									<label for="Textiles">Textiles</label>

									<input class="checkbox" type="checkbox" id="Plastic" value="Plastic">
									<label for="Plastic">Plastic</label>

									<input class="checkbox" type="checkbox" id="Aluminium" value="Aluminium">
									<label for="Aluminium">Aluminium</label>
								</div>

						<div class="apply">
								<button class="button-dark">Apply</button>
						</div>
					</div>
				</div> -->
  </div>
</template>

<script>
export default {
	name: 'SearchBar',
	data() {
		return {
			materialCategories: [
			{
				name: "Paper",
				value: "paper",
				checked: false
			},
			{
				name: "Glass",
				value: "glass",
				checked: false
			},
			{
				name: "Textiles",
				value: "textiles",
				checked: true
			},
			{
				name: "Plastic",
				value: "plastic",
				checked: false
			},
			{
				name: "Metal",
				value: "metal",
				checked: false
			},
			{
				name: "Aluminium",
				value: "Aluminium",
				checked: false
			}]
		}
	}
}
</script>

<style scoped lang="scss">
    @import "SearchBar.scss";
</style>

