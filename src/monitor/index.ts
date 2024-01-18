import ServiceBase from '~/src/service-base';

export default class Monitor extends ServiceBase {
	reportEvent(payload: unknown): void {
		if (payload instanceof Error) {
			console.error(payload);
		}
	}
}
