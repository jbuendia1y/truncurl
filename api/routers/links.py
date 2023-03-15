from fastapi import APIRouter, Depends, Request, HTTPException

from oauth import get_current_user
from services.link import LinksService
from models.link import FilterLinks, CreateLink, Link
from models.user import User
from typing import List, Dict

from events.links import emit_link_event, LinkEventType, LinkEventData, LinkEvent

router = APIRouter()


@router.get('/links')
def get_links(user: User = Depends(get_current_user)) -> List[Link]:
    link_service = LinksService()
    filter = FilterLinks(user_id=user.id)
    data = link_service.find(filter)
    return data


@router.get('/links/analytics')
def analytics(
    user: User = Depends(get_current_user),
    event_type: LinkEventType = LinkEventType.LINK_USED
) -> List[Dict]:
    link_service = LinksService()
    return link_service.get_analytics(event_type, user.id)


@router.post('/links')
def create_link(body: CreateLink, request: Request, user: User = Depends(get_current_user)) -> Link:
    link_service = LinksService()

    body.user_id = user.id

    data = link_service.create(body)

    # Event
    event = LinkEvent(
        event_type=LinkEventType.LINK_CREATED,
        data=LinkEventData(
            ip=request.client.host,
            link=data,
            user=user,
            user_id=body.user_id
        )
    )
    emit_link_event(LinkEventType.LINK_CREATED, event)

    return data


@router.get('/links/{hash}')
def get_link(hash: str) -> Link:
    link_service = LinksService()
    data = link_service.find_one(hash)
    if not data:
        raise HTTPException(status_code=404, detail="Cannot found this link")

    return data
