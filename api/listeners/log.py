from events.links import LinkEvent, LinkEventType
from events.event import subscribe

import logging


class LogListener:

    def handle_link_used_event(self, data: LinkEvent):
        if data.data.user_id:
            msg = f"USER:[{data.data.user_id}]"
        else:
            msg = f"IP:[{data.data.ip}]"

        logging.info(f"Link used by {msg}")

    def handle_link_created_event(self, data: LinkEvent):
        if data.data.user_id:
            msg = f"USER:[{data.data.user_id}]"
        else:
            msg = f"IP:[{data.data.ip}]"

        logging.info(f"Link created by {msg}")

    def handle_link_deleted_event(self, data: LinkEvent):
        logging.info(f"Link deleted by USER:[{data.data.user_id}]")

    def handle_link_updated_event(self, data: LinkEvent):
        logging.info(f"Link updated by USER:[{data.data.user_id}]")

    def setup(self):
        subscribe(LinkEventType.LINK_CREATED, self.handle_link_created_event)
        subscribe(LinkEventType.LINK_DELETED, self.handle_link_deleted_event)
        subscribe(LinkEventType.LINK_UPDATED, self.handle_link_updated_event)
        subscribe(LinkEventType.LINK_USED, self.handle_link_used_event)