import { VuexModule, Module, action, mutation } from 'vuex-class-component'
import Axios from 'axios'

@Module({ namespacedPath: 'player2/' })
export default class Player2 extends VuexModule {
	player2: any = {
		id: 0,
		name: '',
		title: '',
		icon: '',
		tilePos: 0,
		turn: false,
		populated: false
	}

	@action
	async getCharacter(id: any) {
		const { data } = await Axios.get('https://anapioficeandfire.com/api/characters/' + id)
		this.setCharacter(data)
	}

	@mutation
	setCharacter(character: any) {
		this.player2.id = character.id
		this.player2.name = character.name
		this.player2.title = character.aliases[0]
		this.player2.tilePos = 0
		this.player2.turn = false
		this.player2.populated = true

		if (this.player2.name === 'Petyr Baelish') {
			this.player2.icon = './characters/petyr.webp'
		}
		if (this.player2.name === 'Davos Seaworth') {
			this.player2.icon = './characters/davos.webp'
		}
		if (this.player2.name === 'Tyrion Lannister') {
			this.player2.icon = './characters/tyrion.webp'
		}
		if (this.player2.name === 'Bronn') {
			this.player2.icon = './characters/bronn.webp'
		}
		if (this.player2.name === 'Jaime Lannister') {
			this.player2.icon = './characters/jaime.webp'
		}
		if (this.player2.name === 'Daenerys Targaryen') {
			this.player2.icon = './characters/daenerys.webp'
		}
		if (this.player2.name === 'Sandor Clegane') {
			this.player2.icon = './characters/sandor.webp'
		}
		if (this.player2.name === 'Jon Snow') {
			this.player2.icon = './characters/jon.webp'
		}
		if (this.player2.name === 'Arya Stark') {
			this.player2.icon = './characters/arya.webp'
		}
		if (this.player2.name === 'Brienne of Tarth') {
			this.player2.icon = './characters/brienne.webp'
		}
	}
	@mutation
	updatePos(roll: number) {
		this.player2.tilePos = this.player2.tilePos + roll
	}
	@mutation
	trapInvoke(penalty: number) {
		this.player2.tilePos = this.player2.tilePos - penalty
	}
	@mutation
	updateTurn() {
		this.player2.turn = !this.player2.turn
	}
	@mutation
	updateSelect() {
		this.player2.populated = !this.player2.populated
	}
}
