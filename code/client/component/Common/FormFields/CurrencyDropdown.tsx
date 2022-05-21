import { Select } from "antd";
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

const currencies = [
  {
    currency: 'Afghani',
    currencyDisplay: 'Afghani (AFN)',
    code: 'AFN',
    nmericCode: 971,
    minorUnit: 2
  },
  {
    currency: 'Euro',
    currencyDisplay: 'Euro (EUR)',
    code: 'EUR',
    nmericCode: 978,
    minorUnit: 2
  },
  {
    currency: 'Lek',
    currencyDisplay: 'Lek (ALL)',
    code: 'ALL',
    nmericCode: '008',
    minorUnit: 2
  },
  {
    currency: 'Algerian Dinar',
    currencyDisplay: 'Algerian Dinar (DZD)',
    code: 'DZD',
    nmericCode: '012',
    minorUnit: 2
  },
  {
    currency: 'US Dollar',
    currencyDisplay: 'US Dollar (USD)',
    code: 'USD',
    nmericCode: 840,
    minorUnit: 2
  },
  {
    currency: 'Kwanza',
    currencyDisplay: 'Kwanza (AOA)',
    code: 'AOA',
    nmericCode: 973,
    minorUnit: 2
  },
  {
    currency: 'East Caribbean Dollar',
    currencyDisplay: 'East Caribbean Dollar (XCD)',
    code: 'XCD',
    nmericCode: 951,
    minorUnit: 2
  },
  {
    currency: 'No universal currency',
    currencyDisplay: 'No universal currency ()',
    code: '',
    nmericCode: '',
    minorUnit: ''
  },
  {
    currency: 'Argentine Peso',
    currencyDisplay: 'Argentine Peso (ARS)',
    code: 'ARS',
    nmericCode: '032',
    minorUnit: 2
  },
  {
    currency: 'Armenian Dram',
    currencyDisplay: 'Armenian Dram (AMD)',
    code: 'AMD',
    nmericCode: '051',
    minorUnit: 2
  },
  {
    currency: 'Aruban Florin',
    currencyDisplay: 'Aruban Florin (AWG)',
    code: 'AWG',
    nmericCode: 533,
    minorUnit: 2
  },
  {
    currency: 'Australian Dollar',
    currencyDisplay: 'Australian Dollar (AUD)',
    code: 'AUD',
    nmericCode: '036',
    minorUnit: 2
  },
  {
    currency: 'Azerbaijan Manat',
    currencyDisplay: 'Azerbaijan Manat (AZN)',
    code: 'AZN',
    nmericCode: 944,
    minorUnit: 2
  },
  {
    currency: 'Bahamian Dollar',
    currencyDisplay: 'Bahamian Dollar (BSD)',
    code: 'BSD',
    nmericCode: '044',
    minorUnit: 2
  },
  {
    currency: 'Bahraini Dinar',
    currencyDisplay: 'Bahraini Dinar (BHD)',
    code: 'BHD',
    nmericCode: '048',
    minorUnit: 3
  },
  {
    currency: 'Taka',
    currencyDisplay: 'Taka (BDT)',
    code: 'BDT',
    nmericCode: '050',
    minorUnit: 2
  },
  {
    currency: 'Barbados Dollar',
    currencyDisplay: 'Barbados Dollar (BBD)',
    code: 'BBD',
    nmericCode: '052',
    minorUnit: 2
  },
  {
    currency: 'Belarusian Ruble',
    currencyDisplay: 'Belarusian Ruble (BYN)',
    code: 'BYN',
    nmericCode: 933,
    minorUnit: 2
  },
  {
    currency: 'Belize Dollar',
    currencyDisplay: 'Belize Dollar (BZD)',
    code: 'BZD',
    nmericCode: '084',
    minorUnit: 2
  },
  {
    currency: 'CFA Franc BCEAO',
    currencyDisplay: 'CFA Franc BCEAO (XOF)',
    code: 'XOF',
    nmericCode: 952,
    minorUnit: 0
  },
  {
    currency: 'Bermudian Dollar',
    currencyDisplay: 'Bermudian Dollar (BMD)',
    code: 'BMD',
    nmericCode: '060',
    minorUnit: 2
  },
  {
    currency: 'Indian Rupee',
    currencyDisplay: 'Indian Rupee (INR)',
    code: 'INR',
    nmericCode: 356,
    minorUnit: 2
  },
  {
    currency: 'Ngultrum',
    currencyDisplay: 'Ngultrum (BTN)',
    code: 'BTN',
    nmericCode: '064',
    minorUnit: 2
  },
  {
    currency: 'Boliviano',
    currencyDisplay: 'Boliviano (BOB)',
    code: 'BOB',
    nmericCode: '068',
    minorUnit: 2
  },
  {
    currency: 'Mvdol',
    currencyDisplay: 'Mvdol (BOV)',
    code: 'BOV',
    nmericCode: 984,
    minorUnit: 2
  },
  {
    currency: 'Convertible Mark',
    currencyDisplay: 'Convertible Mark (BAM)',
    code: 'BAM',
    nmericCode: 977,
    minorUnit: 2
  },
  {
    currency: 'Pula',
    currencyDisplay: 'Pula (BWP)',
    code: 'BWP',
    nmericCode: '072',
    minorUnit: 2
  },
  {
    currency: 'Norwegian Krone',
    currencyDisplay: 'Norwegian Krone (NOK)',
    code: 'NOK',
    nmericCode: 578,
    minorUnit: 2
  },
  {
    currency: 'Brazilian Real',
    currencyDisplay: 'Brazilian Real (BRL)',
    code: 'BRL',
    nmericCode: 986,
    minorUnit: 2
  },
  {
    currency: 'Brunei Dollar',
    currencyDisplay: 'Brunei Dollar (BND)',
    code: 'BND',
    nmericCode: '096',
    minorUnit: 2
  },
  {
    currency: 'Bulgarian Lev',
    currencyDisplay: 'Bulgarian Lev (BGN)',
    code: 'BGN',
    nmericCode: 975,
    minorUnit: 2
  },
  {
    currency: 'Burundi Franc',
    currencyDisplay: 'Burundi Franc (BIF)',
    code: 'BIF',
    nmericCode: 108,
    minorUnit: 0
  },
  {
    currency: 'Cabo Verde Escudo',
    currencyDisplay: 'Cabo Verde Escudo (CVE)',
    code: 'CVE',
    nmericCode: 132,
    minorUnit: 2
  },
  {
    currency: 'Riel',
    currencyDisplay: 'Riel (KHR)',
    code: 'KHR',
    nmericCode: 116,
    minorUnit: 2
  },
  {
    currency: 'CFA Franc BEAC',
    currencyDisplay: 'CFA Franc BEAC (XAF)',
    code: 'XAF',
    nmericCode: 950,
    minorUnit: 0
  },
  {
    currency: 'Canadian Dollar',
    currencyDisplay: 'Canadian Dollar (CAD)',
    code: 'CAD',
    nmericCode: 124,
    minorUnit: 2
  },
  {
    currency: 'Cayman Islands Dollar',
    currencyDisplay: 'Cayman Islands Dollar (KYD)',
    code: 'KYD',
    nmericCode: 136,
    minorUnit: 2
  },
  {
    currency: 'Chilean Peso',
    currencyDisplay: 'Chilean Peso (CLP)',
    code: 'CLP',
    nmericCode: 152,
    minorUnit: 0
  },
  {
    currency: 'Unidad de Fomento',
    currencyDisplay: 'Unidad de Fomento (CLF)',
    code: 'CLF',
    nmericCode: 990,
    minorUnit: 4
  },
  {
    currency: 'Yuan Renminbi',
    currencyDisplay: 'Yuan Renminbi (CNY)',
    code: 'CNY',
    nmericCode: 156,
    minorUnit: 2
  },
  {
    currency: 'Colombian Peso',
    currencyDisplay: 'Colombian Peso (COP)',
    code: 'COP',
    nmericCode: 170,
    minorUnit: 2
  },
  {
    currency: 'Unidad de Valor Real',
    currencyDisplay: 'Unidad de Valor Real (COU)',
    code: 'COU',
    nmericCode: 970,
    minorUnit: 2
  },
  {
    currency: 'Comorian Franc',
    currencyDisplay: 'Comorian Franc (KMF)',
    code: 'KMF',
    nmericCode: 174,
    minorUnit: 0
  },
  {
    currency: 'Congolese Franc',
    currencyDisplay: 'Congolese Franc (CDF)',
    code: 'CDF',
    nmericCode: 976,
    minorUnit: 2
  },
  {
    currency: 'New Zealand Dollar',
    currencyDisplay: 'New Zealand Dollar (NZD)',
    code: 'NZD',
    nmericCode: 554,
    minorUnit: 2
  },
  {
    currency: 'Costa Rican Colon',
    currencyDisplay: 'Costa Rican Colon (CRC)',
    code: 'CRC',
    nmericCode: 188,
    minorUnit: 2
  },
  {
    currency: 'Kuna',
    currencyDisplay: 'Kuna (HRK)',
    code: 'HRK',
    nmericCode: 191,
    minorUnit: 2
  },
  {
    currency: 'Cuban Peso',
    currencyDisplay: 'Cuban Peso (CUP)',
    code: 'CUP',
    nmericCode: 192,
    minorUnit: 2
  },
  {
    currency: 'Peso Convertible',
    currencyDisplay: 'Peso Convertible (CUC)',
    code: 'CUC',
    nmericCode: 931,
    minorUnit: 2
  },
  {
    currency: 'Netherlands Antillean Guilder',
    currencyDisplay: 'Netherlands Antillean Guilder (ANG)',
    code: 'ANG',
    nmericCode: 532,
    minorUnit: 2
  },
  {
    currency: 'Czech Koruna',
    currencyDisplay: 'Czech Koruna (CZK)',
    code: 'CZK',
    nmericCode: 203,
    minorUnit: 2
  },
  {
    currency: 'Danish Krone',
    currencyDisplay: 'Danish Krone (DKK)',
    code: 'DKK',
    nmericCode: 208,
    minorUnit: 2
  },
  {
    currency: 'Djibouti Franc',
    currencyDisplay: 'Djibouti Franc (DJF)',
    code: 'DJF',
    nmericCode: 262,
    minorUnit: 0
  },
  {
    currency: 'Dominican Peso',
    currencyDisplay: 'Dominican Peso (DOP)',
    code: 'DOP',
    nmericCode: 214,
    minorUnit: 2
  },
  {
    currency: 'Egyptian Pound',
    currencyDisplay: 'Egyptian Pound (EGP)',
    code: 'EGP',
    nmericCode: 818,
    minorUnit: 2
  },
  {
    currency: 'El Salvador Colon',
    currencyDisplay: 'El Salvador Colon (SVC)',
    code: 'SVC',
    nmericCode: 222,
    minorUnit: 2
  },
  {
    currency: 'Nakfa',
    currencyDisplay: 'Nakfa (ERN)',
    code: 'ERN',
    nmericCode: 232,
    minorUnit: 2
  },
  {
    currency: 'Lilangeni',
    currencyDisplay: 'Lilangeni (SZL)',
    code: 'SZL',
    nmericCode: 748,
    minorUnit: 2
  },
  {
    currency: 'Ethiopian Birr',
    currencyDisplay: 'Ethiopian Birr (ETB)',
    code: 'ETB',
    nmericCode: 230,
    minorUnit: 2
  },
  {
    currency: 'Falkland Islands Pound',
    currencyDisplay: 'Falkland Islands Pound (FKP)',
    code: 'FKP',
    nmericCode: 238,
    minorUnit: 2
  },
  {
    currency: 'Fiji Dollar',
    currencyDisplay: 'Fiji Dollar (FJD)',
    code: 'FJD',
    nmericCode: 242,
    minorUnit: 2
  },
  {
    currency: 'CFP Franc',
    currencyDisplay: 'CFP Franc (XPF)',
    code: 'XPF',
    nmericCode: 953,
    minorUnit: 0
  },
  {
    currency: 'Dalasi',
    currencyDisplay: 'Dalasi (GMD)',
    code: 'GMD',
    nmericCode: 270,
    minorUnit: 2
  },
  {
    currency: 'Lari',
    currencyDisplay: 'Lari (GEL)',
    code: 'GEL',
    nmericCode: 981,
    minorUnit: 2
  },
  {
    currency: 'Ghana Cedi',
    currencyDisplay: 'Ghana Cedi (GHS)',
    code: 'GHS',
    nmericCode: 936,
    minorUnit: 2
  },
  {
    currency: 'Gibraltar Pound',
    currencyDisplay: 'Gibraltar Pound (GIP)',
    code: 'GIP',
    nmericCode: 292,
    minorUnit: 2
  },
  {
    currency: 'Quetzal',
    currencyDisplay: 'Quetzal (GTQ)',
    code: 'GTQ',
    nmericCode: 320,
    minorUnit: 2
  },
  {
    currency: 'Pound Sterling',
    currencyDisplay: 'Pound Sterling (GBP)',
    code: 'GBP',
    nmericCode: 826,
    minorUnit: 2
  },
  {
    currency: 'Guinean Franc',
    currencyDisplay: 'Guinean Franc (GNF)',
    code: 'GNF',
    nmericCode: 324,
    minorUnit: 0
  },
  {
    currency: 'Guyana Dollar',
    currencyDisplay: 'Guyana Dollar (GYD)',
    code: 'GYD',
    nmericCode: 328,
    minorUnit: 2
  },
  {
    currency: 'Gourde',
    currencyDisplay: 'Gourde (HTG)',
    code: 'HTG',
    nmericCode: 332,
    minorUnit: 2
  },
  {
    currency: 'Lempira',
    currencyDisplay: 'Lempira (HNL)',
    code: 'HNL',
    nmericCode: 340,
    minorUnit: 2
  },
  {
    currency: 'Hong Kong Dollar',
    currencyDisplay: 'Hong Kong Dollar (HKD)',
    code: 'HKD',
    nmericCode: 344,
    minorUnit: 2
  },
  {
    currency: 'Forint',
    currencyDisplay: 'Forint (HUF)',
    code: 'HUF',
    nmericCode: 348,
    minorUnit: 2
  },
  {
    currency: 'Iceland Krona',
    currencyDisplay: 'Iceland Krona (ISK)',
    code: 'ISK',
    nmericCode: 352,
    minorUnit: 0
  },
  {
    currency: 'Rupiah',
    currencyDisplay: 'Rupiah (IDR)',
    code: 'IDR',
    nmericCode: 360,
    minorUnit: 2
  },
  {
    currency: 'SDR (Special Drawing Right)',
    currencyDisplay: 'SDR (Special Drawing Right) (XDR)',
    code: 'XDR',
    nmericCode: 960,
    minorUnit: '-'
  },
  {
    currency: 'Iranian Rial',
    currencyDisplay: 'Iranian Rial (IRR)',
    code: 'IRR',
    nmericCode: 364,
    minorUnit: 2
  },
  {
    currency: 'Iraqi Dinar',
    currencyDisplay: 'Iraqi Dinar (IQD)',
    code: 'IQD',
    nmericCode: 368,
    minorUnit: 3
  },
  {
    currency: 'New Israeli Sheqel',
    currencyDisplay: 'New Israeli Sheqel (ILS)',
    code: 'ILS',
    nmericCode: 376,
    minorUnit: 2
  },
  {
    currency: 'Jamaican Dollar',
    currencyDisplay: 'Jamaican Dollar (JMD)',
    code: 'JMD',
    nmericCode: 388,
    minorUnit: 2
  },
  {
    currency: 'Yen',
    currencyDisplay: 'Yen (JPY)',
    code: 'JPY',
    nmericCode: 392,
    minorUnit: 0
  },
  {
    currency: 'Jordanian Dinar',
    currencyDisplay: 'Jordanian Dinar (JOD)',
    code: 'JOD',
    nmericCode: 400,
    minorUnit: 3
  },
  {
    currency: 'Tenge',
    currencyDisplay: 'Tenge (KZT)',
    code: 'KZT',
    nmericCode: 398,
    minorUnit: 2
  },
  {
    currency: 'Kenyan Shilling',
    currencyDisplay: 'Kenyan Shilling (KES)',
    code: 'KES',
    nmericCode: 404,
    minorUnit: 2
  },
  {
    currency: 'North Korean Won',
    currencyDisplay: 'North Korean Won (KPW)',
    code: 'KPW',
    nmericCode: 408,
    minorUnit: 2
  },
  {
    currency: 'Won',
    currencyDisplay: 'Won (KRW)',
    code: 'KRW',
    nmericCode: 410,
    minorUnit: 0
  },
  {
    currency: 'Kuwaiti Dinar',
    currencyDisplay: 'Kuwaiti Dinar (KWD)',
    code: 'KWD',
    nmericCode: 414,
    minorUnit: 3
  },
  {
    currency: 'Som',
    currencyDisplay: 'Som (KGS)',
    code: 'KGS',
    nmericCode: 417,
    minorUnit: 2
  },
  {
    currency: 'Lao Kip',
    currencyDisplay: 'Lao Kip (LAK)',
    code: 'LAK',
    nmericCode: 418,
    minorUnit: 2
  },
  {
    currency: 'Lebanese Pound',
    currencyDisplay: 'Lebanese Pound (LBP)',
    code: 'LBP',
    nmericCode: 422,
    minorUnit: 2
  },
  {
    currency: 'Loti',
    currencyDisplay: 'Loti (LSL)',
    code: 'LSL',
    nmericCode: 426,
    minorUnit: 2
  },
  {
    currency: 'Rand',
    currencyDisplay: 'Rand (ZAR)',
    code: 'ZAR',
    nmericCode: 710,
    minorUnit: 2
  },
  {
    currency: 'Liberian Dollar',
    currencyDisplay: 'Liberian Dollar (LRD)',
    code: 'LRD',
    nmericCode: 430,
    minorUnit: 2
  },
  {
    currency: 'Libyan Dinar',
    currencyDisplay: 'Libyan Dinar (LYD)',
    code: 'LYD',
    nmericCode: 434,
    minorUnit: 3
  },
  {
    currency: 'Swiss Franc',
    currencyDisplay: 'Swiss Franc (CHF)',
    code: 'CHF',
    nmericCode: 756,
    minorUnit: 2
  },
  {
    currency: 'Pataca',
    currencyDisplay: 'Pataca (MOP)',
    code: 'MOP',
    nmericCode: 446,
    minorUnit: 2
  },
  {
    currency: 'Denar',
    currencyDisplay: 'Denar (MKD)',
    code: 'MKD',
    nmericCode: 807,
    minorUnit: 2
  },
  {
    currency: 'Malagasy Ariary',
    currencyDisplay: 'Malagasy Ariary (MGA)',
    code: 'MGA',
    nmericCode: 969,
    minorUnit: 2
  },
  {
    currency: 'Malawi Kwacha',
    currencyDisplay: 'Malawi Kwacha (MWK)',
    code: 'MWK',
    nmericCode: 454,
    minorUnit: 2
  },
  {
    currency: 'Malaysian Ringgit',
    currencyDisplay: 'Malaysian Ringgit (MYR)',
    code: 'MYR',
    nmericCode: 458,
    minorUnit: 2
  },
  {
    currency: 'Rufiyaa',
    currencyDisplay: 'Rufiyaa (MVR)',
    code: 'MVR',
    nmericCode: 462,
    minorUnit: 2
  },
  {
    currency: 'Ouguiya',
    currencyDisplay: 'Ouguiya (MRU)',
    code: 'MRU',
    nmericCode: 929,
    minorUnit: 2
  },
  {
    currency: 'Mauritius Rupee',
    currencyDisplay: 'Mauritius Rupee (MUR)',
    code: 'MUR',
    nmericCode: 480,
    minorUnit: 2
  },
  {
    currency: 'ADB Unit of Account',
    currencyDisplay: 'ADB Unit of Account (XUA)',
    code: 'XUA',
    nmericCode: 965,
    minorUnit: '-'
  },
  {
    currency: 'Mexican Peso',
    currencyDisplay: 'Mexican Peso (MXN)',
    code: 'MXN',
    nmericCode: 484,
    minorUnit: 2
  },
  {
    currency: 'Mexican Unidad de Inversion (UDI)',
    currencyDisplay: 'Mexican Unidad de Inversion (UDI) (MXV)',
    code: 'MXV',
    nmericCode: 979,
    minorUnit: 2
  },
  {
    currency: 'Moldovan Leu',
    currencyDisplay: 'Moldovan Leu (MDL)',
    code: 'MDL',
    nmericCode: 498,
    minorUnit: 2
  },
  {
    currency: 'Tugrik',
    currencyDisplay: 'Tugrik (MNT)',
    code: 'MNT',
    nmericCode: 496,
    minorUnit: 2
  },
  {
    currency: 'Moroccan Dirham',
    currencyDisplay: 'Moroccan Dirham (MAD)',
    code: 'MAD',
    nmericCode: 504,
    minorUnit: 2
  },
  {
    currency: 'Mozambique Metical',
    currencyDisplay: 'Mozambique Metical (MZN)',
    code: 'MZN',
    nmericCode: 943,
    minorUnit: 2
  },
  {
    currency: 'Kyat',
    currencyDisplay: 'Kyat (MMK)',
    code: 'MMK',
    nmericCode: 104,
    minorUnit: 2
  },
  {
    currency: 'Namibia Dollar',
    currencyDisplay: 'Namibia Dollar (NAD)',
    code: 'NAD',
    nmericCode: 516,
    minorUnit: 2
  },
  {
    currency: 'Nepalese Rupee',
    currencyDisplay: 'Nepalese Rupee (NPR)',
    code: 'NPR',
    nmericCode: 524,
    minorUnit: 2
  },
  {
    currency: 'Cordoba Oro',
    currencyDisplay: 'Cordoba Oro (NIO)',
    code: 'NIO',
    nmericCode: 558,
    minorUnit: 2
  },
  {
    currency: 'Naira',
    currencyDisplay: 'Naira (NGN)',
    code: 'NGN',
    nmericCode: 566,
    minorUnit: 2
  },
  {
    currency: 'Rial Omani',
    currencyDisplay: 'Rial Omani (OMR)',
    code: 'OMR',
    nmericCode: 512,
    minorUnit: 3
  },
  {
    currency: 'Pakistan Rupee',
    currencyDisplay: 'Pakistan Rupee (PKR)',
    code: 'PKR',
    nmericCode: 586,
    minorUnit: 2
  },
  {
    currency: 'Balboa',
    currencyDisplay: 'Balboa (PAB)',
    code: 'PAB',
    nmericCode: 590,
    minorUnit: 2
  },
  {
    currency: 'Kina',
    currencyDisplay: 'Kina (PGK)',
    code: 'PGK',
    nmericCode: 598,
    minorUnit: 2
  },
  {
    currency: 'Guarani',
    currencyDisplay: 'Guarani (PYG)',
    code: 'PYG',
    nmericCode: 600,
    minorUnit: 0
  },
  {
    currency: 'Sol',
    currencyDisplay: 'Sol (PEN)',
    code: 'PEN',
    nmericCode: 604,
    minorUnit: 2
  },
  {
    currency: 'Philippine Peso',
    currencyDisplay: 'Philippine Peso (PHP)',
    code: 'PHP',
    nmericCode: 608,
    minorUnit: 2
  },
  {
    currency: 'Zloty',
    currencyDisplay: 'Zloty (PLN)',
    code: 'PLN',
    nmericCode: 985,
    minorUnit: 2
  },
  {
    currency: 'Qatari Rial',
    currencyDisplay: 'Qatari Rial (QAR)',
    code: 'QAR',
    nmericCode: 634,
    minorUnit: 2
  },
  {
    currency: 'Romanian Leu',
    currencyDisplay: 'Romanian Leu (RON)',
    code: 'RON',
    nmericCode: 946,
    minorUnit: 2
  },
  {
    currency: 'Russian Ruble',
    currencyDisplay: 'Russian Ruble (RUB)',
    code: 'RUB',
    nmericCode: 643,
    minorUnit: 2
  },
  {
    currency: 'Rwanda Franc',
    currencyDisplay: 'Rwanda Franc (RWF)',
    code: 'RWF',
    nmericCode: 646,
    minorUnit: 0
  },
  {
    currency: 'Saint Helena Pound',
    currencyDisplay: 'Saint Helena Pound (SHP)',
    code: 'SHP',
    nmericCode: 654,
    minorUnit: 2
  },
  {
    currency: 'Tala',
    currencyDisplay: 'Tala (WST)',
    code: 'WST',
    nmericCode: 882,
    minorUnit: 2
  },
  {
    currency: 'Dobra',
    currencyDisplay: 'Dobra (STN)',
    code: 'STN',
    nmericCode: 930,
    minorUnit: 2
  },
  {
    currency: 'Saudi Riyal',
    currencyDisplay: 'Saudi Riyal (SAR)',
    code: 'SAR',
    nmericCode: 682,
    minorUnit: 2
  },
  {
    currency: 'Serbian Dinar',
    currencyDisplay: 'Serbian Dinar (RSD)',
    code: 'RSD',
    nmericCode: 941,
    minorUnit: 2
  },
  {
    currency: 'Seychelles Rupee',
    currencyDisplay: 'Seychelles Rupee (SCR)',
    code: 'SCR',
    nmericCode: 690,
    minorUnit: 2
  },
  {
    currency: 'Leone',
    currencyDisplay: 'Leone (SLL)',
    code: 'SLL',
    nmericCode: 694,
    minorUnit: 2
  },
  {
    currency: 'Singapore Dollar',
    currencyDisplay: 'Singapore Dollar (SGD)',
    code: 'SGD',
    nmericCode: 702,
    minorUnit: 2
  },
  {
    currency: 'Sucre',
    currencyDisplay: 'Sucre (XSU)',
    code: 'XSU',
    nmericCode: 994,
    minorUnit: '-'
  },
  {
    currency: 'Solomon Islands Dollar',
    currencyDisplay: 'Solomon Islands Dollar (SBD)',
    code: 'SBD',
    nmericCode: '090',
    minorUnit: 2
  },
  {
    currency: 'Somali Shilling',
    currencyDisplay: 'Somali Shilling (SOS)',
    code: 'SOS',
    nmericCode: 706,
    minorUnit: 2
  },
  {
    currency: 'South Sudanese Pound',
    currencyDisplay: 'South Sudanese Pound (SSP)',
    code: 'SSP',
    nmericCode: 728,
    minorUnit: 2
  },
  {
    currency: 'Sri Lanka Rupee',
    currencyDisplay: 'Sri Lanka Rupee (LKR)',
    code: 'LKR',
    nmericCode: 144,
    minorUnit: 2
  },
  {
    currency: 'Sudanese Pound',
    currencyDisplay: 'Sudanese Pound (SDG)',
    code: 'SDG',
    nmericCode: 938,
    minorUnit: 2
  },
  {
    currency: 'Surinam Dollar',
    currencyDisplay: 'Surinam Dollar (SRD)',
    code: 'SRD',
    nmericCode: 968,
    minorUnit: 2
  },
  {
    currency: 'Swedish Krona',
    currencyDisplay: 'Swedish Krona (SEK)',
    code: 'SEK',
    nmericCode: 752,
    minorUnit: 2
  },
  {
    currency: 'WIR Euro',
    currencyDisplay: 'WIR Euro (CHE)',
    code: 'CHE',
    nmericCode: 947,
    minorUnit: 2
  },
  {
    currency: 'WIR Franc',
    currencyDisplay: 'WIR Franc (CHW)',
    code: 'CHW',
    nmericCode: 948,
    minorUnit: 2
  },
  {
    currency: 'Syrian Pound',
    currencyDisplay: 'Syrian Pound (SYP)',
    code: 'SYP',
    nmericCode: 760,
    minorUnit: 2
  },
  {
    currency: 'New Taiwan Dollar',
    currencyDisplay: 'New Taiwan Dollar (TWD)',
    code: 'TWD',
    nmericCode: 901,
    minorUnit: 2
  },
  {
    currency: 'Somoni',
    currencyDisplay: 'Somoni (TJS)',
    code: 'TJS',
    nmericCode: 972,
    minorUnit: 2
  },
  {
    currency: 'Tanzanian Shilling',
    currencyDisplay: 'Tanzanian Shilling (TZS)',
    code: 'TZS',
    nmericCode: 834,
    minorUnit: 2
  },
  {
    currency: 'Baht',
    currencyDisplay: 'Baht (THB)',
    code: 'THB',
    nmericCode: 764,
    minorUnit: 2
  },
  {
    currency: "Pa'anga",
    currencyDisplay: "Pa'anga (TOP)",
    code: 'TOP',
    nmericCode: 776,
    minorUnit: 2
  },
  {
    currency: 'Trinidad and Tobago Dollar',
    currencyDisplay: 'Trinidad and Tobago Dollar (TTD)',
    code: 'TTD',
    nmericCode: 780,
    minorUnit: 2
  },
  {
    currency: 'Tunisian Dinar',
    currencyDisplay: 'Tunisian Dinar (TND)',
    code: 'TND',
    nmericCode: 788,
    minorUnit: 3
  },
  {
    currency: 'Turkish Lira',
    currencyDisplay: 'Turkish Lira (TRY)',
    code: 'TRY',
    nmericCode: 949,
    minorUnit: 2
  },
  {
    currency: 'Turkmenistan New Manat',
    currencyDisplay: 'Turkmenistan New Manat (TMT)',
    code: 'TMT',
    nmericCode: 934,
    minorUnit: 2
  },
  {
    currency: 'Uganda Shilling',
    currencyDisplay: 'Uganda Shilling (UGX)',
    code: 'UGX',
    nmericCode: 800,
    minorUnit: 0
  },
  {
    currency: 'Hryvnia',
    currencyDisplay: 'Hryvnia (UAH)',
    code: 'UAH',
    nmericCode: 980,
    minorUnit: 2
  },
  {
    currency: 'UAE Dirham',
    currencyDisplay: 'UAE Dirham (AED)',
    code: 'AED',
    nmericCode: 784,
    minorUnit: 2
  },
  {
    currency: 'US Dollar (Next day)',
    currencyDisplay: 'US Dollar (Next day) (USN)',
    code: 'USN',
    nmericCode: 997,
    minorUnit: 2
  },
  {
    currency: 'Peso Uruguayo',
    currencyDisplay: 'Peso Uruguayo (UYU)',
    code: 'UYU',
    nmericCode: 858,
    minorUnit: 2
  },
  {
    currency: 'Uruguay Peso en Unidades Indexadas (UI)',
    currencyDisplay: 'Uruguay Peso en Unidades Indexadas (UI) (UYI)',
    code: 'UYI',
    nmericCode: 940,
    minorUnit: 0
  },
  {
    currency: 'Unidad Previsional',
    currencyDisplay: 'Unidad Previsional (UYW)',
    code: 'UYW',
    nmericCode: 927,
    minorUnit: 4
  },
  {
    currency: 'Uzbekistan Sum',
    currencyDisplay: 'Uzbekistan Sum (UZS)',
    code: 'UZS',
    nmericCode: 860,
    minorUnit: 2
  },
  {
    currency: 'Vatu',
    currencyDisplay: 'Vatu (VUV)',
    code: 'VUV',
    nmericCode: 548,
    minorUnit: 0
  },
  {
    currency: 'Bolívar Soberano',
    currencyDisplay: 'Bolívar Soberano (VES)',
    code: 'VES',
    nmericCode: 928,
    minorUnit: 2
  },
  {
    currency: 'Dong',
    currencyDisplay: 'Dong (VND)',
    code: 'VND',
    nmericCode: 704,
    minorUnit: 0
  },
  {
    currency: 'Yemeni Rial',
    currencyDisplay: 'Yemeni Rial (YER)',
    code: 'YER',
    nmericCode: 886,
    minorUnit: 2
  },
  {
    currency: 'Zambian Kwacha',
    currencyDisplay: 'Zambian Kwacha (ZMW)',
    code: 'ZMW',
    nmericCode: 967,
    minorUnit: 2
  },
  {
    currency: 'Zimbabwe Dollar',
    currencyDisplay: 'Zimbabwe Dollar (ZWL)',
    code: 'ZWL',
    nmericCode: 932,
    minorUnit: 2
  },
];
