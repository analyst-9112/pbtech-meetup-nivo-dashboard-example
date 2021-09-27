import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-resizable/css/styles.css';
import './styles/app.css';

// Hardcoded visualization examples
import Heatmap from './visualizations/heatmap';
// import Bar from './visualizations/bar';
import Radar from './visualizations/radar';
import Line from './visualizations/line';
import Bar2 from './visualizations/bar2'

import Pie from './visualizations/pie'


// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive);
// Determines the screen breakpoints for the columns
// const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320 };
// How many columns are available at each breakpoint
const cols = { lg: 4 };

function App() {
  return (
    <div className="App">
      <div className="w-full">
      <div id="container" className="flex flex-col justify-center items-center m-5">
      <img src="CD-logo.png" alt="" width="400" height="100"/>
      </div>
        <header className="flex flex-col justify-center items-center bg-blue-900 m-5 p-5 shadow-lg rounded-lg">
          <h1 className="text-4xl text-orange-600">Youth Program Dashboard</h1>
        </header>

        <ResponsiveGridLayout
          className="my-5 mx-8"
          // breakpoints={breakpoints}
          cols={cols}
        >
          <div
            className="grid-cell"
            key="1"
            data-grid={{ x: 0, y: 0, w: 2, h: 3, static: true }}
          >
            <h3 className="grid-header">What High School Do You Attend?</h3>

            <img src="chart.svg" alt=""/>

            {/* <Heatmap /> */}
          </div>

          <div
            className="grid-cell"
            key="2"
            data-grid={{ x: 4, y: 0, w: 2, h: 3 }}
          >
            <h3 className="grid-header">Students Favorite Food</h3>
            <Bar2 />
          </div>
          <div
            className="grid-cell"
            key="3"
            data-grid={{ x: 2, y: 6, w: 2, h: 3 }}
          >
            <h3 className="grid-header">Battle Of The Laptops</h3>
            <Radar />
          </div>
          <div
            className="grid-cell"
            key="4"
            data-grid={{ x: 0, y: 8, w: 4, h: 2 }}
          >
            <h3 className="grid-header">Students Favorite Transportion</h3>
            <Line />
          </div>

          <div
            className="grid-cell"
            key="5"
            data-grid={{ x: 0, y: 2, w: 4, h: 3}}
          >
            <h3 className="grid-header">What Coding Languages Do You Know?</h3>
            <Pie />
            
          </div>

          <div
            className="grid-cell"
            key="6"
            data-grid={{ x: 0, y: 4, w: 2, h: 3}}
          >
            <h3 className="grid-header">High School Skill Score</h3>

            <Heatmap />
          </div>

        </ResponsiveGridLayout>
      </div>
    </div>
  );
}

export default App;
