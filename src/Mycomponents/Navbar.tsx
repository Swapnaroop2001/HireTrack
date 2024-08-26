import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white ">
      <div className="flex justify-center items-center w-full py-4">
        <NavigationMenu className="flex space-x-8">
          <NavigationMenuLink asChild>
            <Link to="/" className="hover:bg-gray-200 rounded px-4 py-2">
              <Button
                variant="ghost"
                className="text-lg hover:bg-transparent focus:outline-none"
              >
                Home
              </Button>
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link to="/info" className="hover:bg-gray-200 rounded px-4 py-2">
              <Button
                variant="ghost"
                className="text-lg hover:bg-transparent focus:outline-none"
              >
                Info
              </Button>
            </Link>
          </NavigationMenuLink>
        </NavigationMenu>
      </div>
    </div>
  );
}
