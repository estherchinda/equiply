type TextareaProps = {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextareaInput({
  label,
  value,
  placeholder = "Send message",
  onChange,
}: TextareaProps) {
  return (
    <section>
      <label htmlFor="message">{label}</label>
      <textarea
        name="message"
        id="message"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-[#1C3324] border border-[#366347] rounded-[12px] p-4 h-[100px] md:h-[140px] outline-none placeholder:text-[#94C7A8] placeholder:font-light text-white font-normal text-sm md:text-base leading-6 focus:border-[#A6F2C4] focus:ring-1 focus:ring-[#A6F2C4] focus:outline-none transition duration-200"
        style={{resize: 'none'}}
      ></textarea>
    </section>
  );
}
