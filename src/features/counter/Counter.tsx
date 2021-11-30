import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useGetAllCharactersQuery } from '../../services/rickNmorty';
import { decrement, increment } from './counterSlice';

const Counter = () => {
  // The `state` arg is correctly typed as `RootState` already
  const dispatch = useAppDispatch();
  const { isError, data, isLoading } = useGetAllCharactersQuery(undefined);
  console.log(data?.results);
  return (
    <div>
      <div>
        <div>
          {
            isLoading ? <div> Is Loading..</div> : (
              <div>
                {data?.results.map((item) => (
                  <h4>
                    {item.name}
                  </h4>
                ))}
              </div>
            )
          }
        </div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
