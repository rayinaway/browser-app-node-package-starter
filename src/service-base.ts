import {ServiceCollection} from '@/services';

export default class ServiceBase {
	protected readonly services: ServiceCollection;

	constructor(services: ServiceCollection) {
		this.services = services;
	}
}
