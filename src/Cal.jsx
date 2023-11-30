import React, { useState } from "react";
import "./cal.css";
import Calendar from "react-calendar";

const Cal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showMonthCalendar, setShowMonthCalendar] = useState(false);

  return (
    <div className="report-container">
      <div className="calendar-container">
        <div className="calendar-dropdown">
          <div className="calendar-header">
            <span onClick={() => setShowMonthCalendar(!showMonthCalendar)}>
              {showMonthCalendar ? "Hide Calendar" : "Show Calendar"}
            </span>
            <span> - {selectedDate.toDateString()}</span>
          </div>
          {showMonthCalendar && (
            <Calendar
              onChange={(date) => setSelectedDate(date)}
              value={selectedDate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cal;
