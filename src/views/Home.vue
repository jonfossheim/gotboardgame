<template>
	<div>
		<div class="topSide">
			<div class="confirmContainer">
				<transition name="bounce">
					<CharacterConfirm
						v-if="player1.name"
					/>
				</transition>
				<transition name="bounce">
					<div v-if="player1.name && player2.name" class="confirm">
						<RouterLink class="btn btn__fixed" to="/board">
							Confirm Selection
						</RouterLink>
					</div>
				</transition>
				<transition name="bounce">
					<CharacterConfirm2 v-if="player2.name" />
				</transition>
			</div>

		</div>
		<CharacterSelect />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import CharacterSelect from '@/components/CharacterSelect.vue'
	import CharacterConfirm from '@/components/CharacterConfirm.vue'
	import { vxm } from '@/store'
	import CharacterConfirm2 from '@/components/CharacterConfirm2.vue'
	@Component({
		components: { CharacterConfirm2, CharacterConfirm, CharacterSelect }
	})
	export default class Home extends Vue {
		get player1() {
			return vxm.player1.player1
		}
		get player2() {
			return vxm.player2.player2
		}
	}
</script>

<style scoped lang="sass">
@import "../styles/partials/animations"
.topSide
	height: 20vh
.confirm
	display: flex
	justify-content: center
.confirmContainer
	display: flex
	flex-direction: row
	justify-content: space-around
	margin-bottom: 1.5em

.btn__fixed
	height: 50px
</style>
