import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "app/config/store";
import { getEntities } from "app/entities/datasource/datasource.reducer";
import CustomButton from "app/shared/component/button";

const Datasource = () => {
  const dispatch = useAppDispatch();

  const entities = useAppSelector(state => state.datasource.entities);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  return (
      <div>

        <CustomButton className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-1"
            onClick={() => {}}
        > Stop </CustomButton>

        {
          JSON.stringify(entities)
        }
      </div>
  );
}

export default Datasource;