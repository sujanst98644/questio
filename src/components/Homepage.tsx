import { Card } from "@/components/ui/card";
import React from "react";

const PostFilter = () => (
    <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Post Filter</h2>
        <div className="text-gray-500">[Filter options here]</div>
    </div>
);

const Carousel = () => (
    <div className="bg-gray-100 rounded shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Carousel</h2>
        <div className="text-gray-500">[Carousel items here]</div>
    </div>
);

const cards = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Card ${i + 1}`,
    description: "This is a sample card description.",
}));


export default function Homepage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Sidebar */}
                <aside className="md:col-span-1">
                    <PostFilter />
                </aside>

                {/* Main Content */}
                <main className="md:col-span-3">
                    <Carousel />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        <Card/>
                    </div>
                </main>
            </div>
        </div>
    );
}