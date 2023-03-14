from events.event import subscribe
from events.links import LinkEventType, LinkEvent

from database import db
# from redis_db import redis_client
# from redis.commands.json.path import Path


class LinkListener:
    collection = db.link_events

    def handle_use_event(self, data: LinkEvent):
        print(f"EVENT {data.event_type.value} SAVED IN REDIS")
        self.collection.insert_one(data.dict())

    def handle_create_event(self, data: LinkEvent):
        print(f"EVENT {data.event_type.value} SAVED IN REDIS")
        self.collection.insert_one(data.dict())

    def handle_delete_event(self, data: LinkEvent):
        print(f"EVENT {data.event_type.value} SAVED IN REDIS")
        self.collection.insert_one(data.dict())

    def handle_update_event(self, data: LinkEvent):
        print(f"EVENT {data.event_type.value} SAVED IN REDIS")
        self.collection.insert_one(data.dict())

    def setup(self):
        subscribe(LinkEventType.LINK_CREATED.value, self.handle_create_event)
        subscribe(LinkEventType.LINK_DELETED.value, self.handle_delete_event)
        subscribe(LinkEventType.LINK_UPDATED.value, self.handle_update_event)
        subscribe(LinkEventType.LINK_USED.value, self.handle_use_event)
