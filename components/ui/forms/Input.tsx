type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
}

export default function Input ({
  value,
  onChange,
  placeholder = "Enter your name",
  label = "Name",
}: InputProps) {
  return (
    <div className="space-y-2.5 md:space-y-3">
        <label htmlFor="" className="text-sm font-medium leading-6 block">{label}</label>
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-[#1C3324] border border-[#366347] rounded-[12px] p-4 h-12 md:h-14 outline-none placeholder:text-[#94C7A8] placeholder:font-light text-white font-normal text-base leading-6 focus:border-[#A6F2C4] focus:ring-1 focus:ring-[#A6F2C4] focus:outline-none transition duration-200"
        autoComplete="text"
        />
    </div>
  );

}