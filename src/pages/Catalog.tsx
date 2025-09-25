import { useState } from 'react';
import FilterBar from '../components/common/FilterBar';
import List from '../components/common/List';
import Container from '../components/layout/Container';
import type { FetchCarsParams } from '../types/params';

const Catalog = () => {
  const [query, setQuery] = useState<FetchCarsParams>({});

  const handleSubmit = async (values: FetchCarsParams) => {
    setQuery(values);
  };

  return (
    <Container>
      <FilterBar onSubmit={handleSubmit} />
      <List query={query} />
    </Container>
  );
};

export default Catalog;
