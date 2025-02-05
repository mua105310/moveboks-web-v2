import { PackageModel} from "@/internal/models/package";
import Image from "next/image";

export interface PackageCardProps {
  pack?: PackageModel;
}

export default function PackageCard({ pack }: PackageCardProps) {
  if (!pack) return;
  return (
    <div className="flex flex-1 ">
      
    </div>
  );
}