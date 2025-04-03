import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "app/config/store";
import { getEntities } from "app/entities/datasource/datasource.reducer";
import Button from "app/shared/component/button/gradient-button";

const Datasource = () => {
  const dispatch = useAppDispatch();

  const entities = useAppSelector(state => state.datasource.entities);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  return (
      <div>

        <Button>
          test
        </Button>


      </div>
  );
}

export default Datasource;