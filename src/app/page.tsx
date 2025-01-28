import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Home() {
  const mockCategory = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Animation" },
    { name: "Comedy" },
    { name: "Crime" },
    { name: "Documentary" },
    { name: "Drama" },
    { name: "Famely" },
    { name: "Fantasy" },
    { name: "History" },
    { name: "Horror" },
    { name: "Music" },
    { name: "Mystery" },
    { name: "Romance" },
    { name: "Sience Fiction" },
    { name: "TV Movie" },
    { name: "Thriller" },
    { name: "War" },
    { name: "Western" },
  ];
  return (
    <>
      <header className=" bg-yellow-200 flex items-center justify-center">
        <div className="flex gap-x-3">
          <img src="./film.jpg" alt="" />
          <h4 className="italic font-bold">Movie Z</h4>
        </div>

        <div className="flex gap-x-3">
       
          
            <NavigationMenu> 
              <NavigationMenuList> 
                <NavigationMenuItem>
                  <NavigationMenuTrigger> Genres</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[450px] h-[300px] bg-red-200">
                      {mockCategory?.map((category, index) => (
                        <Badge className="bg-green-400 gap-x-15" key={index} >
                          <p>{category.name}</p>
                          <ChevronRight />
                        </Badge>
                      ))}
                    </div>

                    <NavigationMenuLink></NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <input placeholder="Search Movie..." className=" bg-green-500"></input>

         
        </div>

        <Button className="">Button</Button>
      </header>
    </>
  );
}
 test
