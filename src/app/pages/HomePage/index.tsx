import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table/Table';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <Table />
      </div>
    </>
  );
}
