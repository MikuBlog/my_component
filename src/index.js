import '../node_modules/font-awesome/css/font-awesome.min.css'
import button from '../components/button/index.js'

const components = [
    button
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default{
    install,
    button
}