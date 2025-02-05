import Link from "next/link";

interface ButtonProps {
  path: string;
  label?: string;
}

export default function Button({ path, label = "BOOK" }: ButtonProps) {
  return (
    <Link
      href={path}
      className="inline-block px-6 py-2 text-center text-sm font-medium rounded-sm bg-white text-black transition ease-in-out duration-500 hover:bg-[var(--primary)] hover:text-white">
      {label}
    </Link>
  );
}
