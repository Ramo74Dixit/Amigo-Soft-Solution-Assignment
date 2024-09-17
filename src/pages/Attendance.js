import React, { useState, useEffect } from 'react';

const AttendancePage = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:5000/api/auth/students', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch students: ${response.statusText}`);
        }

        const data = await response.json();
        setStudents(data);
        setAttendanceData(data.map(student => ({ id: student._id, status: '' })));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStudents();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleStatusChange = (id, status) => {
    setAttendanceData(attendanceData.map(att => att.id === id ? { ...att, status } : att));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('http://localhost:5000/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ date: selectedDate, attendance: attendanceData }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit attendance: ${response.statusText}`);
      }

      alert('Attendance submitted successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-800 text-gray-100 p-8">
      <div className="container mx-auto bg-gray-900 p-6 rounded-lg shadow-lg ring-2 ring-indigo-600 ring-opacity-50">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-300 glow-text">Attendance Page</h1>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <div className="mb-6">
          <label className="block mb-2 text-xl font-semibold">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-gray-800 text-gray-100 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {students.length > 0 && (
          <div className="bg-gray-800 shadow-md rounded-lg overflow-x-auto ring-1 ring-indigo-600 ring-opacity-50">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Enrollment ID</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300">Present</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300">Absent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {students.map(student => (
                  <tr key={student._id} className="hover:bg-gray-700 transition-colors duration-200">
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.enrollmentNumber}</td>
                    <td className="px-6 py-4 text-center">
                      <input
                        type="radio"
                        name={`status-${student._id}`}
                        checked={attendanceData.find(att => att.id === student._id)?.status === 'present'}
                        onChange={() => handleStatusChange(student._id, 'present')}
                        className="form-radio h-5 w-5 text-green-400 glow-radio"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input
                        type="radio"
                        name={`status-${student._id}`}
                        checked={attendanceData.find(att => att.id === student._id)?.status === 'absent'}
                        onChange={() => handleStatusChange(student._id, 'absent')}
                        className="form-radio h-5 w-5 text-red-400 glow-radio"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
