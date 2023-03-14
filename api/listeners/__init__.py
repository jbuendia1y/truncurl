from .link import LinkListener
from .log import LogListener


def setup_listeners():
    listeners = [
        LinkListener(),
        LogListener()
    ]

    for listener in listeners:
        listener.setup()
