import { Select } from "antd";
import { countries } from "../../../constants/countries";
const { Option } = Select;

export default function CountrySelectField(props: any) {

  const children = [];
  for (let country of countries) {
    children.push(<Option key={country.id}>{country.value}</Option>);
  }

  return (
    <Select
      showSearch
      placeholder="Select the country"
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option?.children + '')?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {children}
    </Select>
  )
}
