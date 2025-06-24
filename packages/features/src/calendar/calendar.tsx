import React, { useState } from "react";
import dayjs from "dayjs";

type CalendarProps =  DesignSystem.AsProps<'PageLayout'>;

export function Calendar({ PageLayout, ...props}: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [activities, setActivities] = useState<any>({});
  const [newTitle, setNewTitle] = useState("");

  const startOfMonth = selectedDate.startOf("month");
  const endOfMonth = selectedDate.endOf("month");
  const daysInMonth = endOfMonth.date();
  const startWeekday = startOfMonth.day();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => setSelectedDate(selectedDate.subtract(1, "month"));
  const handleNextMonth = () => setSelectedDate(selectedDate.add(1, "month"));

  const handleAddActivity = (dateKey: any) => {
    if (newTitle.trim()) {
      setActivities((prev: any) => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), newTitle],
      }));
      setNewTitle("");
    }
  };

  return <PageLayout {...props}>
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📅 Calendrier des activités</h1>

      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">⬅️ Mois précédent</button>
        <h2 className="text-xl font-semibold">{selectedDate.format("MMMM YYYY")}</h2>
        <button onClick={handleNextMonth} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Mois suivant ➡️</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
        {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((d) => (
          <div key={d} className="text-gray-700">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: startWeekday }).map((_, i) => (
          <div key={"empty-" + i}></div>
        ))}

        {days.map((day) => {
          const dateKey = selectedDate.date(day).format("YYYY-MM-DD");
          return (
            <div key={day} className="border rounded-lg p-2 h-32 flex flex-col justify-between bg-white shadow-sm">
              <div className="text-sm font-medium text-right text-blue-700">{day}</div>
              <div className="overflow-y-auto text-xs">
                {(activities[dateKey] || []).map((a: any, i: number) => (
                  <div key={i} className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded mb-1 truncate">{a}</div>
                ))}
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs border rounded p-1"
                  placeholder="Ajouter..."
                />
                <button
                  onClick={() => handleAddActivity(dateKey)}
                  className="w-full mt-1 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600"
                >+
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </PageLayout>
}
