"use client";

import { supabase } from "@/utils/database";
import { useEffect, useState } from "react";
import Card from "./card";
import { Guide } from "@/types/guidesTypes";
import Spinner from "@/components/layout/spinner";

export default function MoreLiked() {
	const [data, setData] = useState<Guide[] | null>(null);

	async function getGuides() {
		const { data, error } = await supabase
			.from("guides")
			.select("*")
			.order("likes", { ascending: false })
			.limit(2);
		if (error) {
			console.error(error);
		}
		setData(data);
	}

	useEffect(() => {
		getGuides();
	}, []);

	return (
		<section className="w-full h-fit">
			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold">Featured</h2>
				{!data && (
					<div className="flex justify-center items-center">
						<Spinner />
					</div>
				)}
				{data && data.map((guide: Guide) => <Card key={guide.id} {...guide} />)}
			</div>
		</section>
	);
}
