import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Skye Powered, LLC"
      width={112}
      height={112}
      priority
      className={className}
    />
  );
}
