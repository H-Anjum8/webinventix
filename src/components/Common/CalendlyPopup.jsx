import { PopupWidget } from "react-calendly";

const CalendlyPopup = () => {
  return (
    <div>
      <button
        onClick={() => document.getElementById("calendly-widget").click()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Book a Meeting
      </button>

      <PopupWidget
        url="https://calendly.com/webinventix-ai"
        rootElement={document.body}
        text="Schedule time with me"
        id="calendly-widget"
      />
    </div>
  );
};

export default CalendlyPopup;