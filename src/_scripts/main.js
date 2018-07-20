// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

$(() => { // Cuando carga html carga todo lo demás
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
  console.log('Hola picho!');
});
