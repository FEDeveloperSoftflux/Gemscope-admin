import { motion } from "framer-motion";
import React from "react";

const EarningsChart = () => {
  // Mock data for the chart
  const chartData = [
    { month: "Jan", value: 15000 },
    { month: "Feb", value: 25000 },
    { month: "Mar", value: 30000 },
    { month: "Apr", value: 28000 },
    { month: "May", value: 45000 },
    { month: "Jun", value: 65000 },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="chart-container"
    >
      <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Earnings Overview
            </h3>
            <span className="text-text-secondary text-sm">1 Month</span>
          </div>
        </div>

      {/* Chart SVG */}
      <div className="relative h-64">
        <svg
          width="100%"
          height="100%"
          className="overflow-visible"
          viewBox="0 0 600 300"
        >
          {/* Chart gradient definitions */}
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient
              id="chartAreaGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Chart area */}
          <path
            d={`M 0 ${300 - (chartData[0].value / maxValue) * 250} 
                ${chartData
                  .map(
                    (point, index) =>
                      `L ${index * 100} ${300 - (point.value / maxValue) * 250}`
                  )
                  .join(" ")} 
                L ${(chartData.length - 1) * 100} 300 
                L 0 300 Z`}
            fill="url(#chartAreaGradient)"
          />

          {/* Chart line */}
          <path
            d={`M 0 ${300 - (chartData[0].value / maxValue) * 250} 
                ${chartData
                  .map(
                    (point, index) =>
                      `L ${index * 100} ${300 - (point.value / maxValue) * 250}`
                  )
                  .join(" ")}`}
            className="chart-gradient-line"
            stroke="url(#chartGradient)"
            strokeWidth="4"
            fill="none"
          />

          {/* Data points */}
          {chartData.map((point, index) => (
            <motion.circle
              key={point.month}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              cx={index * 100}
              cy={300 - (point.value / maxValue) * 250}
              r="6"
              fill="url(#chartGradient)"
              className="cursor-pointer hover:r-8 transition-all"
            />
          ))}

          {/* Tooltip on hover point */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <rect
              x="220"
              y="80"
              width="80"
              height="30"
              rx="6"
              fill="rgba(0, 0, 0, 0.8)"
            />
            <text
              x="260"
              y="100"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="500"
            >
              $45,000
            </text>
          </motion.g>
        </svg>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
          {chartData.map((point) => (
            <span key={point.month} className="text-text-muted text-sm">
              {point.month}
            </span>
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4">
          <span className="text-text-muted text-sm">$60,000</span>
          <span className="text-text-muted text-sm">$45,000</span>
          <span className="text-text-muted text-sm">$30,000</span>
          <span className="text-text-muted text-sm">$15,000</span>
          <span className="text-text-muted text-sm">$0</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EarningsChart;
