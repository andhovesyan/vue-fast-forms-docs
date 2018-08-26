import Vue from 'vue';
import * as VF from 'vue-fast-forms';

import DocSection from '../components/DocSection';
import CodeBlock from '../components/CodeBlock';

Vue.component('doc-section', DocSection);
Vue.component('code-block', CodeBlock);

Vue.component('vf-btn', VF.Button);
Vue.component('vf-checkbox', VF.Checkbox);
Vue.component('vf-form', VF.Form);
Vue.component('vf-group', VF.Group);
Vue.component('vf-input', VF.Input);
Vue.component('vf-radio', VF.Radio);
Vue.component('vf-datepicker', VF.Datepicker);
Vue.component('vf-timepicker', VF.Timepicker);
Vue.component('vf-select', VF.Select);
Vue.component('vf-addon', VF.Addon);
Vue.component('vf-help', VF.Help);
