import { Select } from "antd";
import { currencies } from "../../../constants/currencies";
const { Option } = Select;

export default function CurrencySelectField(props: any) {
  const children = [];
  for (let currency of currencies) {
    children.push(<Option key={currency.code}>{currency.currencyDisplay}</Option>);
  }

  return (
    <Select
      showSearch
      placeholder="Select the Currency"
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option?.children + '')?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {children}
    </Select>
  )
}
