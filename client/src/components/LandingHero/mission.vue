<template>
	<div class="background">
    <div class="section" id="about">
      <div class="container">
      <h2 class="title">
        About
      </h2>
      <p class="statement">
        Reform is a social platform that aims to change the way we perceive reusing and recycling. We aspire to create a positive impact on our community and environment by encouraging users to recycle creatively while sharing their solutions and discovering innovative reuse ideas from the other individuals.
      </p>
      </div>
    </div>
     <div class="container" id="team">
      <h2 class="title">
        Our Team
      </h2>
      <div class="grid-container four-col">
        <div class="small-card" v-for="(person, index) in team" v-bind:key="index">
          <div class="thumbnail">
            <figure class="image is-3by2">
              <img :src="person.pic">
            </figure>
          </div>
          <div class="card-content">
          <div class="card-title">{{person.name}}</div>
          <div class="username-link">{{person.job1}}</div>
          <div class="username-link">{{person.job2}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="mission">
      <div class="container">
        <h2 class="title">
          Our Mission
        </h2>
        <div class="grid-container two-col">

          <p class="statement">
            There is currently an insufficient demand for recyclable materials within the local Australian market, causing excess stockpiles of disposed recycling to emerge within the country.
          </p>
          <p class="statement">
            While we acknowledge that the act of recycling is an important part of sustainability, we also believe that it is essential for people to realise the great importance of 'Reduce' and 'Reuse' in the slogan of 'Reduce, Reuse and Recycle'.
          </p>
        </div>
      </div>
     </div>
      <div class="container">
        <h2 class="title">
       Browse Creative Ideas From Our Reformers
        </h2>
        <div class="grid-container four-col">
          <item-card v-for="item in itemsList.slice(0, 4)" v-bind:key="item._id" :item="item" :users="usersList"></item-card>
        </div>
      </div>
	</div>
</template>

<script>
import ItemCard from '@/components/ItemCard/ItemCard'
import apiService from '@/apiService'
import { bus } from '@/main'
export default {
	name: 'Mission',
	components: {
		'item-card': ItemCard
	},
	data() {
		return {
			itemsList: [],
      usersList: [],
      team: [
        {
          name: "Marin",
          job1: "Front End",
          job2: "UI/UX Design",
          pic: "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          name: "Gigi",
          job1: "Front End",
          job2: "Javascript",
          pic: "https://cdn.mamamia.com.au/wp/wp-content/uploads/2019/05/20152121/staffy-instagram.jpg"
        },
        {
          name: "Tina",
          job1: "Javascript",
          job2: "Video Producer",
          pic: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },
        {
          name: "Mark",
          job1: "Back End",
          job2: "Database",
          pic: "https://i.ytimg.com/vi/HbUScF1VLqY/maxresdefault.jpg"
        },
      ]
		}
	},
	mounted() {
		apiService.getItems()
		.then((data) => {
			this.itemsList = data.sort(() => 0.5 - Math.random())
			this.$emit('loaded')
		}),
		apiService.getUser()
		.then((data) => {
			this.usersList = data
		})
	}
}
</script>

<style scoped lang="scss">
  @import "@/components/ItemDisplayGrid/ItemDisplayGrid.scss";
  @import "./mission.scss";
	@import "@/scss/_animation.scss";
</style>