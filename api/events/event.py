subscribers = dict()


def subscribe(event_type: str, fn):
    if event_type not in subscribers:
        subscribers[event_type] = []

    subscribers[event_type].append(fn)


def emit_event(event_type: str, data):
    if event_type not in subscribers:
        raise Exception(f"Cannot found the event {event_type} in subscribers")

    for fn in subscribers[event_type]:
        fn(data)
