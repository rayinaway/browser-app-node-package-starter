import ServiceBase from '~/src/service-base';

type EventPayloads = {
	'error': Error;
};

export default class Monitor extends ServiceBase {
	recordEvent<EventType extends keyof EventPayloads>(
		eventType: EventType,
		eventPayload: EventPayloads[EventType]
	): void {
		if (eventType === 'error') {
			console.error(eventPayload);
		}
	}
}
