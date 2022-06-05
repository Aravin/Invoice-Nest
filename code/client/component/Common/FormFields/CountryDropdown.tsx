import { Form, Select } from "antd";
import { countries } from "../../../constants/countries";
const { Option } = Select;

export default function CountrySelectField(props: any) {

  const children = [];
  for (let country of countries) {
    children.push(<Option key={country.id} value={country.id}>{country.value}</Option>);
  }

  return (
    <Form.Item label="Country" name='country' required={true}>
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
    </Form.Item>
  )
}
