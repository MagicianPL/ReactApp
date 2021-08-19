import ".//Calendar.css";

const Calendar = (props) => {
  const month = props.date.toLocaleString("pl-PL", { month: "long" });
  const year = props.date.toLocaleString("pl-PL", { year: "numeric" });
  const day = props.date.toLocaleString("pl-PL", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default Calendar;
