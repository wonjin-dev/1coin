import {useQuery} from "react-query";
import ApexChart from "react-apexcharts";
import {CoinChartSchema} from "../api/schema/coinChart";
import {getCoinChartData} from "../api/coin";

interface Props {
  coinId: string;
}

const Chart = (props: Props) => {
  const {isLoading, data} = useQuery<CoinChartSchema[]>(
    ["chart", props.coinId],
    () => getCoinChartData(props.coinId),
    {refetchInterval: 10000}
  );
  return (
    <>
      {isLoading
        ? (<p>spin loading</p>)
        : (<ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => ({
                x: price.time_close,
                y: [price.open, price.high, price.low, price.close]
              })),
            },
          ]}
          options={{
            theme: {
              mode: "dark"
            },
            chart: {
              type: "candlestick",
              toolbar: {show: false},
              background: "transparent"
            },
            grid: {show: false},
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
              labels: {show: true}
            },
            yaxis: {show: false}
          }}
        />)
      }
    </>
  )
}

export default Chart;