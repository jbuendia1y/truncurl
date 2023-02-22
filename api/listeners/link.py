from events.event import subscribe
from events.links import LinkEventType, LinkEvent

from database import db


class LinkListener:
    collection = db.link_events

    def handle_use_event(self, data: LinkEvent):
        self.collection.insert_one(data.dict())

    def handle_create_event(self, data: LinkEvent):
        self.collection.insert_one(data.dict())

    def handle_delete_event(self, data: LinkEvent):
        self.collection.insert_one(data.dict())

    def handle_update_event(self, data: LinkEvent):
        self.collection.insert_one(data.dict())

    def setup(self):
        subscribe(LinkEventType.LINK_CREATED, self.handle_create_event)
        subscribe(LinkEventType.LINK_DELETED, self.handle_delete_event)
        subscribe(LinkEventType.LINK_UPDATED, self.handle_update_event)
        subscribe(LinkEventType.LINK_USED, self.handle_use_event)