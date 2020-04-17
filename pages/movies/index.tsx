import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import { withApollo } from '../../lib/withApollo';
const MovieDetail: NextPage<{}> = () => {
  const router = useRouter();
  return <h1>Movie Details {router.query.movie}</h1>;
};

export default withApollo({ ssr: true })(MovieDetail);
