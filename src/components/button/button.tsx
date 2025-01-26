import Link from "next/link";

interface ButtonProps {
  path: string;
  label?: string;
}

export default function Button({ path, label = "Click here" }: ButtonProps) {
  return (
    <Link
      href={path}
      className="inline-block px-6 py-2 text-center text-sm font-medium transition-all rounded-sm hover:scale-105"
      style={{
        backgroundColor: "var(--primary) !important",
        color: "var(--foreground) !important",
        textDecoration: "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {label}
    </Link>
  );
}
