/*
 * @Author: your name
 * @Date: 2019-11-11 21:37:18
 * @LastEditTime: 2019-11-11 22:07:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pop-tip\src\components\popTip.js
 */
import PopTipComponent from './popTip.vue';

let $_vm, $_pop;

const plugin = {
    install(Vue) {
        if (!$_vm) {
            let PopTip = Vue.extend(PopTipComponent);
            $_vm = new PopTip({
                el: document.createElement('div')
            });
        }
        const pop = {
            show() {
                if (!$_pop) {
                    $_pop = (document.body || document.documentElement).appendChild($_vm.$el);
                }
                $_vm.showPop = true;
            },
            hide() {
                $_vm.showPop = false;
            }
        }
        Vue.$_pop = pop;

        Vue.mixin({
            created() {
                this.$pop = Vue.$_pop;
            }
        });
    }
}

export default plugin;