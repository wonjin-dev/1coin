import ApexChart from 'react-apexcharts';
import {useQuery} from 'react-query';
import {useRecoilValue} from 'recoil';
import {IMAGES} from '../../../constants/images';
import {getCoinChartData} from '../../../api/coin';
import {darkModeAtom} from '../../../store/atoms';
import Loader from '../../../components/Loader';

interface ChartProps {
  coinId?: string;
}

interface CoinChartSchema {
  open: number;
  close: number;
  time_close: string;
  high: number;
  low: number;
}

const Chart = (props: ChartProps) => {
  const isDarkMode = useRecoilValue(darkModeAtom);
  const {isLoading, data} = useQuery<CoinChartSchema[]>(
    ['chart', props.coinId],
    () => getCoinChartData(props.coinId),
    {
      cacheTime: 3600000,
      staleTime: 3600000
    }
  );

  return (
    <>
      {isLoading ? (
        <Loader
          type="spin"
          img={IMAGES.coin}
        />
      ) : (
        <ApexChart
          type="candlestick"
          series={[{
            name: 'Price',
            data: data !== undefined ? data.map((price) => ({
              x: price.time_close,
              y: [price.open.toFixed(2), price.high.toFixed(2), price.low.toFixed(2), price.close.toFixed(2)]
            })) : []
          }]}
          options={{
            theme: {
              mode: isDarkMode ? 'dark' : 'light'
            },
            chart: {
              type: 'candlestick',
              toolbar: {show: false},
              background: 'transparent'
            },
            grid: {show: false},
            xaxis: {
              type: 'datetime',
              categories: data?.map((price) => price.time_close),
              labels: {show: true}
            },
            yaxis: {show: false}
          }}
        />
      )}
    </>
  );
};

export default Chart;