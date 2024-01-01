import { v2 as cloudinary } from "cloudinary";
import { AlbumCard } from "./album-card";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
	cloudinary.config({
		cloud_name: "dbjhgyeei",
		api_key: "952614936124863",
		api_secret: "-AxInfGDYmWW8UXq1bBe_NmtDvY",
	});

	const { folders } = (await cloudinary.api.root_folders()) as {
		folders: Folder[];
	};

	return (
		<section>
			<div className="flex flex-col gap-8">
				<div className="flex justify-between">
					<h1 className="text-4xl font-bold">Albums</h1>
				</div>

				<div className="grid grid-cols-3 gap-4">
					{folders.map((folder) => (
						<AlbumCard key={folder.path} folder={folder} />
					))}
				</div>
			</div>
		</section>
	);
}
