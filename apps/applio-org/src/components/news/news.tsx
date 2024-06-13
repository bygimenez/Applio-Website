"use client"

import { supabase } from "@/utils/database"
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function BlogMore() {
    const [data, setData] = useState<any>([])
    const [end, setEnd] = useState(14)
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)

    async function getFixedNews() {
        const {data, error} = await supabase.from("blog").select("*").order("created_at", {ascending: false}).range(0, end);
        if (data) {
            setData(data)
            setLoading(false)

            const updatedEnd = end
            if (data.length < updatedEnd) {
                setHasMore(false)
            } else {
                setHasMore(true)
            }
        }

        if (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getFixedNews();
    }, []);

    return (
        <InfiniteScroll
        dataLength={data.length}
        next={getFixedNews}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}>
        <section>
        <h1 className="text-left text-3xl px-4 font-bold tracking-tight md:tracking-tighter text-white max-w-4xl mt-12">Browse more</h1>
            {data?.length === 0 && !loading && (
                <h1 className="text-xl text-center">Oops... we didn&apos;t find more news.</h1>
            )}
            {data && (
            <>
            <div className="grid md:grid-cols-3 md:w-[120svh] gap-4 p-4">
            {data && data.map((item: any) => (
                <a key={item.id} className="relative w-full h-full rounded-lg overflow-hidden flex flex-col justify-end" href={`/news/${item.id}`}>
                <div className="absolute inset-x-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                <img src={item.image_url} className="rounded-md h-[40svh] object-cover bg-center bg-white/10 shadow-xl" alt="News image"/>
                <div className="p-4 absolute top-0">
                    <p className="text-xs text-white">{item.tag} · {new Date(item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</p>
                </div>
                <div className="p-4 absolute">
                    <h1 className="text-xl font-bold max-w-sm text-left">{item.title}</h1>
                </div>
                </a>
            ))}
            </div>
            </>
            )}
        </section>
        </InfiniteScroll>
    )
}