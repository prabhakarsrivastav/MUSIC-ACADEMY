import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DatePicker = ({ selectedDate, onChange, onClose, className = "left-0 origin-top-left" }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

    // Reset current month view if selectedDate changes externally
    useEffect(() => {
        setCurrentMonth(new Date(selectedDate));
    }, [selectedDate]);

    const daysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateClick = (day) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        // Adjust for timezone offset to avoid issues
        const offsetDate = new Date(newDate.getTime() - (newDate.getTimezoneOffset() * 60000));
        onChange(newDate);
        if (onClose) onClose();
    };

    const renderDays = () => {
        const days = [];
        const daysCount = daysInMonth(currentMonth);
        const startDay = firstDayOfMonth(currentMonth);
        const today = new Date();

        // Empty cells for days before start of month
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
        }

        // Days of the month
        for (let day = 1; day <= daysCount; day++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const isSelected = selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

            const isToday =
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();

            days.push(
                <button
                    key={day}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDateClick(day);
                    }}
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-all duration-200
                        ${isSelected
                            ? 'bg-primary text-white font-bold shadow-md shadow-primary/30'
                            : 'hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-700 dark:text-slate-300'}
                        ${isToday && !isSelected ? 'text-primary font-bold bg-primary/5' : ''}
                    `}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return (
        <div
            className={`absolute top-full mt-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-slate-100 dark:border-zinc-800 p-4 w-[280px] z-50 animate-in fade-in zoom-in-95 duration-200 ${className}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
            <div className="flex items-center justify-between mb-4 px-2">
                <button
                    onClick={(e) => { e.stopPropagation(); handlePrevMonth(); }}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full text-slate-400 hover:text-primary transition-colors"
                >
                    <ChevronLeft size={18} />
                </button>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <button
                    onClick={(e) => { e.stopPropagation(); handleNextMonth(); }}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full text-slate-400 hover:text-primary transition-colors"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            <div className="grid grid-cols-7 mb-2">
                {weekDays.map(day => (
                    <div key={day} className="h-8 w-8 flex items-center justify-center text-xs font-medium text-slate-400">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1">
                {renderDays()}
            </div>
        </div>
    );
};

export default DatePicker;
