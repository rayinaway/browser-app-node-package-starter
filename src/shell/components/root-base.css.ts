import {globalStyle, style} from '@vanilla-extract/css';

import '~/src/shell/styles/fonts.css';

export const rootBase = style({
	overflow: 'hidden'
});

globalStyle(
	[
		rootBase,
		`${rootBase}::before`,
		`${rootBase}::after`,
		`${rootBase} *`,
		`${rootBase} *::before`,
		`${rootBase} *::after`
	].join(', '),
	{
		overflowWrap: 'break-word',
		boxSizing: 'border-box'
	}
);
