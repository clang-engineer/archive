import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "app/config/store";
import { getEntities } from "app/entities/datasource/datasource.reducer";

const Datasource = () => {
  const dispatch = useAppDispatch();

  const entities = useAppSelector(state => state.datasource.entities);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  return (
      <div>
        {
          JSON.stringify(entities)
        }
      </div>
  );
}

export default Datasource;