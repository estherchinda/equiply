type TableRowProps = {
  label: string;
  value: string | number | null;
  showNairaSign?: boolean;
};

export default function TableRow({ label, value, showNairaSign = false }: TableRowProps) {
  const displayValue = value === null || value === "" ? "N/A" : value;

  return (
    <div className="h-20 border-t border-[#94C7A8] text-sm leading-5 flex justify-start items-center gap-10">
      <span className="text-[#94C7A8] w-[180px] whitespace-nowrap">{label}</span>
      <span className="w-[180px] whitespace-nowrap">{showNairaSign && <span>&#x20A6;</span>} {displayValue}</span>
    </div>
  );
}
