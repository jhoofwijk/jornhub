
import { h, render } from 'preact';
import Search from './search.jsx';

const mountNode = document.getElementById('app');
render(<Search />, mountNode, mountNode.lastChild);
