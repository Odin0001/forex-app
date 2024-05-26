// import { ColorType, createChart, LineStyle, TickMarkType } from 'lightweight-charts';
// import { useEffect, useRef } from 'react';
import Header from 'components/home/Header';
import MainPrices from 'components/home/MainPrices';
import Perks from 'components/home/Perks';
import Navbar from 'components/Navbar';

export default function Home() {

  // const chartContainer = useRef(null)

  // const initialData = [ //this data is for the line chart
  //   { time: '2018-12-22', value: 32.51 },
  //   { time: '2018-12-23', value: 31.11 },
  //   { time: '2018-12-24', value: 27.02 },
  //   { time: '2018-12-25', value: 27.32 },
  //   { time: '2018-12-26', value: 25.17 },
  //   { time: '2018-12-27', value: 28.89 },
  //   { time: '2018-12-28', value: 25.46 },
  //   { time: '2018-12-29', value: 23.92 },
  //   { time: '2018-12-30', value: 22.68 },
  //   { time: '2018-12-31', value: 22.67 },
  // ];

  // //this data is for the candlesticks charts
  // const data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];

  // useEffect(() => {
  //   const chart = createChart(chartContainer.current)
  //   //styling the chart
  //   chart.applyOptions({
  //     layout: {
  //       background: { color: '#222' },
  //       textColor: '#DDD',
  //     },
  //     grid: {
  //         vertLines: { color: '#444' },
  //         horzLines: { color: '#444' },
  //     },

  //     width: chartContainer.current.clientWidth,
  //     height: 740,
  //     crosshair: {
  //       vertLine: {
  //         width: 1,
  //         style: LineStyle.Solid,
  //         color: '#C3BCDB44',
  //         labelBackgroundColor: '#9B7DFF',
  //       },
  //       horzLine: {
  //         color: '#9B7DFF',
  //         labelBackgroundColor: '#9B7DFF',
  //       },
  //     },
  //     localization: {
  //       locale: 'en-80',
  //       timeFormatter: (time) => {
  //         const date = new Date(time * 1000)
  //         const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  //           hour: 'numeric',
  //           minute: 'numeric',
  //           month: 'short',
  //           day: 'numeric',
  //           year: '2-digit'
  //         })
  //         return dateFormatter.format(date)
  //       } 
  //     }
  //   })

  //   // Setting the border color for the vertical axis
  //   chart.priceScale('right').applyOptions({
  //     borderColor: '#71649C',
  //   });

  //   // Setting the border color for the horizontal axis
  //   chart.timeScale().applyOptions({
  //     borderColor: '#71649C',
  //     rightOffset: 20, //this is the margin on the right between the last price and the future price
  //     fixLeftEdge: true, //this is to prevent from going left to the infinity
  //     fixRightEdge: true,  //same as above but for the right
  //     timeVisible: true, //this is to make the time of the day visible
  //     tickMarkFormatter: (time, tickMarkType, locale) => {
  //       const date = new Date(time * 1000)

  //       switch(tickMarkType) {
  //         case TickMarkType.Year:
  //           return date.getFullYear()
          
  //           case TickMarkType.Month:
  //           const monthFormatter = new Intl.DateTimeFormat(locale, {
  //             month: 'short'
  //           })
  //           return monthFormatter.format(date)
          
  //         case TickMarkType.DayOfMonth:
  //           return date.getDate()
          
  //         case TickMarkType.Time:
  //           const timeFormatter = new Intl.DateTimeFormat(locale, {
  //             hour: 'numeric',
  //             minute: 'numeric'
  //           })
  //           return timeFormatter.format(date)

  //         case TickMarkType.TimeWithSeconds:
  //           const timeWithSecodnFormatter = new Intl.DateTimeFormat(locale, {
  //             hour: 'numeric',
  //             minute: 'numeric',
  //             second: 'numeric'
  //           })
  //           return timeWithSecodnFormatter.format(date)
            
  //         default:
  //           console.log('sorry we are out of .')
  //       }
  //     }
  //   });

  //   chart.timeScale().fitContent() //for making the price always appear in a scale of 100%

  //   const newSeries = chart.addCandlestickSeries() //for creating a candlesticks charts

  //   newSeries.applyOptions({  //styling the candlesticks
  //     upColor: '#26a69a',
  //     downColor: '#ef5350',
  //     borderVisible: false,
  //     wickUpColor: '#26a69a',
  //     wickDownColor: '#ef5350'
  //   })

  //   newSeries.setData(data)

  //   const handleResize = () => {  //adjusting the widith of the chart based on the user window
  //     chart.applyOptions({
  //       width: chartContainer.current.clientWidth
  //     })
  //   }

  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     chart.remove()
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // return (
  //   <main ref={chartContainer}></main>
  // );

  return (
    <main>
      <Navbar />
      <Header />
      <MainPrices />
      <Perks />
    </main>
  )
}
