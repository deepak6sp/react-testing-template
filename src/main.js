import angular from 'angular';
import ReactComponent from './app';
import { react2angular } from 'react2angular';

angular
  .module('myModule', [])
  .component('reactComponent', react2angular(ReactComponent))