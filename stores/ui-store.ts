import { create } from "zustand";

type DateRange = {
  startDate: Date;
  endDate: Date;
  key: string;
};

type UIState = {
  // Date picker states
  isDateRangePickerOpen: boolean;
  dateRange: DateRange;
  openDateRangePicker: () => void;
  closeDateRangePicker: () => void;
  toggleDateRangePicker: () => void;
  setDateRange: (range: DateRange) => void;
  updateDateRange: (startDate: Date, endDate: Date) => void;
  resetDateRange: () => void;
};

const today = new Date();
const startDate = new Date(today);
const endDate = new Date(today);

// Add 7 days to the end date
endDate.setDate(endDate.getDate() + 6);

const defaultDateRange: DateRange = {
  startDate,
  endDate,
  key: "selection",
};

export const useUIStore = create<UIState>((set) => ({
  
  // Date picker states
  isDateRangePickerOpen: false,
  dateRange: defaultDateRange,
  
  // Date picker actions
  openDateRangePicker: () => set({ isDateRangePickerOpen: true }),
  closeDateRangePicker: () => set({ isDateRangePickerOpen: false }),
  toggleDateRangePicker: () => set((state) => ({ 
    isDateRangePickerOpen: !state.isDateRangePickerOpen 
  })),
  
  setDateRange: (range: DateRange) => set({ dateRange: range }),
  
  updateDateRange: (startDate: Date, endDate: Date) => set({ 
    dateRange: { 
      startDate, 
      endDate, 
      key: "selection" 
    } 
  }),
  
  resetDateRange: () => set({ dateRange: defaultDateRange }),
}));