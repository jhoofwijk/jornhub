
import { render } from 'preact';
import Watch from './WatchPage';

const mountNode = document.getElementById('app');
render(<Watch />, mountNode, mountNode.lastChild);
