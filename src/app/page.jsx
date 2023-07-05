'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import API from './utils/api';

const Main = () => {
  useQuery(
    'getTestApi',
    async () => {
      return await API.get('/api/test');
    },
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.error(err);
      }
    }
  );

  return (
    <>
      <p>main</p>
    </>
  );
};

export default Main;
