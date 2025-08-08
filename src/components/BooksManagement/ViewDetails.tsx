import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { Link, useParams } from "react-router";

export default function ViewDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  console.log({ data });
  if (isLoading) {
    return <p className="text-sm text-gray-500">Loading......</p>;
  }
  const genreImages: Record<string, string> = {
    FICTION: "https://i.ibb.co.com/1fXtmyZ6/fiction.jpg",
    NON_FICTION: "https://i.ibb.co.com/FkDzkDtH/non-fiction.jpg",
    SCIENCE: "https://i.ibb.co.com/JWkWhkRZ/science.jpg",
    HISTORY: "https://i.ibb.co.com/JWkWhkRZ/science.jpg",
    FANTASY: "https://i.ibb.co.com/3HntfDV/fantasy.jpg",
    BIOGRAPHY: "https://i.ibb.co.com/0yP51FVb/biography.png",
    Default: "https://i.ibb.co.com/jPh23Ptf/default.jpg",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-8 text-[#1232c1cf]">
        Book Profile
      </h1>
      <div className="flex items-center justify-center mb-6">
        {data?.data?.map((book: any) => (
          <div className="card bg-white shadow-md rounded-lg w-full max-w-md md:w-2/3 lg:w-1/2">
            <figure className="px-10 pt-10">
              <img
                src={genreImages[book?.genre] || genreImages.Default}
                alt={book?.genre}
                className="rounded-xl w-full h-[300px] mb-4"
              />
            </figure>
            <div className="card-body  p-3">
              <h2 className="card-title text-lg mb-1 text-indigo-800 font-bold">
                Title:{" "}
                <span className="font-semibold text-lg text-indigo-600">
                  {book?.title}
                </span>
              </h2>
              <p className="text-gray-800 mb-1 font-semibold text-sm">
                Description:{" "}
                <span className=" text-gray-400 font-normal text-sm ">
                  {book?.description}
                </span>
              </p>
              <p className="text-gray-800 mb-1 font-semibold text-sm">
                Author: <span className="text-indigo-600">{book?.author}</span>
              </p>
              <p className="text-gray-800 mb-1 font-semibold text-sm">
                ISBN: <span className="text-indigo-600">{book?.isbn}</span>
              </p>
              <p className="text-gray-800 mb-1 font-semibold text-sm">
                Genre: <span className="text-indigo-600">{book?.genre}</span>
              </p>
              <p className="text-gray-800 mb-1 font-semibold text-sm">
                Availability:{" "}
                <span
                  className={
                    book?.available ? "text-green-600" : "text-red-600"
                  }
                >
                  {book?.available ? "Available" : "Unavailable"}
                </span>
              </p>

              <div className="flex justify-center mt-5 items-center">
                <Link
                  to="/books"
                  className="btn btn-primary border-2 rounded-xl p-2 bg-cyan-700 text-white text-xs"
                >
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
