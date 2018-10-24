import * as angular from 'angular';
import ReactComponent from './app';
import { react2angular } from 'react2angular';
import * as _  from 'lodash';


const angularComponent = {
  template : `<div>angular componentasd </div>`
}

angular
  .module('myModule', [])
  .component('angularComponent', angularComponent)
  .component('reactComponent', react2angular(ReactComponent))