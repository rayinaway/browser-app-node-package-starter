import {globalStyle} from '@vanilla-extract/css';

const BASE_FONT_SIZE = 10;
const DEFAULT_FONT_SIZE = 16;

globalStyle('body', {
	fontSize: `${DEFAULT_FONT_SIZE / BASE_FONT_SIZE}rem`,
	padding: 0,
	margin: 0
});

globalStyle('html', {
	fontSize: `${(BASE_FONT_SIZE / DEFAULT_FONT_SIZE) * 100}%`
});
