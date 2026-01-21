import { Inter } from "next/font/google"
import { TechItemType } from "../../../constants/Stack";
import TechItem from "./TechItem";
const kodemonoFont = Inter({
    subsets: ["latin"],
    weight: "600",
})
type StackSectionProps = {
    title: string;
    items: TechItemType[];
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
};

function StackSection({ title, items, columns = 4 }: StackSectionProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className={`text-start text-sm text-zinc-400 ${kodemonoFont.className}`}>
                {title}
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-${columns}`}>
                {items.map((item) => (
                    <TechItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default StackSection