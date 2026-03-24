import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  User,
  TrendingUp,
} from "lucide-react";

const ProgressPage: React.FC = () => {
  const [reportData, setReportData] = useState({
    week: "Week 2",
    progress: 20,
    completedTasks: [
      {
        id: 1,
        title: "Initial Site",
        description:
          "Reviewed current website structure, plugins, and theme configuration",
      },
      {
        id: 2,
        title: "Wireframes & Mockups",
        description: "Created site wireframes and mockups for the new layout",
      },
    ],
    inProgressTasks: [
      {
        id: 3,
        title: "Hi-Fi Design & Prototyping",
        description:
          "Creating high-fidelity mockups and interactive prototypes for the new website layout",
      },
      {
        id: 4,
        title: "WordPress Implementation",
        description: "Directly implementing the new Hi-Fi designs and prototypes into the live WordPress website",
      },
    ],
    plannedTasks: [
      {
        id: 5,
        title: "Responsive Optimization",
        description: "Ensuring the new designs look perfect across all mobile and tablet devices",
      },
      {
        id: 6,
        title: "Final Testing & Client Review",
        description: "Test all changes and present the implemented designs for client feedback",
      },
    ],
  });

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const today = new Date();
  const day = today.getDay();
  const daysUntilFriday = (5 - day + 7) % 7;
  const friday = new Date(today);
  friday.setDate(today.getDate() + daysUntilFriday);

  // format to your preferred format
  const dueDate = friday.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp size={32} />
            <h1 className="text-3xl font-bold">Weekly Progress Report</h1>
          </div>
          <p className="text-purple-100">
            WordPress Maintenance Project - PT Overcrank Media Production
          </p>
        </div>

        {/* Meta Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-purple-600" size={20} />
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Report Week
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {reportData.week}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-purple-600" size={20} />
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Date
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{currentDate}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-purple-600" size={20} />
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Due Date (Est)
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{dueDate}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <User className="text-purple-600" size={20} />
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                Developer
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">IdProject</p>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-purple-600 rounded"></div>
            Overall Progress
          </h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Completion
              </span>
              <span className="text-2xl font-bold text-purple-600">
                 {reportData.progress ? `${reportData.progress} %` : `${0} %`}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500"
                style={{ width: `${reportData.progress}%` }}
              >
                {reportData.progress ? `${reportData.progress} %` : ''}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Project is progressing as planned. Initial setup and requirements
            analysis, wireframes, and mockups have been completed.
          </p>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-green-500 rounded"></div>
            <CheckCircle className="text-green-500" size={24} />
            Completed Tasks
          </h2>
          <div className="space-y-3">
            {reportData.completedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    ✓ Done
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Tasks */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-yellow-500 rounded"></div>
            <Clock className="text-yellow-500" size={24} />
            In Progress
          </h2>
          <div className="space-y-3">
            {reportData.inProgressTasks.map((task) => (
              <div
                key={task.id}
                className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                  <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    ⏳ Working
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planned Tasks */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-red-500 rounded"></div>
            <AlertCircle className="text-red-500" size={24} />
            Planned for End Of Week
          </h2>
          <div className="space-y-3">
            {reportData.plannedTasks.map((task) => (
              <div
                key={task.id}
                className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    ⏰ Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-purple-600 rounded"></div>
            📸 Screenshots/Updates
          </h2>
          <p> No screenshots at the moment</p>
          {/* <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-gray-600 font-medium mb-2">
              Attach screenshots of completed work here
            </p>
            <p className="text-sm text-gray-400">
              Before/After comparisons, new features, or visual changes
            </p>
          </div> */}
        </div>

        {/* Notes Section */}
        <div className="bg-blue-50 rounded-xl p-8 shadow-sm border-l-4 border-blue-500 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            💬 Notes & Comments
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong className="text-blue-700">Blockers:</strong> None at the
              moment
            </p>
            <p>
              <strong className="text-blue-700">Additional Notes:</strong> All
              Hi-Fi designs are actively being translated into the WordPress environment.
              We are making sure the prototype closely matches the final live outcome.
            </p>
            <p>
              <strong className="text-blue-700">Next Steps:</strong> Complete the 
              WordPress implementation phase and prepare the site for a thorough 
              responsive review across different devices.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <p className="font-bold text-gray-800 mb-2">
            IdProject | WordPress Developer
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Email: idprojectworkmail@gmail.com | Phone: +62 81338452753
          </p>
          <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-200">
            This report is confidential and intended for PT Overcrank Media
            Production only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
