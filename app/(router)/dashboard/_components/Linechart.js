import { useEffect } from "react"
import { Chart } from "chart.js";
function Linechart() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                datasets: [{
                    data: [114, 106, 106, 107, 111],
                    label: "Applied",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: false,
                }, {
                    data: [90, 44, 60, 83, 90],
                    label: "Accepted",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    fill: false,
                }, {
                    data: [21, 60, 44, 17, 21],
                    label: "Pending",
                    borderColor: "#ffa500",
                    backgroundColor: "#ffc04d",
                    fill: false,
                }, {
                    data: [3, 2, 2, 7, 0],
                    label: "Rejected",
                    borderColor: "#c45850",
                    backgroundColor: "#d78f89",
                    fill: false,
                }
                ]
            },
        });
    }, [])
    return (
        <>
            {/* line chart */}
            <div className="w-auto  flex mx-auto ">
                <div className='border border-gray-100 pt-0 rounded-xl  w-full h-fit   shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Linechart;