import NavBar from "@/Components/NavBar";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import SearchBar from "@/Components/SearchBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

/*
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
    */

export default function Dashboard({ auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex flex-col-reverse md:flex-row container p-12">
            {/* left-content */}
            <div className="md:w-[20%] border">
                <div className="max-w-7xl">
                    {/*
                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                        <div>hide this text on small screen</div>
                    </div>
                */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <NavBar />
                    </div>
                </div>
            </div>
            <div className="md:w-[80%]">
                <div>
                    <AuthenticatedLayout user={auth.user}></AuthenticatedLayout>
                </div>
            </div>
        </div>
    );
}
