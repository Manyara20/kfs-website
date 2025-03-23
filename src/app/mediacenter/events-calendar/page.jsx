import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

function EventsCalendarPage() {
  // Calendar data for March 2025
  const calendarData = [
    { day: 24, event: "" },
    { day: 25, event: "" },
    { day: 26, event: "" },
    { day: 27, event: "" },
    { day: 28, event: "" },
    { day: 1, event: "" },
    { day: 2, event: "" },
    { day: 3, event: "Africa Environment Day\nWangari Maathai Day\nWorld Wildlife Day" },
    { day: 4, event: "" },
    { day: 5, event: "" },
    { day: 6, event: "" },
    { day: 7, event: "" },
    { day: 8, event: "" },
    { day: 9, event: "" },
    { day: 10, event: "" },
    { day: 11, event: "" },
    { day: 12, event: "" },
    { day: 13, event: "" },
    { day: 14, event: "" },
    { day: 15, event: "" },
    { day: 16, event: "" },
    { day: 17, event: "" },
    { day: 18, event: "" },
    { day: 19, event: "" },
    { day: 20, event: "" },
    { day: 21, event: "International Day Of Forests" },
    { day: 22, event: "World Water Day" },
    { day: 23, event: "World Meteorological Day" },
    { day: 24, event: "" },
    { day: 25, event: "" },
    { day: 26, event: "" },
    { day: 27, event: "" },
    { day: 28, event: "" },
    { day: 29, event: "" },
    { day: 30, event: "" },
    { day: 31, event: "" },
  ];

  // Upcoming events data
  const upcomingEvents = [
    { date: "March 22, 2025", event: "World Water Day", time: "11:59 pm" },
    { date: "March 23, 2025", event: "World Meteorological Day", time: "11:11 pm" },
    { date: "June 5, 2025", event: "World Environment Day" },
    { date: "March 3, 2026", event: "Africa Environment Day" },
    { date: "March 3, 2026", event: "Wangari Maathai Day" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Events Calendar</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest events and activities from the Kenya Forest Service.</p>
        </div>

        {/* Calendar Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-8">Events in March 2025</h2>
          <div className="border-2 border-green-900 rounded-lg p-4">
            <div className="grid grid-cols-7 gap-4">
              {/* Calendar Headers */}
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                <div key={index} className="text-center font-semibold text-green-900 p-2">
                  {day}
                </div>
              ))}
              {/* Calendar Days */}
              {calendarData.map((dayData, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-between overflow-y-auto"
                >
                  <p className="text-lg font-semibold text-green-900">{dayData.day}</p>
                  {dayData.event && (
                    <p className="text-sm text-gray-700 whitespace-normal">
                      {dayData.event}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-900 text-center mb-8">Upcoming Events</h2>
          <div className="max-w-3xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <h3 className="text-2xl font-semibold text-green-900 mb-2">{event.event}</h3>
                <p className="text-gray-700">
                  {event.date} {event.time && `– ${event.time}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}

export default EventsCalendarPage;