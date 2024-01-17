
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BarchartMonthly({ year= "2024" }) {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});


    const data = {
        "2024": {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    type: 'bar',
                    label: '2024',
                    backgroundColor: '#6366F1',
                    data: [50, 25, 12, 48, 80, 76, 42, 50, 25, 12, 48, 70, 76, 42],
                    barPercentage: 0.8,
                    categoryPercentage: 0.6
                }
            ]
        },
        "2023": {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    type: 'bar',
                    label: '2024',
                    backgroundColor: '#6366F1',
                    data: [25, 50, 20, 40, 20, 33, 42, 15, 50, 44, 48, 66, 46, 41],
                    barPercentage: 0.8,
                    categoryPercentage: 0.6
                }
            ]
        },
        "2022": {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    type: 'bar',
                    label: '2024',
                    backgroundColor: '#6366F1',
                    data: [25, 25, 55, 88, 68, 60, 42, 30, 50, 20, 48, 30, 62, 23],
                    barPercentage: 0.8,
                    categoryPercentage: 0.6
                }
            ]
        },
        "2021": {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    type: 'bar',
                    label: '2024',
                    backgroundColor: '#6366F1',
                    data: [30, 77, 23, 83, 70, 76, 29, 39, 24, 28, 48, 70, 46, 32],
                    barPercentage: 0.8,
                    categoryPercentage: 0.6
                }
            ]
        }
        ,
        "2020": {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    type: 'bar',
                    label: '2024',
                    backgroundColor: '#6366F1',
                    data: [30, 56, 28, 48, 60, 76, 27, 66, 88, 44, 45, 57, 37, 42],
                    barPercentage: 0.8,
                    categoryPercentage: 0.6
                }
            ]
        }
    };
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    },
                    display:false
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false,
                        color: surfaceBorder
                    }
                },
                y: {
                    display: false,
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false,
                        color: surfaceBorder
                    }
                }
            }
        };
        setChartData(data[year]);
        setChartOptions(options);
    }, [year]);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
            <div className='mt-2' style={{textAlign:"center",fontFamily:"Poppins",fontSize:"12px",fontWeight:400}}>{year}</div>
        </div>
    )
}
