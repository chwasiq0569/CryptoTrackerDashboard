import React from "react";
import { Radar } from "react-chartjs-2";
import styles from './DataPlot.module.css'

const DataPlot = ( { coin } ) => {
      const [labelsArr, setLabelsArr] = React.useState([]);
      const [dataArrOne, setDataArrOne] = React.useState([]);
      const [dataArrTwo, setDataArrTwo] = React.useState([]);
      const [historyPeriod, setHistoryPeriod] = React.useState(["1D", "14D", "30D"]);
      const [selectedPeriod, setSelectedPeriod] = React.useState("14D");
 
    function userToClass(user = "14D") {
        var userClass = "";
        // console.log(selectedCountry);
        if (user === selectedPeriod) {
          userClass = styles.active
        } else {
          userClass = styles.historyTime;
        }
        return userClass;
  }


 

      const fetchData = async () => {
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${selectedPeriod}`);
          const coinHistory = await response.json();
          console.log("CHART DATA", coinHistory)
        // let count = 0;
          let labelsArray = [];
          let dataArrayOne = [];
          let dataArrayTwo = [];
          coinHistory.prices.forEach((price, i) => {
            let randomValue = Math.floor((Math.random() * -5) + -250);
            let randomValue2 = Math.floor((Math.random() * 250) + -500);

          if (i % 10 == 0) {
            labelsArray = [...labelsArray, i * randomValue2];
            dataArrayOne = [...dataArrayTwo, price[1] * randomValue * -975];
            dataArrayTwo = [...dataArrayTwo, price[0] * randomValue2 * -975];
            console.log("labelsArray: ", labelsArray);
            console.log("dataArrayOne: ", dataArrayOne);
            console.log("dataArrayTwo: ", dataArrayTwo);
                           }

                                                   })
            setLabelsArr([...labelsArray]);
            setDataArrOne([...dataArrayOne]);
            setDataArrTwo([...dataArrayTwo]);
                                     }
    React.useEffect(() => {
        fetchData();
    }, [coin, selectedPeriod])


    
const options = {
    scale: {
        angleLines: {
            display: true,
        },
        ticks: {
            suggestedMin: 50,
            suggestedMax: 100,
        }
    }
};

  const data = {
    labels:  labelsArr,
    datasets: [
      {
        label: "",
        backgroundColor: "rgba(0, 0, 255, 0.45)",
        borderColor: "rgba(0, 0, 255, 1)",
        data: dataArrOne,
      },
      {
        label: " ",
        backgroundColor: "rgba(255, 99, 132, 0.25)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: dataArrTwo
      },
    ],
  };
  return (
    <div className={styles.dataPlot_Wrapper}>
        <div className={styles.coinDetail}>
            <div className={styles.coinPrice}>
                <p>${coin.current_price}</p>
                <div className={styles.badge}>
                    <p>{coin.price_change_percentage_24h}%</p>
                </div>
            </div>
            <div className={styles.percentageChange}>
                
                 <div className={styles.Btns}>
                    <div className={styles.Btn}>
                        <p>Unwatch</p>
                    </div>
                    <div className={styles.Btn}>
                        <p>Add</p>
                    </div>
                </div>
            </div>
        </div>

      <Radar data={data} height={250} options={options} />
      <div className={styles.historyTimeContainer}>
        {
          historyPeriod.map((period, i) => (
                <div key={i} onClick={() => setSelectedPeriod(period)} className={`${userToClass(period)}`}>
                     <p>{period}</p>
                </div>
          ))
        }
      </div>
    </div>
  );
};

export default DataPlot;
