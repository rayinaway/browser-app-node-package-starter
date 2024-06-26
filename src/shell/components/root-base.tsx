import type * as React from 'react';
import {cnx} from '~~/shell/utils/markup';
import * as cn from './root-base.css';

export default function RootBase({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>): React.ReactElement {
	return <div className={cnx(cn.rootBase, className)} {...props} />;
}
