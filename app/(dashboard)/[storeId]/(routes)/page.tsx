import prismadb from "@/lib/prismadb"
import Image from "next/image";

interface DashboardPageProps {
    params: { storeId: string }
};

const DashboardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

    return (
    <div className="w-full h-full flex items-center justify-center">
       {/* Active Store: {store?.name} */}
       <Image
            src='/logo.png'
            alt="logo"
            width={200}
            height={90}
            className="pb-40"
       />
    </div>
  )
}

export default DashboardPage