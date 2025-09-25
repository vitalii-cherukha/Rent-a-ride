import { useEffect, useState } from 'react';
import { fetchBrands } from '../../services/carsApi';

interface FilterValues {
  brand?: string;
  price?: string;
  mileageFrom?: number;
  mileageTo?: number;
}

interface FilterBarProps {
  onSubmit: (values: FilterValues) => void;
}

const FilterBar = ({ onSubmit }: FilterBarProps) => {
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await fetchBrands();
        setBrands(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadBrands();
  }, []);

  const handleSubmit = (formData: FormData) => {
    const values: FilterValues = {};

    const brand = formData.get('brand') as string;
    const price = formData.get('price') as string;
    const mileageFrom = formData.get('mileageFrom') as string;
    const mileageTo = formData.get('mileageTo') as string;

    if (brand) values.brand = brand;
    if (price) values.price = price;
    if (mileageFrom) values.mileageFrom = Number(mileageFrom);
    if (mileageTo) values.mileageTo = Number(mileageTo);

    onSubmit(values);
  };

  return (
    <form action={handleSubmit}>
      <select name="brand">
        <option value="">Choose a brand</option>
        {brands.map(brand => (
          <option key={brand} value={brand.toLowerCase()}>
            {brand}
          </option>
        ))}
      </select>

      <select name="price">
        <option value="">Choose a price</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
      </select>

      <input type="number" name="mileageFrom" placeholder="From" />
      <input type="number" name="mileageTo" placeholder="To" />

      <button type="submit">Search</button>
    </form>
  );
};

export default FilterBar;
