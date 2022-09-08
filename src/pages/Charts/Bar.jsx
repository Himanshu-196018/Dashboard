import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel
} from "@syncfusion/ej2-react-charts";

import { ChartsHeader } from "../../components";
import {
  barCustomSeries,
  barPrimaryYAxis,
  barPrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
      <ChartComponent
        id="bar-chart"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "white"}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[Category, Tooltip, Legend, DataLabel, ColumnSeries]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
