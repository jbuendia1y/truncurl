from .event import emit_event
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field
from datetime import datetime
from typing import Any

from models.link import Link
from models.user import User


class LinkEventType(str, Enum):
    LINK_CREATED = "LINK_CREATED"
    LINK_UPDATED = "LINK_UPDATED"
    LINK_DELETED = "LINK_DELETED"
    LINK_USED = "LINK_USED"


class LinkEventData(BaseModel):
    ip: str
    link: Link
    user: Optional[User] = None
    user_id: Optional[str] = None

class LinkEvent(BaseModel):
    event_type: LinkEventType
    data: LinkEventData
    created_at: Optional[datetime] = Field(default_factory=lambda: datetime.now())


def emit_link_event(event_type: LinkEventType, data: LinkEvent):
    emit_event(event_type.value, data)