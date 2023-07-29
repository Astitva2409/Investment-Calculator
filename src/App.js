import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ResultsTable from "./components/ResultsTable";

const App = () => {
  const [results, setResults] = useState(null);
  const [initialInvestment, setInitialInvestment] = useState("");

  const calculateHandler = (investmentData) => {
    setInitialInvestment(investmentData);
    const yearlyData = [];

    let currentSavings = +investmentData.currentSavings;
    const yearlyContribution = +investmentData.yearlySavings;
    const expectedReturn = +investmentData.expectedReturn / 100;
    const duration = +investmentData.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <Input onCalculate={calculateHandler} />
      {!results && <p>No investment calculated yet.</p>}
      {results && (
        <ResultsTable
          data={results}
          initialInvestment={+initialInvestment.currentSavings}
        />
      )}
    </div>
  );
};

export default App;
