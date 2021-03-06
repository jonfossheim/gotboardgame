import Vue from 'vue'
import Vuex from 'vuex'
import Player1 from '@/store/modules/Player1'
import Player2 from '@/store/modules/Player2'
import Characters from '@/store/modules/Characters'
import Tiles from '@/store/modules/Tiles'
import TrapModal from '@/store/modules/TrapModal'
import Dice from '@/store/modules/Dice'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		player1: Player1.ExtractVuexModule(Player1),
		player2: Player2.ExtractVuexModule(Player2),
		characters: Characters.ExtractVuexModule(Characters),
		tiles: Tiles.ExtractVuexModule(Tiles),
		trapmodal: TrapModal.ExtractVuexModule(TrapModal),
		dice: Dice.ExtractVuexModule(Dice)

	}
})

export default store

export const vxm = {
	player1: Player1.CreateProxy(store, Player1),
	player2: Player2.CreateProxy(store, Player2),
	characters: Characters.CreateProxy(store, Characters),
	tiles: Tiles.CreateProxy(store, Tiles),
	trapmodal: TrapModal.CreateProxy(store, TrapModal),
	dice: Dice.CreateProxy(store, Dice)
}
