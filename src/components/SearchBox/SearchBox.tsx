import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      type="text"
      className={css.searchInput}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
