import { useEffect } from "react";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";
import Accessibility from "highcharts/modules/accessibility";

// Inisialisasi modul hanya sekali
Exporting(Highcharts);
ExportData(Highcharts);
Accessibility(Highcharts);

export default function ChartBar() {
  useEffect(() => {
    Highcharts.chart("totalReportsChart", {
      chart: {
        type: "column",
      },
      title: {
        text: "Statistik Laporan Masuk Tahunan",
      },
      xAxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
          "Jul", "Aug", "Sep", "Okt", "Nov", "Des",
        ],
        crosshair: true,
        accessibility: {
          description: "Laporan",
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Jumlah Laporan",
        },
      },
      tooltip: {
        valueSuffix: " laporan",
      },
      plotOptions: {
        column: {
          pointPadding: 0.1,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Laporan Masuk",
          data: [
            387749, 280000, 129000, 64300, 54000, 34300,
            50000, 50000, 50000, 50000, 50000, 50000,
          ],
        },
      ],
    });
  }, []);

  return <div id="totalReportsChart"></div>;
}
