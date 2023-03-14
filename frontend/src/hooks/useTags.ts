import { useEffect, useState } from 'react';
import { ITag, TagFilter } from '../models';
import { TagsService } from '../services';

const useTags = (filters: TagFilter = {}) => {
  const [tags, setTags] = useState<ITag[]>();
  const [filter, setFilter] = useState(filters);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let subscribe = true;

    const tagsService = new TagsService();
    tagsService
      .find()
      .then((v) => {
        if (!subscribe) return;
        setTags(v);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, []);

  const changeFilter = (value: TagFilter = {}) => {
    setFilter(value);
  };

  return { tags, loading, filters: filter, changeFilter };
};

export default useTags;
