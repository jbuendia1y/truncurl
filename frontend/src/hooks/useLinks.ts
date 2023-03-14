import { useEffect, useState } from 'react';
import { ILink, LinkFilter } from '../models';
import { LinksService } from '../services';

const useLinks = (filters?: LinkFilter) => {
  const [links, setLinks] = useState<ILink[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<LinkFilter>(filters || {});
  const [selectedLink, setSelectedLink] = useState<ILink>();

  useEffect(() => {
    const linksService = new LinksService();
    let subscribe = true;

    linksService.find(filter).then((v) => {
      if (!subscribe) return;
      setLinks(v);
      if (v.length > 0) setSelectedLink(v[0]);
      setLoading(false);
    });

    return () => {
      subscribe = false;
    };
  }, [filter]);

  const changeFilter = (filter: LinkFilter = {}) => {
    setFilter(filter);
  };

  const selectLink = (id: string) => {
    const found = links.find((v) => v.id === id);
    if (!found) return;
    setSelectedLink(found);
  };

  return { links, loading, filter, changeFilter, selectLink, selectedLink };
};

export default useLinks;
