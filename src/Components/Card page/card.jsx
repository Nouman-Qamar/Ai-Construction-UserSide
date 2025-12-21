import React from "react";
import "./card.css";

export default function CardTables() {
  const projects = [
    { id: 1, name: "Downtown Office Tower", type: "Commercial", due: "Mar 15, 2026", contractors: 8, workers: 45, budget: "$4.2M", progress: 68, status: "On Track", statusColor: "green" },
    { id: 2, name: "Riverside Bridge Project", type: "Infrastructure", due: "Jun 30, 2026", contractors: 12, workers: 78, budget: "$8.7M", progress: 42, status: "At Risk", statusColor: "yellow" },
    { id: 3, name: "Residential Complex Phase 2", type: "Residential", due: "Dec 20, 2026", contractors: 5, workers: 32, budget: "$6.1M", progress: 12, status: "Planning", statusColor: "blue" },
  ];

  const alerts = [
    { id: 1, title: "Safety Inspection Required", message: "Downtown Office Tower requires immediate safety inspection before continuing work.", level: "high" },
    { id: 2, title: "Material Delivery Delayed", message: "Steel shipment for Riverside Bridge delayed by 3 days.", level: "medium" },
  ];

  const statusClasses = { green: "bg-green-100 text-green-700", yellow: "bg-yellow-100 text-yellow-700", blue: "bg-blue-100 text-blue-700" };
  const alertClasses = { high: "bg-red-50 border-red-200 text-red-700", medium: "bg-orange-50 border-orange-200 text-orange-700" };

  return (
    <div className="p-4 space-y-8">
      
      <div className="bg-white border rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Projects</h3>
          <span className="text-sm text-gray-500">Overview</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm card-table">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-3 px-2">Project</th>
                <th className="py-3 px-2">Type</th>
                <th className="py-3 px-2">Due</th>
                <th className="py-3 px-2">Team</th>
                <th className="py-3 px-2">Budget</th>
                <th className="py-3 px-2">Progress</th>
                <th className="py-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-b last:border-b-0">
                  <td className="py-3 px-2">
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.id}</div>
                  </td>
                  <td className="py-3 px-2 text-gray-600">{p.type}</td>
                  <td className="py-3 px-2 text-gray-600">{p.due}</td>
                  <td className="py-3 px-2 text-gray-600">
                    {p.contractors} contractors, {p.workers} workers
                  </td>
                  <td className="py-3 px-2 text-gray-600">{p.budget}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className={`h-2 rounded ${p.progress > 50 ? "bg-orange-500" : "bg-yellow-500"} progress-fill`}
                          style={{ width: `${p.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs w-10 text-right">{p.progress}%</div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${statusClasses[p.statusColor]}`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="bg-white border rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Alerts</h3>
          <span className="text-sm text-gray-500">{alerts.length} active</span>
        </div>

        <div className="grid gap-3">
          {alerts.map((a) => (
            <div
              key={a.id}
              className={`border rounded-lg p-3 ${alertClasses[a.level]}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-xs text-gray-600">{a.message}</div>
                </div>
                <div className="text-xs text-gray-500">{a.level === "high" ? "⚠" : "⏱"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}