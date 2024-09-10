import { useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Globe, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";
import HeroImage from "@/assets/hero_pizza.png";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          {/* Search Input Field */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by restaurant & dishes"
              className="shadow-lg focus-visible:ring-1"
            />
            <Button className="bg-red hover:bg-hoverRed">Search</Button>
          </div>
          {/* Searched items displayed here  */}
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-3 my-3">
              <h1 className="font-medium text-xl">(2) Search result found</h1>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {["biryani", "momos", "jalebi"].map(
                  (selectedFilter: string, idx: number) => (
                    <div
                      key={idx}
                      className="relative inline-flex items-center max-w-full "
                    >
                      <Badge
                        className="text-red rounded-md hover:cursor-pointer pr-6 whitespace-nowrap"
                        variant={"outline"}
                      >
                        {selectedFilter}
                      </Badge>
                      <X
                        size={16}
                        className="absolute text-red  right-1 hover:cursor-pointer "
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <Separator className="mb-3 md:hidden" />
            {/* Restaurant Cart  */}

            <div className="grid md:grid-cols-3 gap-4">
                {
                    [1,2].map((item:number , idx:number)=>(
                        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <AspectRatio ratio={16 / 6}>
                    <img
                      src={HeroImage}
                      alt="Image"
                      className="rounded-md object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="absolute top-2 left-2 bg-white dark:bg-gray-600 bg-opacity-75 rounded-lg p-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h1 className="text-2xl font-bold  text-gray-900 dark:text-gray-100 ">
                    Tandori Tadka
                  </h1>
                  <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={16} />
                    <p className="text-sm">
                      City:{""}
                      <span className="font-medium">Mumbai</span>
                    </p>
                  </div>
                  <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                    <Globe size={16} />
                    <p className="text-sm">
                      Country:{""}
                      <span className="font-medium">India</span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {["biryani", "momos", "jalebi"].map(
                      (cuisine: string, idx: number) => (
                        <Badge
                          key={idx}
                          className="text-red rounded-md hover:cursor-pointer  whitespace-nowrap"
                          variant={"outline"}
                        >
                          {cuisine}
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4  border-t dark:border-t-gray-700 border-t-gray-100 text-white flex justify-end">
                  <Link to={`/restaurant/${123}`}>
                    <Button className="bg-red hover:bg-hoverRed font-semibold py-2 px-4 rounded-20 shadow-sm transition-colors duration-200">
                      View Menus
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
                    )) 
                }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

const SearchPageSkeleton = () =>{
    return(
        <>
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
  <div className="relative">
    <AspectRatio ratio={16 / 6}>
      {/* Skeleton for the image */}
      <Skeleton className="rounded-md w-full h-full" />
    </AspectRatio>
    <div className="absolute top-2 left-2 bg-white dark:bg-gray-600 bg-opacity-75 rounded-lg p-1">
      {/* Skeleton for the "Featured" tag */}
      <Skeleton className="h-4 w-16 rounded" />
    </div>
  </div>
  <CardContent className="p-4">
    {/* Skeleton for the title */}
    <Skeleton className="h-6 w-3/4 mb-2" />
    <div className="mt-2 gap-1 flex items-center">
      {/* Skeleton for the location icon and text */}
      <Skeleton className="h-4 w-4 mr-2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
    <div className="mt-2 gap-1 flex items-center">
      {/* Skeleton for the country icon and text */}
      <Skeleton className="h-4 w-4 mr-2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
    <div className="flex gap-2 mt-4 flex-wrap">
      {/* Skeleton for the badges */}
      {Array(3)
        .fill(null)
        .map((_, idx) => (
          <Skeleton key={idx} className="h-6 w-16 rounded-md" />
        ))}
    </div>
  </CardContent>
  <CardFooter className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 text-white flex justify-end">
    {/* Skeleton for the button */}
    <Skeleton className="h-8 w-24 rounded" />
  </CardFooter>
</Card>
        </>

    )
}

const NoResultFound = ({ searchText }: { searchText: string }) => {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          No results found
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          We couldn't find any results for "{searchText}". <br /> Try searching
          with a different term.
        </p>
        <Link to="/">
          <Button className="mt-4 bg-orange hover:bg-orangeHover">
            Go Back to Home
          </Button>
        </Link>
      </div>
    );
  };