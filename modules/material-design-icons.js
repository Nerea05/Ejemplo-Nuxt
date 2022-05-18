import { resolve } from 'path'

const icons = ['Phone', 'Alarm', 'Home', 'Rabbit','Play', 'Pause'] // solo los iconos que quiere usar // si se quiere cargar uno nuevo hay que parar el servicio 

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'MIcon',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}