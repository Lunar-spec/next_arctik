import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-md bg-transparent shadow-xl transition-all hover:shadow-2xl md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-cover bg-center text-grey-500"
      />
      {/* is event creator */}
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <Link
            href={`/events/${event._id}/update`}
            className="transition-all rounded-md p-2 shadow-sm bg-white/10 backdrop-blur-md border-2 border-transparent cursor-pointer hover:border-white"
          >
            <Image
              src={"/assets/icons/edit.svg"}
              alt="edit"
              width={20}
              height={20}
              className="filter-white"
            />
          </Link>
          <DeleteConfirmation eventId={event._id} />
        </div>
      )}
      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            {/* Place blur bg effect on this */}
            <span className="p-semibold-14 w-min rounded-full bg-coral-500/40 px-4 py-1 text-coral-500">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="p-semibold-14 line-clamp-1 w-max rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
              {event.category.name}
            </p>
          </div>
        )}
        <p className="p-medium-16 md:p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {event.title}
          </p>
        </Link>
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-gray-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>
          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary flex gap-1">
                <span className="group group-hover:underline">
                  Order Details
                </span>
                <span className="group-hover:rotate-[-45deg] transition-all duration-300">
                  →
                </span>
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
