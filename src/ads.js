
import { h, render } from 'preact';
import Ads from './AdsPage';

const mountNode = document.getElementById('app');
render(<Ads />, mountNode, mountNode.lastChild);
