import { IEvent } from "@/lib/database/models/event.model";
import Image from "next/image";
import Card from "./Card";
import Pagination from "./Pagination";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  limit: number;
  emptyStateSubtext: string;
  page: number | string;
  totalPages?: number;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
  urlParamName?: string;
};

const Collection = ({
  data,
  limit,
  emptyStateSubtext,
  emptyTitle,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  // console.log(data);

  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10 ">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "Events_Organized";
              const hidePrice = collectionType === "My_Tickets";

              return (
                <li key={event?._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>
          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col w-full wrapper min-h-[200px] justify-center items-center gap-5 bg-grey-50 rounded-md">
          <Image
            src={"/assets/images/empty-street.png"}
            alt="hero"
            width={400}
            height={400}
          />
          <p className="p-bold-20 md:h2-bold text-black/50">{emptyTitle}</p>
          <p className="text-2xl font-semibold text-black/30">
            {emptyStateSubtext}
          </p>
        </div>
      )}
    </>
  );
};

export default Collection;
