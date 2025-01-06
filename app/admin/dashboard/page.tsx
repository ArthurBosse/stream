"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { DataTable } from "./data-table";
import { columns, type PageView } from "./columns";

interface MovieView {
  id: string;
  view_count: number;
  movies: {
    title: string;
  }[];
}

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [topMovies, setTopMovies] = useState<MovieView[]>([]);
  const [totalVisitors, setTotalVisitors] = useState(0);

  const fetchAnalytics = async (selectedDate: Date) => {
    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(selectedDate);
    endOfDay.setHours(23, 59, 59, 999);

    // Fetch page views
    const { data: views } = await supabase
      .from("page_views")
      .select("*")
      .gte("timestamp", startOfDay.toISOString())
      .lte("timestamp", endOfDay.toISOString())
      .order("timestamp", { ascending: false });

    // Fetch top movies
    const { data: movies } = await supabase
      .from("movie_views")
      .select(`
        id,
        view_count,
        movies (
          title
        )
      `)
      .order("view_count", { ascending: false })
      .limit(10);

    setPageViews(views as PageView[] || []);
    setTopMovies(movies as MovieView[] || []);
    setTotalVisitors(views?.length || 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Sélectionner une date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date);
                if (date) fetchAnalytics(date);
              }}
            />
          </Card>
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Statistiques</h2>
            <div className="space-y-2">
              <p>Visiteurs totaux: {totalVisitors}</p>
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Visites détaillées</h2>
            <DataTable columns={columns} data={pageViews} />
          </Card>
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Films les plus consultés</h2>
            <div className="space-y-2">
              {topMovies.map((movie) => (
                <div key={movie.id} className="flex justify-between items-center">
                  <span>{movie.movies[0]?.title}</span>
                  <span className="text-sm text-gray-500">{movie.view_count} vues</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}