import { CheckIcon, Select } from "native-base";
import { useState } from "react";

const CountrySelector = () => {
  const [country, setCountry] = useState("gh");
  return (
    <Select
      selectedValue={country}
      placeholder="Choose country"
      accessibilityLabel="Choose country"
      _selectedItem={{
        endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={(itemValue) => setCountry(itemValue)}
    >
      <Select.Item label="Ghana" value="gh" />
      <Select.Item label="USA" value="usa" />
      <Select.Item label="Nigeria" value="ng" />
    </Select>
  );
};

export default CountrySelector;
