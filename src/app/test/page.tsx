import Count from "@/components/count";
import HashCount from "@/components/hash-count";
import HashCountControl from "@/components/hash-count-control";

export default async function page() {
    return (
            <div>
                <Count/>
                <HashCount/>
                <HashCountControl/>
            </div>
    )
}